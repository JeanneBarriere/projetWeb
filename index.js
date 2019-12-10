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
app.use('/', require('./server/recipes'));
app.use('/', require('./server/passport'));

const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))



app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'default',
  layoutsDir: __dirname + '/views/',
}));
app.set('view engine', 'hbs');


app.get('/profil', function (req, res) {
  let data = {
    title: 'Profil',
    user:req.user,
  }
  res.render('profil.hbs',data);
});

app.get('', function (req, res) {
  let data = {
    title: 'Cookiejar - Accueil',
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
    title: 'Cookiejar - Accueil',
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

const recipes = [];

async function f(){
  recipes = await getRecipes(page, 2, type);
}

app.get('/listing/:type/', function (req, res) {

  let listingArray = ['tartes', 'cookies', 'chocolat', 'glaces', 'macarons', 'entremets', 'cupcakes', 'biscuits', 'smoothies'];
 
  if (listingArray.indexOf(req.params.type) == -1) {

    let data = {
      title: 'Index',
      user: req.user,
      recipes,
    }

    res.render('index.hbs', data);

  } else {

    //Solution pas très élégante, autre manière de faire ?
    const upperCase = req.params.type.charAt(0).toUpperCase() + req.params.type.substring(1);

    let data = {
      title: upperCase,
      user: req.user,
    }
    res.render('listing.hbs', data);
  }
}); 


app.get('/listing/:type/:page', function (req, res) {

  let listingArray = ['tartes', 'cookies', 'chocolat', 'glaces', 'macarons', 'entremets', 'cupcakes', 'biscuits', 'smoothies'];

  let page = req.params.page;
  /*let recipes = await getRecipes(page, 2, type);*/

  console.log("listing "+page);
  console.log(recipes);

  if (listingArray.indexOf(req.params.type) == -1) {

    let data = {
      title: 'Index',
      user: req.user,
      recipes,
    }

    res.render('index.hbs', data);

  } else {

    //Solution pas très élégante, autre manière de faire ?
    const upperCase = req.params.type.charAt(0).toUpperCase() + req.params.type.substring(1);

    let data = {
      title: upperCase,
      user: req.user,
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

app.get('/*', function (req, res) {
  res.sendStatus(404);
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
