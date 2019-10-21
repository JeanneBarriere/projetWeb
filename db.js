const __PASSWORD__ = require('./config/pwd.js');

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
})