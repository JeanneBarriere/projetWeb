const express = require('express');
const router = express.Router();
const db = require('./db.js');
const passport = require('passport');
module.exports = router;

router.post('/createUser', async function (req, res){
  console.log("utilisateur créé"+req.body.firstName);
  await db.createUser(req.body);
  res.send('success');
});

router.get('/connectUser',async function (req, res, next){
    passport.authenticate('local', function(err, user, info) {
      console.log('user :',user);
      if(err || !user){
        console.log(err);
        res.sendStatus(400);
      }
      req.logIn(user, function(err){
        if(err){
          console.log(err);
          res.sendStatus(400)
        }else{
          res.send({user:req.user});
        }
      });
    })(req, res, next);
    });
