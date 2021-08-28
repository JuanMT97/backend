const { Schema, model } = require('mongoose');

const Recordatorio24hsSchema = new Schema({
    horaDia: String,
    tipoAlimento: String,
    cantidad: Number,
});

const Encuesta3TrimestreSchema = new Schema({
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
    fechaUltimaMenstruacion: { type: String, default: '' },
    semanasGestacion: Number,

    observacionesBloque0: { type: String, default: '' },

    pesoKG: Number,
    ropaAlPesar: { type: String, default: '' },
    talla: Number,
    tallaSentada: Number,
    perimetroBraquial: Number,
    pliegueTricipital: Number,
    pliegueBicipital: Number,
    pliegueSubescapular: Number,
    pliegueSuprailiaco: Number,

    observacionesBloque3: { type: String, default: '' },

    recordatorio24Horas: [Recordatorio24hsSchema],

    observacionesBloque4: { type: String, default: '' },

    tipoEncuesta: String
});

module.exports = model('Encuesta3Trimestre', Encuesta3TrimestreSchema);
