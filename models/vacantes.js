const { default: mongoose } = require("mongoose");
const shortid = require("shortid");
mongoose.Promise = global.Promise;
const slug = require("slug");


const vacantesSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: 'El Nombre de la vacante es Obligatorio',
        trim: true
    },
    empresa: {
        type: String,
        trim: true
    },
    ubicaccion: {
        type: String,
        trim: true,
        required: 'La ubicaccion es Obligatoria'
    },
    salario: {
        type: String,
        default: 0,
        trim: true,
    },
    contrato: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true,
    },
    url: {
        type: String,
        trim: true,
        lowercase: true,
    },
    skill: {
        type: [String],
    },
    candidatos: [{
        nombre: String,
        email: String,
        cv: String,
    }]
});

vacantesSchema.pre('save', function(next) {

    const url = slug(this.titulo);
    this.url = `${url}-${shortid.generate()}`;


    next();
})

module.exports = mongoose.model('Vacante', vacantesSchema);