//DEL ANGEL GONZALEZ ADRIAN JARED

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3025;

//Ruta
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index1.html'));
});

app.listen(PORT, () => {
  console.log(`Estás en http://localhost:${PORT}`);
});