const express = require('express');
const hbs = require('express-handlebars');
const app = express();

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
  res.render('home.hbs', data);
});

app.get('/index', function (req, res) {
  let data = {
    title: 'Index',
  }
  res.render('home.hbs', data);
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
