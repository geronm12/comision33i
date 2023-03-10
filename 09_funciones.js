// const a = 10; //number operar //la mínima unidad de expresión que tenemos en programación
// const b = 3;
// const c = 4;
// const d = 15;
// const e = 17;
// const f = 1;

// console.log(a + b);
// console.log(a + c);
// console.log(a + d);
// console.log(a + e);
// console.log(a + f);

// console.log(b + a);
// console.log(b + c);
// console.log(b + d);
// console.log(b + e);
// console.log(b + f);

// x(incógnita) |+| y(incógnita)
// 1            |+| 1
// 3            |+| 3
// 5            |+| 22

//1° La palabra reservada function
//2° Nombre de la función -> para utilizarlo
//3° Paréntesis que indican los parámetros
// que va a recibir la función
//Parámetros: A través de los paréntensis nosotros le
//indicamos a nuestra función las variables que va a
//recibir para poder realizar la lógica

//proveerme a mi de lógica para reutilizar

const resultado = Suma(5, 5);
console.log(resultado);

function Suma(operando1, operando2) {
  console.log(operando1 + " dentro de función");
  return operando1 + operando2; //me devuelve la suma de ambas variables
}
//mandar un array           Yo no se que array voy a pasar
function ElMayorDeUnArray(array) {
  console.log("El array que vamos a utilizar es: " + array);
  let mayor = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > mayor) {
      mayor = element;
    }
  }
  //imprimir en consola el elemento mayor del array
  console.log("El elemento más grande del array es: " + mayor);
}

// let menor = 9999;
// let mayor = 0;
const arrayA = [1, 2, 3];
const arrayB = [17, 20, 23];
const arrayC = [22, 25, 42];
const arrayD = [1, 1, 1, 112, 1200];

// ElMayorDeUnArray(arrayA);
// ElMayorDeUnArray(arrayB);
// ElMayorDeUnArray(arrayC);
// ElMayorDeUnArray(arrayD);

function ParOImpar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
//scope global
let variableGlobal = 111;

//si se da la condición
if (true) {
  //fragmento de código
  //contexto o ambiente
  //las variables que yo cree acá adentro sólo existen acá adentro
  //scope local
  //si yo creo una variable dentro de las llaves, sólo las puedo utilizar ahí
  let a = 122; //esta variable sólo existe acá

  console.log("adentro del if " + a);
  console.log(variableGlobal);
}

let a = 1200; //si yo creo una variable afuera de las llaves es scope global

console.log("afuera del if " + a);
for (let index = 0; index < 9; index++) {
  console.log(variableGlobal);
}

function Escribir() {
  console.log("desde función " + variableGlobal);
}

Escribir();
console.log(a);

const numeroZ = 11;
const resultadoUno = ParOImpar(10);
const resultadoDos = ParOImpar(3);
//cuando la función se ejecute false
// console.log(resultadoUno);
// console.log(resultadoDos);
// console.log(ParOImpar(numeroZ));

//Esta función va a recibir como parámetro
//un array y lo va a retornar
function InvertirArray(array) {
  let nuevoArray = [];
  const valor = array.length - 1;

  for (let index = valor; index >= 0; index--) {
    nuevoArray.push(array[index]);
  }

  return nuevoArray;
}

console.log(nuevoArray);

const primerArray = [10, 2, 3];
const concursantesArray = [
  "Ana",
  "Oswaldo",
  "Raúl",
  "Celia",
  "María",
  "Antonio",
];
const pecesArray = [100, 9, 120, 5, 77, 1, 500, -9];

const invertido = InvertirArray(primerArray);
const concursantesInvertido = InvertirArray(concursantesArray);
const pecesInvertido = InvertirArray(pecesArray);
console.log(concursantesInvertido);
console.log(pecesInvertido);
