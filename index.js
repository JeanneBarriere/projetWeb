const express = require('express');
const hbs = require('express-handlebars');
const session = require('express-session');
const app = express();
const db = require('./server/db')
const connection = require('./server/db.js');
const passport = require('passport');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(session({ secret: 'keyboard cat',resave:true,saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', require('./server/users'));
app.use('/', require('./server/passport'));


app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'default',
  layoutsDir: __dirname + '/views/',
}));
app.set('view engine', 'hbs');


app.get('/profil', function (req, res) {
  let data = {
    title: 'Connexion confirmée',
    user:req.user,
  }
  res.render('profil.hbs',data);
});

app.get('', function (req, res) {
  let data = {
    title: 'Index',
    user:req.user,
  }
  res.render('index.hbs', data);
});


app.get('/confirmedRegistration', function (req, res) {
  let data = {
    title: 'Nouvelle inscription',
    user:req.user,
  }
  res.render('confirmedRegistration.hbs', data);
});

app.get('/index', function (req, res) {
  let data = {
    title: 'Index',
    user:req.user,
  }
  res.render('index.hbs', data);
});

app.get('/signIn', function (req, res) {
  let data = {
    title: 'Inscription',
    user:req.user,
  }
  res.render('signIn.hbs', data);
});

app.get('/LogIn', function (req, res) {
  let data = {
    title: 'connexion',
    user:req.user,
  }
  res.render('logIn.hbs', data);
});

app.get('/newRecipe', function (req, res) {
  let data = {
    title: 'Nouvelle recette',
    user:req.user,
  }
  res.render('newRecipe.hbs', data);
});

app.get('/listing', function (req, res) {
    let data = {
      title: 'Cakes',
      user:req.user,
    }
    res.render('listing.hbs', data);
});

app.get('/listing/:type', function (req, res) {

  let listingArray = ['tartes', 'cookies', 'chocolat', 'glaces', 'macarons', 'entremets', 'cakes', 'biscuits', 'smoothies'];

  let page = req.query.page;

  console.log("listing "+page);

  if (listingArray.indexOf(req.params.type) == -1) {

    let data = {
      title: 'Index',
      user:req.user,
    }

    res.render('index.hbs', data);

  } else {

    let data = {
      title: req.params.type,
      user:req.user,
    }
    res.render('listing.hbs', data);
  }
});

app.get('/recipe', function (req, res) {
  let data = {
    title: 'Recettes',
    user:req.user,
  }
  res.render('recipe.hbs', data);
});

app.get('/recipe/:page', function (req, res) {
  console.log(req.params.page);
  let data = {
    title: 'Recettes',
    user:req.user,
  }
  res.render('recipe.hbs', data);
});



app.get('/*', function (req, res) {
  res.sendStatus(404);
})

app.listen(3000, function () {
  console.log('Application qui écoute sur le port 3000!');
})

var pages = require("node-github-pages")(app, {
  static: "views", // Static directory path(css, js...)
  path: "docs/.git" // Output path
});
pages.renderFiles([{
  "view": "index",
  "url": "",
  "options": { title: "Express" }
},
{
  "view": "second",
  "url": "/second",
  "options": { title: "second page" }
},
]);
