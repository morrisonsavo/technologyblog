var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var visitasSchema = new Schema({
	nombre: String ,
	apellidos: String,
	profesion: String,
	pais: String,
	comentario: String,
	fecha: Date 
});


module.exports = mongoose.model('infoTable', visitasSchema);
