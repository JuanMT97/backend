const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    email: String,
    admin: Boolean,
});

module.exports = model('Usuario', UsuarioSchema);