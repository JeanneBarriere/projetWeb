const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const db = require('./server/db.js')

const connection = require('./server/db.js');
let users = await db.getUsers();
console.log(users);
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'default',
  layoutsDir: __dirname + '/views/',
}));
app.set('view engine', 'hbs');

app.post('/createUser',function (req, res){
  console.log(req.body.firstName);
  db.createUser(req.body);
  res.send('success');
});

app.get('', function (req, res) {
  let data = {
    title: 'Index',
  }
  res.render('index.hbs', data);
});

app.get('/confirmedRegistration', function (req, res) {
  let data = {
    title: 'Nouvelle inscription',
  }
  res.render('confirmedRegistration.hbs', data);
});

app.get('/index', function (req, res) {
  let data = {
    title: 'Index',
  }
  res.render('index.hbs', data);
});

app.get('/signIn', function (req, res) {

  let data = {
    title: 'Inscription',
  }
  res.render('signIn.hbs', data);

});

app.get('/listing', function (req, res) {
  
    let data = {
      title: 'Cakes',
    }

    res.render('listing.hbs', data);

});

app.get('/listing/:type', function (req, res) {

  let listingArray = ['cakes', 'tartes'];
  
  if (listingArray.indexOf(req.params.type) == -1) {

    let data = {
      title: 'Index',
    }

    res.render('index.hbs', data);

  } else {

    let data = {
      title: 'Cakes',
    }

    res.render('listing.hbs', data);

  }

});

app.get('/recipe', function (req, res) {

  let data = {
    title: 'Recettes',
  }
  res.render('recipe.hbs', data);

});

app.get('/recipe/:page', function (req, res) {

  console.log(req.params.page);

  let data = {
    title: 'Recettes',
  }
  res.render('recipe.hbs', data);

});

app.get('/recipe.html', function (req, res) {
  res.sendFile(__dirname+"/public/recipe.html");
  });

app.get('/*', function (req, res) {
  res.sendStatus(404);
})

app.listen(3000, function () {
  console.log('Application qui écoute sur le port 3000!');
})
