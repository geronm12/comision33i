// const peces = [10.5, 121, 52, 15, 8];
// let menor = 9999;
// let mayor = 0;

// for (let index = 0; index < peces.length; index++) {
//   const element = peces[index];
//   if (element > mayor) {
//     mayor = element;
//   } else {
//     menor = element;
//   }
// }

// console.log(menor);
// console.log(mayor);

// let resultado = 2;

// for (let index = 1; index < 8; index++) {
//      resultado = resultado * 2;
// }

// console.log(resultado);

let caja_musica = [
  "Metallica", //0
  "AC/DC",
  "The offsprings",
  "pearl jam",
  "Miley Cyrus", //5 - 1 = 4
];

// const texto = ["Hola", "uno", "2", "mundo"];

caja_musica[0] = "AC/DC";
caja_musica[1] = "Metallica";

console.log(caja_musica[0]);

// console.log(texto[0] + " " + texto[2]);
// console.log(`hola ${texto[2]}`);
//0 - 287
const array_numbers = [
  11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10,
];

console.log(array_numbers);

///Ciclos iterativos
//for, forEach, map, while, do while

// for (let index = 0; false; index++) {
//   console.log("hola mundo");
// }

//array_numbers.length //= number que es igual a la cantidad de elementos del array
//288

//++  nombre_de_mi_variable++;
//longitud = a cant de elementos
//0 1 2
//288
// for (let index = 0; index < array_numbers.length; index++) {

// }

console.log("siguiente");

const texto = ["Hola", "perro", "casa", "pc", "deuda", "Mundo", "plata"];
let resultado = ""; //darle un valor = string.empty

for (let index = 0; index < texto.length; index++) {
  const palabra = texto[index];
  if (palabra === "Hola" || palabra === "Mundo") {
    resultado += " " + palabra;
  }
}

console.log(resultado);

// En un concurso de pesca participaron 5 pescadores,
//  declare un array de enteros, cada elemento del array representará
//   el peso del pez que atrapó cada pescador.
//  Indique cuál es el pez de MAYOR peso y cuál es el pez de MENOR peso.

const numbers = [10, 105, 102, 8, 222];
let mayor = -9999;
let menor = 9999;

for (let index = 0; index < numbers.length; index++) {
  const pez = numbers[index];
  if (pez > mayor) {
    mayor = pez;
  } else if (pez < menor) {
    menor = pez;
  }
}

console.log(mayor);
console.log(menor);

// Realizar la potencia de 2 elevado a la 8 (base 2 exponente 8)
// utilizando un ciclo for: ESTÉ PROHIBIDO USAR Math.pow()
let pot = 2;
for (let index = 1; index < 8; index++) {
     pot = pot * 2;
}

let potB = 1;
for (let index = 1; index < 8; index++) {
     pot = pot * 2;
}

let potC = 2;
for (let index = 1; index < 7; index++) {
     pot = pot * 2;
}
console.log(pot);