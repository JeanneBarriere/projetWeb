const express = require('express');
const router = express.Router();
const db = require('./db.js');
const passport = require('passport');
module.exports = router;

router.post('/createRecipe', async function (req, res){
  console.log("La recette crée"+req.body.title);
  await db.createRecipe(req.body);
  res.send('success');
});

async function f(){
let recipes = await db.getAllRecipes();
console.log('Les recettes :'+recipes);
};
f();
