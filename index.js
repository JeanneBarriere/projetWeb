const express = require('express');
const hbs = require('express-handlebars');
const app = express();

const connection = require('./db.js');

app.use(express.static('public'));

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'default',
  layoutsDir: __dirname + '/views/',
}));
app.set('view engine', 'hbs');

app.get('', function (req, res) {
  let data = {
    title: 'Index',
  }
  res.render('index.hbs', data);
});

app.get('/index', function (req, res) {
  let data = {
    title: 'Index',
  }
  res.render('index.hbs', data);
});

app.get('/listing', function (req, res) {

  let data = {
    title: 'Cakes',
  }
  res.render('listing.hbs', data);

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

