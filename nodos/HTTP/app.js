//DEL ANGEL GONZALEZ ADRIAN JARED

// Usamos el módulo http de Node
const http = require('http');
const PORT = 3025;

//Servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('HELLO THERE!!');
});

server.listen(PORT, () => {
  console.log(`Estás en http://localhost:${PORT}`);
});