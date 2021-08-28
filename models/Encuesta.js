const { Schema, model } = require('mongoose');

const EncuestaSchema = new Schema({
    dni: Number,
    nombre: String,
    fechaNacimiento: Date,
    peso: Number,
    altura: Number,
    email: String
});

module.exports = model('Encuestas', EncuestaSchema);