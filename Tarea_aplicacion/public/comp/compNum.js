//Se solicitan 3 numeros al usuario 
let n1 = parseInt(prompt("Ingrese un primer numero :"));
let n2 = parseInt(prompt("Ingrese un segundo numero :"));
let n3 = parseInt(prompt("Ingrese un tercer numero :"));

//En caso de que todos los numeros son iguales
if(n1 === n2 && n2 === n3){
    alert("Todos los numeros son igualez");
} 

//En caso de que 2 numeros sean iguales y uno otro sea diferente
 else{
    if(n1 === n2 || n1 === n3 || n2 === n3){
        let iguales;
        let diferente;
        if(n1 === n2){
            iguales = n1;
            diferente = n3;
        }else{
            if(n1 === n3){
                iguales = n1;
                diferente = n2;
            }else{
                iguales = n2;
                diferente = n1;
            }
        }
        alert("Numeros iguales: " + iguales + "Numero diferente: " + diferente);

//Muestra cual de los numeros es el mayor y rl menor 
        let mayor, menor;
        if(iguales > diferente){
            mayor = iguales;
            menor = diferente;
        }else{
            mayor = diferente;
            menor = iguales;
        }
        alert("El numero mayor es: " + mayor + " y el numero menor es: " + menor);
    }
     else{
        let mayor, menor;

//Identifica cual es el mayor
        if(n1 >= n2 && n1 >= n3){
            mayor = n1;
        }else{
            if(n2 >= n1 && n2 >= n3){
                mayor = n2;
            }else{
                mayor = n3;
            }
        }
//Identifica cual es el menor 
        if(n1 <= n2 && n1 <= n3){
            menor = n1;
        }else{
            if(n2 <= n1 && n2 <= n3){
                menor = n2;
            }else{
                menor = n3;
            }
        }
        alert("Los tres numeros son diferentes.\n El numero mayor es: " + mayor + " y el numero menor es: " + menor);
    }
}