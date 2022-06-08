const express = require("express");

const router = express.Router();
const homeController = require("../controllers/homeController");
const vacanteController = require("../controllers/vacanteController");
const usuarioController = require("../controllers/usuarioController");

module.exports = () => {
    router.get('/', homeController.mostrarTrabajos)

    //crear nueva vacante 
    router.get('/vacantes/nueva', vacanteController.formularioVacantes);
    router.post('/vacantes/nueva', vacanteController.nuevaVacantes);

    router.get('/vacantes/:url', vacanteController.mostrarVacante)

    //editar Vacante
    router.get('/vacantes/editar/:url', vacanteController.formEditarVacante)
    router.post('/vacantes/editar/:url', vacanteController.editarVacante)


    //crear Cuenta 
    router.get('/crear-cuenta', usuarioController.formCrearCuenta);

    return router;
}