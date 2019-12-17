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

app.get('/signUp', function (req, res) {
  let data = {
    title: 'Inscription',
    user:req.user,
  }
  res.render('signUp.hbs', data);
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

app.get('/listing/:type/', async function (req, res) {

  let listingArray = ['tartes', 'cookies', 'chocolat', 'glaces', 'macarons', 'entremets', 'cupcakes', 'biscuits', 'smoothies'];

  let type = req.params.type;
  let recipes = await db.getRecipes(1, 3, type);

  console.log("Recipes: "+recipes);

  if (listingArray.indexOf(req.params.type) == -1) {

    let data = {
      title: 'Index',
      user: req.user,
    }

    res.render('index.hbs', data);

  } else {

    //Solution pas très élégante, autre manière de faire ?
    const upperCase = req.params.type.charAt(0).toUpperCase() + req.params.type.substring(1);

    let data = {
      title: upperCase,
      user: req.user,
      recipes,
    }
    res.render('listing.hbs', data);
  }
});

app.get('/listing/:type/:page', async function (req, res) {

  let listingArray = ['tartes', 'cookies', 'chocolat', 'glaces', 'macarons', 'entremets', 'cupcakes', 'biscuits', 'smoothies'];

  let page = req.params.page;
  let type = req.params.type;
  let recipes = await db.getRecipes(page, 3, type);

  console.log("Page: "+page);
  console.log("Recipes: "+recipes);

  if (listingArray.indexOf(req.params.type) == -1) {

    let data = {
      title: 'Index',
      user: req.user,
    }

    res.render('index.hbs', data);

  } else {

    let data = {
      title: type,
      user: req.user,
      recipes,
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
