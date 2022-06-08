// getting-started.js
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' })

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });


mongoose.connection.on('error', (err) => {
    console.log(err);
});
//importar los modelos
require('../models/vacantes');