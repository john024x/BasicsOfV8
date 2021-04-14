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

//codigo de ejecución ---> Memory Heap
//single thread (synchronous)
var nombre = "Juan" //en este momento se destina un espacio en memoria para guardar este valor
const edad = 22;
const carro = {
    marca: "Toyota",
    modelo: "2021",
}

//call stack(probar en navegador)
function restaDos(num){
    return num-2;
}
function calcular(){
    const sumarTotal = 4+5;
    return restaDos(sumarTotal);
}
debbuger;
calcular();

//garbage Collection
//mark and sweep

//stackoverflow
//viene de el callstack, donde se van apilando las tareas (cuando este se desborda) se crashea el navegador
/*
function overflow(){
  overflow();
}
overflow();
*/

//Javascript runtime
console.log("taco 1");
console.log("taco 2");
console.log("tortita");
console.log("taco 3");

//asincronismo
//javascript corre una tarea a la vez
console.log("taco 1");
console.log("taco 2");
setTimeout(() =>{
    console.log("tortita");
},0);//con el 0 de tiempo de espera, aun asi primero termina todas las otras tareas y despues ejecuta estas tareas
console.log("taco 3");