//DEL ANGEL GONZALEZ ADRIAN JARED

//Express
const express = require('express');
const app = express();
const PORT = 3025;

//Ruta principal
app.get('/', (req, res) => {
    res.send('HELLO THERE!!');
});

app.listen(PORT, () => {
    console.log(`Estás en http://localhost:${PORT}`);
});