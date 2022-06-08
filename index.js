    const mongoose = require('mongoose');
    require('./config/db')
    const express = require("express");
    const routes = require("./routers/index");
    const exphbs = require('express-handlebars');
    const path = require('path');
    const session = require('express-session');
    const cookieParser = require('cookie-parser');
    const mongoStore = require('connect-mongo');
    const bodyParser = require('body-parser');
    require('dotenv').config({ path: 'variables.env' })


    const app = express();

    //habilitar bodyParser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))


    const PORT = process.env.PORT || 5000
        //hbilitar handlebars como view
    app.engine(
        'handlebars',
        exphbs.engine({
            layoutsDir: './views/layouts/',
            defaultLayout: 'layout',
            helpers: require('./helpers/handlebars'),
            extname: 'handlebars',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            },
        })
    );

    app.set('view engine', 'handlebars');

    //habiltando archivos estaticos
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(cookieParser());

    app.use(session({
        secret: process.env.SECRETO,
        key: process.env.KEY,
        resave: false,
        saveUninitialized: false,
        store: mongoStore.create({ mongoUrl: process.env.DATABASE })
    }))

    app.use('/', routes());

    app.listen(PORT, () => {
        console.log("Servidor Funcionando");
    });