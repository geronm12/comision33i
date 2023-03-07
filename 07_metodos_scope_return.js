//#region  Prompt: todos los datos que yo recibo de la prompt entran como "string"
//los datos se pueden convertir siempre que esa conversión exista
//"a" = number    NO  NaN -> error
//"1" = number    SI
//String a Number, de Number a String, Boolean (true = 1, false = 0) a Number, Boolean a String y String a Boolean
// let respuesta = "";
// let convertir = NaN;
// const mensaje = 1;
// //alert("Hola Mundo");
// // while (respuesta === "" || respuesta === " " || respuesta === null) {
// //   respuesta = parseInt(prompt("Ingresa tu fecha de nacimiento"));
// // }

// convertir = Number(respuesta);

// while (convertir === NaN) {
//   const respuestaNueva = prompt("Ingrese un número válido");
//   convertir = Number(respuestaNueva);
// }

// console.log(convertir);
// console.log(typeof convertir);
//#endregion

//#region  Requisitos funcionales
//Simular una lista de productos para comprar [Array]
//preguntar al usuario que productos desea comprar
//almacenar esos productos en un array
//manipular los datos del array (leer, escribir, modificar, etc)
//mantener este sistema vivo en base a decisiones
//#endregion

let productos = []; //almacenar los productos de la lista
let opcion = "";
const mensaje_inicial =
  "1 - Agregar Producto \n" +
  "2 - Eliminar Producto \n" +
  "3 - Ver lista de productos \n" +
  "4 - Filtrar Lista \n" +
  "5 - Salir \n";
//Array es un tipo de dato, number, string
//Array -> tipo de dato compuesto o complejo
//función -> un algoritmo / lógica que se ejecuta
//productos.push() dentro de push tenemos que escribir que es lo que queremos
//que se almacene en el array y se agrega el elemento en la ultima posición
//productos.pop() no se escribe nada dentro del paréntesis y elimina el elemento
//con mayor indice de nuestro array (recordemos que el indice lo obtenemos con n + 1)
//productos = [] = 0 productos = ["coca"] = 1

opcion = prompt(mensaje_inicial); //vamos a abarcar desde la opción 1 a la opción 4

opcion = Number(opcion); //parseInt()
//1
while (opcion !== 5) {
  switch (opcion) {
    case 1:
      let producto = prompt("Por favor ingrese el producto a la lista"); //no podemos verificar que el usuario guarde un producto
      productos.push(producto);
      opcion = prompt(mensaje_inicial);
      opcion = Number(opcion);
      break;
    case 2:
      let mensaje = "";
      if (productos.length > 0) {
        productos.pop();
        mensaje = "Producto eliminado.";
      } else {
        mensaje = "No hay ningún producto para eliminar.";
      }
      opcion = prompt(mensaje + mensaje_inicial);
      opcion = Number(opcion);
      break;
    case 3:
      if (productos.length !== 0) {
        let lista = "";
        for (let index = 0; index < productos.length; index++) {
          const producto = productos[index];
          lista += `- ${producto} \n`;
        }
        alert(lista);
      } else {
        alert("No hay ningun producto en la lista.");
      }

      opcion = prompt(mensaje_inicial);
      opcion = Number(opcion);
      break;
    case 4:
      let filtro = prompt("Por favor ingrese la inicial del producto");
      opcion = prompt(mensaje_inicial);
      opcion = Number(opcion);
      break;
    case 5:
      opcion = 5;
      break;
    default: //el case default se ejecuta si ninguno de los casos contemplados se cumple
      alert(opcion);
      alert("Ingrese una de las opciones válidas, por favor.");
      break;
  }

  //siguie acá en el while
}

const mensaje = "";
//funciones/métodos o funcionalidades -> Lógica
console.warn("hola mundo"); //fue creada por otro desarrollador
//Nota: El último elemento de un array es siempre el que tiene el indice más alto
console.log(productos);
//muere
let array = [];

//Programación Parádigma   //Funciones del lenguaje
/*  switch                          .push()  .pop() 
    if else
    for
    while               
*/

//primero buscar el último elemento y obtener su indice  array.length - 1
//[10,10,10]   =>  .length 3 - 1 = 2 array[ultimoIndice] = nuevoelemento;

const cadena = "soy una cadena";
const numero = 10;

// // Al inicio del concurso los primeros lugares son para Ana, Oswaldo, Raúl, Celia,
// María y Antonio  en ese respectivo orden.
// // a) utilizando un array imprima los nombres de los ganadores.
// // b) Y si ahora se pidiera que se imprimiera en consola los ganadores
// del último al primero? (de atrás para adelante)
// // c) Imprima en consola la cantidad de veces que se repite cada vocal
//  en todos los nombres de los participantes.
// // d) Imprima en consola los nombres que comiencen con la letra “A”

//number, string, bool, Array -> tipos de datos

//ej listas de super, carritos de compra, liostas de empleados, listas de productos para mostrar, listas de videos
//mostrar en html todos los productos
//mostrar la lista de productos para comprar
// n - 1; n = cant. elementos - 1;
//0        1        2        3       4          5       -> max index = 6

//HardCodeo
const concursantes = [
  "Ana",
  "Oswaldo",
  "Raúl",
  "Celia",
  "María",
  "Antonio",
  "Gero",
];
//lo vamos a recibir de una BASE DE DATOS

//IMPRIMIR TODOS LOS CONCURSANTES --> HARD CODEO
console.log(concursantes[0]);
console.log(concursantes[1]);
console.log(concursantes[2]);
console.log(concursantes[3]);
console.log(concursantes[4]);
console.log(concursantes[5]);

//                     (mientras esta condición sea true, se sigue ejecutando el código)
//    variable         condición           contador => aumentar de 1 en 1 la variable creada en la primera parte
for (let index = 0; index < concursantes.length; index++) {
  //llave 1      index++ => index = index + 1;
  //el código que se encuentra dentro de estás llaves
  //acá adentro se escribe el código que se va a repetir
  const element = concursantes[index];
  concursantes.push(1);

  //console.log(element);
} //llave 2

//sigue acá
//me da javascript => concursantes.reverse()  => AHORRA MUCHISIMO TIEMPO

//index -- resta de uno en uno => index = index - 1;
//5 6 10 1200
const maxIndex = concursantes.length - 1;

for (let index = maxIndex; index >= 0; index--) {
  const element = concursantes[index];
  //console.log(element);
}

console.log(concursantes.length);

//SOLUCION EJERCICIO EN CLASE

let peces = [];
let contador = 0;
let peces_restantes = 5;

while (contador < 5) {
  let variable = prompt(
    "Por favor ingresa el peso del pez, en total le faltan" +
      peces_restantes +
      "peces"
  );
  peces.push(variable);
  contador++;
  peces_restantes--;
}

let mayor = -9999;
let menor = 9999;

for (let index = 0; index < peces.length; index++) {
  const element = peces[index];
  if (element > mayor) {
    mayor = element;
  } else {
    menor = element;
  }
}
