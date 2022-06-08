const Vacantes = require('../models/vacantes');
exports.mostrarTrabajos = async(req, res, next) => {
    const vacantes = await Vacantes.find();
    if (!vacantes) { return next() }

    res.render('home', {
        nombrePagina: "devjobs",
        tagline: "Encuentra y Publica Trabajos Para Desarrolladores Web",
        barra: true,
        boton: true,
        vacantes
    })
}

//muestra una vacante