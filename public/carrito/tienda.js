//Producto disponibles para agragar
var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];
//Las varibles para ir guardando los productos y otra para el total a pagar 
var carrito = [];
var total = 0;

//Funcion para ir agregando un producto dependiendo que opcion escoje, y suma los precios para indicar el total
function agregarProducto(index){
    carrito.push(productos[index]);
    total = total + productos[index].precio;
}
//Funcion para mostrar que cosas tenemos en nuestro carrito
function mostrarCarrito(){
    if( carrito.length === 0){
        alert("El carrito esta vacio")
    }else{
        let mensaje = "Productos en el carrito: \n";
//Recorre cada prodcuto  para agregar el siguiente con su precio, tambien muestra el carrito y el total
        carrito.forEach((producto,index)=>{
            mensaje += `${index+1}.- ${producto.nombre} $${producto.precio}\n`;
        });
        alert(`${mensaje}
        Total a pagar: $${total}`);
    }
}
//El meno principal donde muestra que opciones hay
function menu(){
    let opcion;
    
    do{
        opcion = prompt(`
            "Elige una opcion"
            Opciones Disponibles:
                1.- Camisa-----$300
                2.- Pantalon---$500
                3.- Zapatos----$800
                4.- Sombrero---$200
                5.- Ver el carrito
                6.- Pagar
        `);
//Dependiendo que opcion se elija se ejecutara esa funcion        
        switch(opcion){
            case "1": agregarProducto(0); break;
            case "2": agregarProducto(1); break;
            case "3": agregarProducto(2); break;
            case "4": agregarProducto(3); break;
            case "5": mostrarCarrito(); break;
            case "6": alert("Gracias por su compra"); break;
            default: alert("Opcion no valida. Intenta de nuevo");
        }

    }while(opcion !== '6')
}

menu();