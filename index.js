//para evitar el hoisting, es buena practica realizarlo de la siguiente manera
//primero llamar las variables
var nombre = "Juan"
//despues las funciones
function apellidos(){
    console.log("Fuentes");
}
//y por ultimo imprimirlas
console.log(nombre);
apellidos();