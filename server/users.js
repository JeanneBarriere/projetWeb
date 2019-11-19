var express = require('express')
var router = express.Router();
const db = require('./db.js')
module.exports = router;


router.post('/createUser', async function (req, res){
  console.log("utilisateur créé"+req.body.firstName);
  await db.createUser(req.body);
  res.send('success');
});
/*async function f(){
let users = await db.getUsers();
//await db.removeUser('5dd27c2abe2dded5c807d4ca');
console.log('Les utilisateurs :'+users);
};

f();*/

router.get('/connectUser',async function (req, res){

  const allUsers = await db.getUsers();
  for (var i =0; i<allUsers.length; i++){
    if(allUsers[i].mail == req.query.mail  && allUsers[i].password == req.query.password){
      console.log('vous êtes connecter '+allUsers[i].firstName);
      res.sendStatus(200);
      return ;
    }
  }
  console.log('Mauvais identifiants');
  res.sendStatus(400);
});
