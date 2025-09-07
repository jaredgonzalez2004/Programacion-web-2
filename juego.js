//Genera un nuemro random entre el 1 y el 10
let numeroR=Math.floor(Math.random()*(10-1)+1);

//El usuario ingrea el numero que cree es el correcto 
let numeroU=parseInt(prompt("Ingresa un numero entre el 1 y 10 para verificar que es el correcto"));
let vidas = 3;

//Revisa que el numero que ingreso el usuario es el correcto, en caso de que no lo sea se le hara saber junto con el numero de intentos que tiene
while(numeroR!== numeroU && vidas >1){
    vidas --;
    numeroU = parseInt(prompt("Numero incorrecto, intentalo de nuevo.  Vidas totales= " + vidas));  
}

//Se notifica si gano o perdio 
if(numeroR === numeroU){
    console.log("Ganaste");
    alert("!LE ATINASTEEEE¡");
}else{
    console.log("Perdiste");
    alert("Perdiste, el numero correcto era: " + numeroR);
}