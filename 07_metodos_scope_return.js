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

//Nota: El último elemento de un array es siempre el que tiene el indice más alto
console.log(productos);
