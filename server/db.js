const __PASSWORD__ = require('../config/pwd.js');
const project_number = 0; //Changer ici par votre numéro de projet

const pwd = encodeURIComponent(__PASSWORD__);
const project_name = 'project' + project_number;
const user_name = 'user_project_' + project_number;
const mongoose = require('mongoose');
const uri = "mongodb+srv://chifaawehbe:"+ pwd + "@chifaa-vz6hq.mongodb.net/test?retryWrites=true&w=majority";

const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	pseudo : String,
	password : String,
	mail : String,
	day : Number,
	month : Number,
});
const User = mongoose.model('User', userSchema);

async function createUser(userData) {
	const user = new User({
		firstName : userData.firstName,
		lastName : userData.lastName,
		pseudo : userData.pseudo,
		password : userData.password,
		mail : userData.mail,
		day : userData.day,
		month : userData.month,
	})
	const result = await user.save();
	console.log(result);
};

async function getUsers(){
	const allUsers = await User.find();
  return allUsers;
}

/*async function connect(){
	const allUsers = await getUsers();
	for (var i=0; i<allUsers.length; i++){
		if(allUsers[i].mail == )
	}
}*/

async function removeUser(id) {
  const result = await User.deleteOne({_id: id});
  // indicates the number of deleted documents
  console.log("L'utilisateur a été supprimé :"+result);
}


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(function() {
		console.log('now connected to mongodb!');
	})
	.catch(function (err) {
		console.log ("Erreur lors de la connection à mongodb : ", err);
	})

	module.exports = {createUser,getUsers,removeUser};
