const { Schema, model } = require('mongoose');

const EncuestaNeonatoSchema = new Schema({
    nombreApellidoEncuestador1: { type: String, default: '' },
    telefonoEncuestador1: Number,
    emailEncuestador1: { type: String, default: '' },
    nombreApellidoEncuestador2: { type: String, default: '' },
    telefonoEncuestador2: Number,
    emailEncuestador2: { type: String, default: '' },
    fechaRelevamiento: { type: String, default: '' },
    lugarRelevamiento: { type: String, default: '' },

    nombreApellido: { type: String, default: '' },
    dni: Number,
    fechaNacimiento: { type: String, default: '' },
    domicilioBarrio: { type: String, default: '' },
    telefono: Number,
    fechaNacimientoBebe: { type: String, default: '' },
    viaNacimiento: { type: String, default: '' },
    lugarNacimiento: { type: String, default: '' },
    nombreBebe: { type: String, default: '' },

    observacionesBloque0: { type: String, default: '' },

    pesoKG: Number,
    ropaAlPesar: { type: String, default: '' },
    talla: Number,
    perimetroCefalico: Number,
    circunsferenciaBrazo: Number,
    NombreApellidoMadre: { type: String, default: '' },
    dniMadre: Number,

    observacionesBloque5: { type: String, default: '' },

    tipoEncuesta: String
});

module.exports = model('EncuestasNeonato', EncuestaNeonatoSchema);
