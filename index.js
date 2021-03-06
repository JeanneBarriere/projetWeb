const express = require('express');
const hbs = require('express-handlebars');
const session = require('express-session');
const app = express();
const db = require('./server/db')
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
    title: 'CooKieJar - Profil',
    user: req.user,
  }
  res.render('profil.hbs',data);
});

app.get('', function (req, res) {
  let data = {
    title: 'CooKieJar - Accueil',
    user: req.user,
    index: true
  }
  res.render('index.hbs', data);
});


app.get('/confirmedRegistration', function (req, res) {
  let data = {
    title: 'CooKieJar - Nouvelle inscription',
    user: req.user,
  }
  res.render('confirmedRegistration.hbs', data);
});

app.get('/index', function (req, res) {
  let data = {
    title: 'CooKieJar - Accueil',
    user: req.user,
    index: true
  }
  res.render('index.hbs', data);
});

app.get('/signUp', function (req, res) {
  let data = {
    title: 'CooKieJar - Inscription',
    user: req.user,
    signUp: true
  }
  res.render('signUp.hbs', data);
});

app.get('/LogIn', function (req, res) {
  let data = {
    title: 'CooKieJar - Connexion',
    user: req.user,
    logIn: true
  }
  res.render('logIn.hbs', data);
});

app.get('/newRecipe', function (req, res) {
  let data = {
    title: 'CooKieJar - Nouvelle recette',
    user: req.user,
    newRecipe: true
  }
  res.render('newRecipe.hbs', data);
});

app.get('/listing/:type/', async function (req, res) {

  let listingArray = ['tartes', 'cookies', 'chocolat', 'glaces', 'macarons', 'entremets', 'cupcakes', 'biscuits', 'smoothies'];

  let page = 1;
  let type = req.params.type;
  let recipes = await db.getRecipes(page, 3, type);

  if (listingArray.indexOf(req.params.type) == -1) {

    let data = {
      title: 'CooKieJar - Accueil',
      user: req.user,
      index: true
    }

    res.render('index.hbs', data);

  } else {

    //Solution pas très élégante, autre manière de faire ?
    type = req.params.type.charAt(0).toUpperCase() + req.params.type.substring(1);

    let data = {
      title: 'CooKieJar - '+type,
      user: req.user,
      type,      
      page,
      recipes
    }
    res.render('listing.hbs', data);
  }
});

app.get('/listing/:type/:page', async function (req, res) {

  let listingArray = ['tartes', 'cookies', 'chocolat', 'glaces', 'macarons', 'entremets', 'cupcakes', 'biscuits', 'smoothies'];

  let page = req.params.page;
  let type = req.params.type;
  let recipes = await db.getRecipes(page, 3, type);

  console.log('Page: '+page);
  console.log('Recipes: '+recipes);

  if (listingArray.indexOf(req.params.type) == -1) {

    let data = {
      title: 'CooKieJar - Accueil',
      user: req.user,
      index: true
    }

    res.render('index.hbs', data);

  } else {

    let data = {
      title: 'CooKieJar - '+type,
      user: req.user,
      type,
      page,
      recipes
    }
    res.render('listing.hbs', data);
  }
});

app.get('/recipe/:name', async function (req, res) {
  let name = req.params.name;
  let recipe = await db.getOneRecipe(name);
  let data = {
    title: 'CooKieJar - '+name,
    user: req.user,
    recipe
  }
  res.render('recipe.hbs', data);
});

app.get('/*', function (req, res) {
  res.sendStatus(404);
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
