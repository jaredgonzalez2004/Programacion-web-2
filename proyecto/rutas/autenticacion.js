//DEL ANGEL GONZALEZ ADRIAN JARED

const express = require('express');
const ruta = express.Router();

// Rutas de Autenticación

// Login
ruta.get('/login', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/');
    } else {
        res.render('login');
    }
});

//Registro
ruta.get('/registro', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/');
    } else {
        res.render('registro');
    }
});

//Login
ruta.post('/confirm', (req, res) => {
    const db = req.app.get('db'); 
    const { name, password } = req.body;
    db.query('SELECT * FROM users WHERE name = ? AND password = ? ', [name, password], (err, result) => {
        if (err) throw err;
        
        if (result.length > 0) {
            req.session.loggedin = true;
            req.session.name = name;
            res.redirect('/');
        } else {
            res.send('Datos no validos. <a href="/login">Volver a Intentar</a>');
        }
    });
});

// Registro
ruta.post('/registro', (req, res) => {
    const db = req.app.get('db');
    const { name, email, password } = req.body;
    const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    
    db.query(insertQuery, [name, email, password], (err, result) => {
        if (err) {
            console.error('Error al registrar:', err);
            res.send('Error al registrar. <a href="/registro">Volver a Intentar</a>');
        } else {
            res.redirect('/login');
        }
    });
});

//Cerrar Sesión
ruta.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.error(err);
        }
        res.redirect('/login');
    });
});
module.exports = ruta;