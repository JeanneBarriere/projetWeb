const express = require('express');
const hbs = require('express-handlebars');
const app = express();

app.use(express.static('public'));

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'index',
  layoutsDir: __dirname + '/views/',
}));
app.set('view engine', 'hbs');

app.get('/*', function (req, res) {
  res.sendStatus(404);
})

app.listen(3000, function () {
  console.log('Application qui écoute sur le port 3000!');
})
VOTRE TEMPLATE DEFAULTLAYOUT INDEX.HBS
Créez le fichier index.hbs dans le dossier views, contenant le code suivant :

<!DOCTYPE html>
<html>
 <head>
   <meta charset="utf-8">
   <title>{{ title }}</title>
 </head>
 <body>
   {{{ body }}}
 </body>
</html>
LANCER VOTRE PROJET
Si vous avez installé nodemon, au lieu d'utiliser node index.js, lancez votre projet dans le terminal avec la commande :

nodemon index.js
De cette façon, le serveur se relancera automatiquement lorsque vous sauvegarderez vos fichiers, et vous pourrez ainsi voir directement les changements
