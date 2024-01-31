const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');
const handlebars = require('express-handlebars');

// Esta es nuestra aplicación
const app = express();

// Handlebars
app.set('view engine', 'handlebars');   
app.set("views", __dirname+"/views");
app.engine('handlebars', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: "index"
}));

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use('/', router);

module.exports = app;