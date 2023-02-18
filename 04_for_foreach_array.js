//0        n - 1 -> siendo n el número de elementos que tiene el array
//o vector
//0  1  2  3

//al array se puede acceder tanto para leer como para escrir en sus celdas utilizando el índice
//index
let array = [1, 2, 3, 4, 5, 6, 7]; //n
let array_cadenas = [
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
  "hola",
  "mundo",
  "donde",
  "casa",
]; //n

// let array_mixto = ["hola", 1, 10, "mundo"];
// const numero = 10;
// let acumulador = 0;

// acumulador = array[0] + array[1] + array[2] + array[3];

// array[4] = 12;
// array[5] = 11;

// console.log(numero);
// console.log(array);
// console.log(array[0]);
// console.log(acumulador);

// console.log("este indice no existe");
// console.log("---------------------");
// console.log(array[4]);

// console.log("hola" + 1);

// const climas = ["lunes", "lluvioso", "nevado"];

//CICLOS ITERATIVOS O BUCLES
//contador
//index++ (index = index + 1)
console.log("longitud");
console.log(array_cadenas.length); //devolverme la longitud del array ¿Cuántos elementos tiene?
console.log(array_cadenas);
//array_cadenas.length = 48;
//48           47
//mientras index sea menor a la longitud del array
//el fragmento de código que se encuentra en el interior se ejecuta
for (let index = 0; index < array_cadenas.length; index++) {
  const elemento = array_cadenas[index];
  console.log(elemento);
}
//true = 1 false = 0
const productos = [15, 15, 20, 18, 31, 2];
var acumulador = 5; //10

for (let index = 0; index < productos.length; index++) {
  acumulador += productos[index];
}

console.log(acumulador);

acumulador = acumulador + 10;
  