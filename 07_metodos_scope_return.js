// let respuesta;

// //do {
// respuesta = prompt(
//   "Ingrese la opción que desea:  1 - Agregar Producto, 2 - Listar Producto, 3 - Buscar un producto en el carrito, 4 - Eliminar Producto, 5 - Salir "
// );
// console.log(respuesta);
// respuesta = Number(respuesta);
// console.log(respuesta);
// switch (respuesta) {
//   case 1:
//     console.log("agregar producto");
//     console.log("producto agregado");
//     break;

//   default:
//     break;
// }
// //} while (respuesta !== 5);

// let vector = [];

// let elemento = prompt("Ingrese el nombre de un producto");
// vector.push(elemento);

// console.log(vector);

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

let productos = [];
let opcion = "";
//Array es un tipo de dato, number, string
//Array -> tipo de dato compuesto o complejo
//función -> un algoritmo / lógica que se ejecuta
//productos.push() dentro de push tenemos que escribir que es lo que queremos
//que se almacene en el array
//productos = [] = 0    productos = ["coca"] = 1

opcion = prompt(
  "Por favor, ingrese una de las siguientes opciones: \n" +
    "1 - Agregar Producto \n" +
    "2 - Eliminar Producto \n" +
    "3 - Ver lista de productos \n" +
    "4 - Salir"
);

opcion = Number(opcion);

while (opcion !== 4) {
  switch (opcion) {
    case 1:
      let producto = prompt("Por favor ingrese el producto a la lista");
      productos.push(producto);
      opcion = prompt(
        "Por favor, ingrese una de las siguientes opciones: \n" +
          "1 - Agregar Producto \n" +
          "2 - Eliminar Producto \n" +
          "3 - Ver lista de productos \n" +
          "4 - Salir"
      );
      opcion = Number(opcion);
      break;
    case 2:
      alert("Eliminar un producto");
      break;
    case 3:
      alert("Ver Lista");
      break;
    case 4:
      opcion = 4;
      break;
    default:
      alert(opcion);
      alert("Ingrese una de las opciones válidas, por favor.");
      break;
  }
}

console.log(productos);
