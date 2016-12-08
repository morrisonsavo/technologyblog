var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var visitasSchema = new Schema({
	nombre: String ,
	apellidos: String,
	comentario: String 
});


module.exports = mongoose.model('infoTable', visitasSchema);
