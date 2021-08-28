const { Schema, model } = require('mongoose');

const Recordatorio24hsSchema = new Schema({
    horaDia: String,
    tipoAlimento: String,
    cantidad: Number,
});

const Encuesta1y2TrimestreSchema = new Schema({
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

    diabetes: { type: String, default: '' },
    enfermedadRenal: { type: String, default: '' },
    hipertension: { type: String, default: '' },
    colesterolTrigliceridosAltos: { type: String, default: '' },
    asmaEPOC: { type: String, default: '' },
    covid19: { type: String, default: '' },
    anemia: { type: String, default: '' },
    enfermedadCronica: { type: String, default: '' },
    cualEnfermedadCronica: { type: String, default: '' },

    consumeMedicamento: { type: String, default: '' },
    cualConsumeMedicamento: { type: String, default: '' },
    consumeComplejoVitaminicoSuplemento: { type: String, default: '' },
    cualConsumeComplejoVitaminicoSuplemento: { type: String, default: '' },
    fumaActual: { type: String, default: '' },
    fumaAntes: { type: String, default: '' },
    alcoholActual: { type: String, default: '' },
    embarazoAntes: { type: String, default: '' },
    cuantosEmbarazoAntes: Number,
    hijos: { type: String, default: '' },
    cuantosHijos: Number,

    observacionesBloque1: { type: String, default: '' },

    pais: { type: String, default: '' },
    provincia: { type: String, default: '' },
    personasVivienda: Number,
    habitacionesVivienda: Number,
    desagueCloaca: { type: String, default: '' },
    aguaPotable: { type: String, default: '' },
    redElectrica: { type: String, default: '' },
    gasNatural: { type: String, default: '' },
    nivelEducativo: { type: String, default: '' },
    empleo: { type: String, default: '' },
    asistenciaEstado: { type: String, default: '' },
    cualAsistenciaEstado: { type: String, default: '' },
    recibioBolson: { type: String, default: '' },
    recibioTickets: { type: String, default: '' },
    recibioTarjeta: { type: String, default: '' },
    recibioLeche: { type: String, default: '' },
    recibioOtra: { type: String, default: '' },
    cualUltimoMesRecibio: { type: String, default: '' },
    ingresoIndividual: { type: String, default: '' },
    ingresoTotal: { type: String, default: '' },
    recibioIFE: { type: String, default: '' },

    observacionesBloque2: { type: String, default: '' },

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

    preocupadoSuficienteAlimentos: { type: String, default: '' },
    podidoAlimentos: { type: String, default: '' },
    comidoPocaVariedad: { type: String, default: '' },
    dejarDesayunoAlmuerzoCena: { type: String, default: '' },
    comidoMenos: { type: String, default: '' },
    sinAlimentos: { type: String, default: '' },
    sentidoHambre: { type: String, default: '' },
    dejadoComer: { type: String, default: '' },

    observacionesBloque4Parte1: { type: String, default: '' },

    recordatorio24Horas: [Recordatorio24hsSchema],
    
    observacionesBloque4Parte2: { type: String, default: '' },

    desayuno: Number,
    almuerzo: Number,
    merienda: Number,
    cena: Number,
    frecuenciaConsumo: { type: String, default: '' },
    golosinas: { type: String, default: '' },
    panBlanco: { type: String, default: '' },
    pan: { type: String, default: '' },
    copetin: { type: String, default: '' },
    frutas: { type: String, default: '' },
    lacteos: { type: String, default: '' },
    bebidas: { type: String, default: '' },
    otros: { type: String, default: '' },
    nsnc: { type: String, default: '' },

    observacionesBloque4Parte3: { type: String, default: '' },

    consumioLeche: { type: String, default: '' },
    consumioFrutasFrescas: { type: String, default: '' },
    consumioVerduras: { type: String, default: '' },
    consumioPapa: { type: String, default: '' },
    consumioCereales: { type: String, default: '' },
    consumioEmbutidos: { type: String, default: '' },

    observacionesBloque4Parte4: { type: String, default: '' },

    consumioCarne: { type: String, default: '' },
    consumioPescado: { type: String, default: '' },
    consumioAceites: { type: String, default: '' },
    consumioFrutasSecas: { type: String, default: '' },
    consumioProductosCopetin: { type: String, default: '' },
    consumioGolosinas: { type: String, default: '' },

    observacionesBloque4Parte5: { type: String, default: '' },

    tipoEncuesta: String
});

module.exports = model('Encuestas1y2Trimestre', Encuesta1y2TrimestreSchema);