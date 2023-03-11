// const button = document.getElementById("btn");
// const buttonR = document.getElementById("btn-resta");
// const span = document.getElementById("span");

// let contandor = 0;

// button.innerText = "Sumar";
// buttonR.innerText = "Restar";
// span.innerText = "0";

// button.classList.add("btn");
// button.classList.add("btn-primary");

// buttonR.classList.add("btn");
// buttonR.classList.add("btn-danger");

// button.addEventListener("click", Add);
// buttonR.addEventListener("click", function () {
//   contandor--;
//   Refresh();
// });

// function Add() {
//   if (contandor === 100) {
//     alert("El contador llegó al máximo");
//     contandor = 0;
//   } else {
//     contandor++;
//   }

//   Refresh();
// }

// function Refresh() {
//   span.innerText = contandor;
// }

//el lenguaje más básico de las computadoras: 0 o 1
//0 o 1 concatenados
//definen una estructura de trabajo  (herramientas propias de javascript)
//herramientas propias del paradigma de programación que usamos
//y una sintaxis que nos permite
//darle instrucciones al navegador sin necesidad de conocer ese código máquina
//el navegador es un programa (es decir que también fue programado)
//javascript es un lenguaje de programación interpretado
//el navegador entiende que es lo que le intentamos decir
//y realiza una acción en base a esa instruccion

//tipo de dato: "n carácteres siendo cada carácter una letra"
//a - z, 0  9, simbolos (cualquiera), " " -> length 1
//numéricos -> realizar operaciones aritméticas
//boolean -> 1 o 0 -> true o false
//javascript no exige terminar las sentencias con ;
//const -> declaro la variable pero no puedo mutar su valor
//let o var que mutan en base al scope

//tipo de variable (const, let, var)
//- nombre de la variable (que sirve para poder acceder al valor)
//- El valor
const mensaje = "Debe ingresar el nombre de usuario";
console.log(mensaje);

//Una variable tiene un ciclo de vida que consiste en 3 etapas
//declaración
let variable; //no tiene valor para reservar el espacio en la memoria
//asignación es sólo la primera vez (inicialización)
variable = 28;
//reasignación
variable = 25;
//a las variables yo puedo leerlas o escribirlas o sobreescribirlas
//utilizando su nombre
console.log(variable);

//Estos datos los ingresa el usuario
let antiguedad_laboral = 10;
let monto_por_año = 5000;
let monto_total_por_antiguedad;
//

if (antiguedad_laboral >= 10) {
  monto_por_año = 8000;
  monto_total_por_antiguedad = antiguedad_laboral * monto_por_año;
} else {
  monto_total_por_antiguedad = antiguedad_laboral * monto_por_año;
}

console.log(monto_total_por_antiguedad);
//peso en bytes
//minima expresión de programación es una variable -> bits
//boolean -> true o false -> 1 o 0

//operadores ariméticos
//           +
//           -
//           *
//           /
//           % -> Resto de una división

//operadores de comparación: devuelve un booleano
//         ===  (el elemento de la izquierda es igual al de la derecha)
//         >   (mayor que)
//         <   (menor que)
//         >=  (mayor o igual)
//         <=  (menor o igual)
//         !== (distinto)

//operadores lógicos
// && (AND, Y)  -> concatena booleanos y devuelve un booleano
//El operador AND es verdadero si y sólo si ambas condiciones evaluadas son verdaderas
// || (OR, O)   -> concatena booleanos y devuelve un booleano
// ! (Negación) -> Niega algo y devuelve un booleano

const mayor = 10;
const menor = 3;
//false           //false
const resultado = mayor > menor && mayor === 3;
const resultado_b = mayor > menor || mayor === 3;
console.log(resultado);
console.log(resultado_b);
// if (mayor > menor) {
//   //mi código hace algo dependiendo de la condición
// } else {
//   //mi código hace otra cosa dependiendo de la condición
// }

// Crear una función que se llame potencia,
// recibirá como parámetros el valor la base y el exponente,
// recorrer en un ciclo for y retornar el valor de la potencia.

function Potencia(base, exponente) {
  let resultado = base;

  for (let index = 1; index < exponente; index++) {
    resultado = resultado * base;
  }

  return resultado;
}

const result = Potencia(2, 8);
const resultB = Math.pow(2, 8);
console.log(result);
console.log(resultB);
