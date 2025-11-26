//DEL ANGEL GONZALEZ ADRIAN JARED

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');

// Rutas 
const rutasAutenticacion = require('./rutas/autenticacion');
const rutasUsuarios = require('./rutas/usuarios');

// Servidor y Middlewares
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine','ejs');
app.use(express.static('public'));

// Configuración de la sesión
app.use(session({
    secret: 'clave',
    resave: false,
    saveUninitialized: false
}));

//Conexión a Base de Datos
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Felipe2004',
    database:'usuarios',
    port:'3306'
});
db.connect(err=>{
    if(err){
        console.error('Error al conectar a la base de datos:', err);
    }else{
        console.log('Server no llama feliz (Conexión a DB exitosa)');
    }
});

app.set('db', db); 

//Autenticación
const verificarSesion = (req, res, next )=>{
    if(req.session.loggedin){
        next();
    } else{
        res.redirect('/login')
    }
};
app.set('verificarSesion', verificarSesion);

app.use('/', rutasAutenticacion);
app.use('/', rutasUsuarios);


//Inicio del Servidor
const port = 3009;
app.listen(port,()=>{
    console.log(`Server desde http://127.0.0.1:${port}`);
});