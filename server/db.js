/*const __PASSWORD__ = require('./config/pwd.js');

const pwd = encodeURIComponent(__PASSWORD__);

const mongoose = require('mongoose');

const uri = "mongodb+srv://chifaawehbe:"+ pwd + "@chifaa-vz6hq.mongodb.net/test?retryWrites=true&w=majority";

const recipeSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [ String ],
	data: { type: Date, default: Date.now },
	isPublished: Boolean
});
const Recipe = mongoose.model('Recipe', recipeSchema);

async function createRecipe() {
	const recipe = new Recipe({
		name: 'Cours de MongoDB',
		author: 'Timothée BEHRA',
		tags: ['node', 'backend'],
		isPublished: true
	})

	const result = await recipe.save();
	console.log(result);
}

module.exports = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(function() {
		console.log('now connected to mongodb!');

		createRecipe();
	})
	.catch(function (err) {
		console.log ("Erreur lors de la connection à mongodb : ", err);
})*/

/*
	Créer un dossier config, contenant un fichier pwd.js,
	et mettre dans ce fichier js uniquement la ligne suivante :
			module.exports = "__votre_mot_de_passe__";
	(en remplaçant __votre_mot_de_passe__ par le mot de passe fourni)
*/

const __PASSWORD__ = require('./config/pwd.js');
const project_number = 0; //Changer ici par votre numéro de projet

// Ne pas changer ces lignes

const pwd = encodeURIComponent(__PASSWORD__);
const project_name = 'project' + project_number;
const user_name = 'user_project_' + project_number;
const mongoose = require('mongoose');
const uri = "mongodb+srv://chifaawehbe:"+ pwd + "@chifaa-vz6hq.mongodb.net/test?retryWrites=true&w=majority";
	//	+ "@dant-kkn0r.mongodb.net/"
		//+ project_name + "?retryWrites=true&w=majority";
//

const userSchema = new mongoose.Schema({
	firstName: String,
});
const User = mongoose.model('User', userSchema);

async function createUser(userData) {
	const user = new User({
		name: 'user test',
		userData.firstName : 
		author: user_name,
		tags: ['User test'],
		isPublished: true
	})

	const result = await user.save();
	console.log(result);
}*/

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(function() {
		console.log('now connected to mongodb!');
		//createDoc();
	})
	.catch(function (err) {
		console.log ("Erreur lors de la connection à mongodb : ", err);
	})