//DEL ANGEL GONZALEZ ADRIAN JARED

const express = require('express');
const ruta = express.Router();

ruta.use((req, res, next) => {
    const verificarSesion = req.app.get('verificarSesion'); 
    verificarSesion(req, res, next);
});

//Gestión de Usuarios

//Mostrar la lista de los usuarios 
ruta.get('/', (req, res) => {
    const db = req.app.get('db');
    const consulta = 'SELECT * FROM users';
    
    db.query(consulta, (err, results) => {
        if (err) {
            console.error('Error en la consulta', err);
            res.send('Error, no se pueden recuperar datos');
        } else {
            res.render('index', { users: results, name: req.session.name || 'Usuario' });
        }
    });
});

//Formulario para agregar un nuevo usuario
ruta.get('/add', (req, res) => {
    res.render('add_user');
});

//Agregar un nuevo usuario
ruta.post('/add', (req, res) => {
    const db = req.app.get('db');
    const { name, email } = req.body;
    const consulta = 'INSERT INTO users (name, email) VALUES (?, ?)';
    
    db.query(consulta, [name, email], (err, result) => {
        if (err) {
            console.error('Error al agregar usuario:', err);
            res.send('Error al intentar agregar usuario');
        } else {
            res.redirect('/');
        }
    });
});

//Formulario para editar un usuario existente
ruta.get('/edit/:id', (req, res) => {
    const db = req.app.get('db');
    const userId = req.params.id;
    const consulta = 'SELECT * FROM users WHERE id = ?';
    db.query(consulta, [userId], (err, results) => {
        if (err) {
            console.error('Error al buscar usuario para editar:', err);
            res.send('Error al recuperar datos para edición');
        } else if (results.length > 0) {
            res.render('edit.ejs', { user: results[0] });
        } else {
            res.send('Usuario no encontrado');
        }
    });
});

//Editar un usuario existente
ruta.post('/edit/:id', (req, res) => {
    const db = req.app.get('db');
    const userId = req.params.id;
    const { name, email } = req.body;
    const consulta = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    
    db.query(consulta, [name, email, userId], (err, result) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.send('Error al intentar actualizar usuario');
        } else {
            res.redirect('/');
        }
    });
});

//Eliminar un usuario
ruta.get('/delete/:id', (req, res) => {
    const db = req.app.get('db');
    const userId = req.params.id;
    const consulta = 'DELETE FROM users WHERE id = ?';
    
    db.query(consulta, [userId], (err, result) => {
        if (err) {
            console.error('Error al eliminar usuario:', err);
            res.send('Error al intentar eliminar usuario');
        } else {
            res.redirect('/');
        }
    });
});

module.exports = ruta;