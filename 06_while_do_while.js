// let potC = 2;
// for (let index = 0; index < 10; index++) {
//      pot = pot * 2;
// }
// console.log(pot);

//#region WHILE Y DO WHILE
//palabras reservadas: son palabras que el lenguaje reconoce como comandos
//y procesa para poder evaluar la lógica creada dentro de un archivo .js

//condición

let contador = 0;
//0              n-1 (siendo n la cantidad de elementos del array)
const vector = [
  1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
];

//siempre que la condición que se encuentra dentro del paréntesis es TRUE
//se repite el bloque de código
/*mientras*/ while (contador < vector.length) {
  //ciclo infinito NO TIENE EL CONTADOR
  console.log("Ejecutando desde el while");
  console.log(vector[contador]);
  //la lógica (algoritmos)
  contador++; //el operador ++ acumula de 1 en 1 contador = contador + 1
  //condicionante que me permita romper la condición y salir del bucle
}
//#endregion
console.log("nuevo código");

for (let index = 0; index < vector.length; index++) {
  console.log("Ejecutando desde el for");
}

const a = 10; //primitivo
const b = 9;

//do -> indica que debemos realizar la ejecución del código que se encuentra dentro
//de las llaves por lo menos 1 vez.
//Si la condición es verdadera el código se vuelve a ejecutar, en caso contrario,
//no se ejecuta nuevamente.
//{ contexto/bloque de código} Scope
//Condicionante
do {
  console.log("do while");
  //Si yo no tengo una forma de romper el ciclo, tengo bucle infinito
} while (contador > vector.length);
//break -> significa "romper" permite que salgamos del ciclo de forma forzada

const empleados = ["a", "b", "c", "d"];

do {
  //una vez la pc debe verificar la fecha de nacimiento de los empleados
} while (empleados.length < 1);

// En un concurso de pesca participaron 5 pescadores,
// declare un array de enteros, cada elemento del array representará
// el peso del pez que atrapó cada pescador.
//  Indique cuál es el pez de MAYOR peso y cuál es el pez de MENOR peso.

//do while, while, for, if, else, else if, switch, operadores, creacion de variables
const peces = [100, 9, 120, 5, 77 , 1, 500, -9]; //vienen de algun lado
let contadorPeces = 0;
let mayor = -9999;
let menor = 9999;  
// peces[contadorPeces]
//Caso 1: 
/*if(menor < mayor)
{

}
Si funciona pero termina asignando siempre el ultimo valor siempre que sea más pequeño 
que mayor
*/

while (contadorPeces < peces.length) {
  if (peces[contadorPeces] > mayor) {
    mayor = peces[contadorPeces];
  } else if (menor > peces[contadorPeces]) {
    menor = peces[contadorPeces];
  }
  contadorPeces++;
}

console.log(mayor);
console.log(menor);
