exports.formCrearCuenta = async(req, res, next) => {
    res.render('crear-cuenta', {
        nombrePagina: 'Crear  tu Cuenta  en Devjobs',
        tagline: 'Comienza a Publicar tus vacantes Gratis, Solo debes Crear una Cuenta'
    })
}