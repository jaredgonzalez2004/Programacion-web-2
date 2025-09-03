// (0 >= 1) Compara primero si 0 es igual o mayor a 1, && es para la operacion logico AND, 
console.log("AND")
let and  = 0 >= 1 && 0  >= 1;   // para que que el reultado sea 1 o True ambas comparaciones deden de ser TRUE
let and1  = 2 >= 0 && 5  >= 6;
let and2  = 10 >= 100 && 7  >= 8;
let and3  = 5 >= 1 && 9  >= 4;

//Muestra el resultado de la operacion en la consola, el resultado debe de representar a la tabla de una compuerta AND
console.log(and) //False
console.log(and1) //False
console.log(and2) //False
console.log(and3) //True

// (0 >= 1) Compara primero si 0 es igual o mayor a 1, es similar a la anterior con la diferencia que esta || es una operacion OR
console.log("OR")
let or  = 0 >= 1 || 0 >= 1; // para que que el reultado sea 1 o True solamente 1 de ellas debe de ser True
let or1  = 22 >= 4 || 13 >= 0;
let or2  = 111 >= 47 || 9 >= 66;
let or3  = 234 >= 59 || 400 >= 2;

//Muestra el resultado de la operacion en la consola, el resultado debe de representar a la tabla de una compuerta OR
console.log(or) //False
console.log(or1) //True
console.log(or2) //True
console.log(or3) //True

//DEL ANGEL GONZALEZ ADRIAN JARED