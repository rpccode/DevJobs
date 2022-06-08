const { default: mongoose } = require("mongoose");
mongoose.Promise = global.Promise;


const usuarioSchema = new Mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },

    nombre: {
        type: String,
        required: 'Agrega un Nombre'
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    token: { type: String, },
    expira: { type: Date, },
});
module.exports = mongoose.model('usuario', usuarioSchema);