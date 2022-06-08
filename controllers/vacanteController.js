const Vacante = require('../models/vacantes')
exports.formularioVacantes = (req, res, next) => {
    res.render('nueva-vacante', {
        nombrePagina: 'Nueva Vacante',
        tagline: 'Llena el formulario y Publica tu vacante',

    })
}

//agrega LAS VACANTES A LA BASE DE DATOS
exports.nuevaVacantes = async(req, res, next) => {
    const vacante = new Vacante(req.body);


    //crear arreglo de Skills
    vacante.skill = req.body.skills.split(',');
    //almacenarlo en la base de datos 
    const nuevaVacante = await vacante.save();

    //redireccionar hacia la vacante 
    res.redirect(`/vacantes/${nuevaVacante.url}`)

}

exports.mostrarVacante = async(req, res, next) => {
    const vacante = await Vacante.findOne({ url: req.params.url })

    if (!vacante) {
        return next();
    }
    res.render('vacante', {
        vacante,
        nombrePagina: vacante.titulo,
        barra: true
    })
}
exports.formEditarVacante = async(req, res, next) => {
    const vacante = await Vacante.findOne({ url: req.params.url })
    if (!vacante) {
        return next();
    }
    res.render('editar-vacante', {
        vacante,
        nombrePagina: `Editar - ${vacante.titulo}`,
        barra: false
    })
}
exports.editarVacante = async(req, res, next) => {
    const vacanteActualizda = req.body;

    vacanteActualizda.skill = req.body.skills.split(',');

    const vacante = await Vacante.findOneAndUpdate({ url: req.params.url }, vacanteActualizda, {
        new: true,
        runValidators: true,
    });

    res.redirect(`/vacantes/${vacante.url}`);
}