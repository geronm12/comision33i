console.log("Ejempplo");

// Imprima en consola la cantidad de veces que se
// repite cada vocal en todos los nombres de los participantes.

//javascript no reconoce la diferencia de tipos
const nombre = "hola"; //cadenas de caracteres -> concatenación de caraceteres
const carac = "a";

//los STRINGS son Arrays de caracteres
const saludo = "hola";
const saluudoArray = ["h", "o", "l", "a"];

const concursantes = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];

console.log(concursantes);

let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

// const acumulador = 20;
// // acumulador += 10;
// // acumulador = acumulador + 10;

//para recorrer con un for anidado, es necesario que el elemento dentro del array sea iterable

//Variable que
//declaramos nosotros         Condición       Contador
for (let index = 0; index < concursantes.length; index++) {
  //es el concursante obtenido del array de concursantes
  const concursante = concursantes[index];

  //Ana ->
  for (let jdex = 0; jdex < concursante.length; jdex++) {
    const letra = concursante[jdex];
    //lowerCase = minúsculas
    switch (letra.toLowerCase()) {
      case "a":
        a++; //acumulador/contador
        break;
      case "e":
        e++;
        break;
      case "i":
        i++;
        break;
      case "o":
        o++;
        break;
      case "u":
        u++;
        break;
      default:
        break;
    }
  }
}

console.log(a);
console.log(e);
console.log(i);
console.log(o);
console.log(u);

//fuertemente tipada-> se preocupa por lo que son los tipos
//tipos de datos

// d) Imprima en consola los nombres que comiencen con la letra “A”
const lowerIndex = 0;

for (let index = 0; index < concursantes.length; index++) {
  const concursante = concursantes[index];

  if (concursante[lowerIndex].toLowerCase() === "a") {
    console.log(concursante);
  }
}

// const resultados = concursantes.filter((concursante) => concursante[0] === "A");
// console.log(resultados);
