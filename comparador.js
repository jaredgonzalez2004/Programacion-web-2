document.getElementById('comparador-form').addEventListener('submit', function(event) {
event.preventDefault();
let n1 = parseInt(document.getElementById('num1').value);
let n2 = parseInt(document.getElementById('num2').value);
let n3 = parseInt(document.getElementById('num3').value);
let salida = "";

// En caso de que los tres ssean iguales
if (n1 === n2 && n2 === n3) {
    salida = "Todos los números son iguales.";
} else {
    
// Caso: dos iguales y uno diferente
    if (n1 === n2 || n1 === n3 || n2 === n3) {
        let iguales, diferente;
        if (n1 === n2) {
            iguales = n1;
            diferente = n3;
        } else if (n1 === n3) {
            iguales = n1;
            diferente = n2;
        } else {
            iguales = n2;
            diferente = n1;
        }

        salida += `Números iguales: ${iguales}. Número diferente: ${diferente}.`;
// Determinar mayor y menor
        let mayor, menor;
        if (iguales > diferente) {
            mayor = iguales;
            menor = diferente;
        } else {
            mayor = diferente;
            menor = iguales;
        }
        salida += `El número mayor es: ${mayor} y el menor es: ${menor}.`;
    } 
// En caso de que los 3 numeros sean diferentes 
    else {
        let mayor, menor;
// para encontrar el mayor
        if (n1 >= n2 && n1 >= n3) {
            mayor = n1;
        } else if (n2 >= n1 && n2 >= n3) {
            mayor = n2;
        } else {
            mayor = n3;
        }
// Para encontrar el menor
        if (n1 <= n2 && n1 <= n3) {
            menor = n1;
        } else if (n2 <= n1 && n2 <= n3) {
            menor = n2;
        } else {
            menor = n3;
        }

        salida = `Los tres números son diferentes. El número mayor es: ${mayor} y el menor es: ${menor}.`;
    }
}

document.getElementById('resultado').innerHTML = salida;
}

);
