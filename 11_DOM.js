// //que esto va a venir de una base de datos
// const empleados = [
//   {
//     nombre: "geronimo",
//     apellido: "lopez",
//     rol: "mentor",
//   },
//   {
//     nombre: "mati",
//     apellido: "altamiranda",
//     rol: "tutor",
//   },
//   {
//     nombre: "persona3",
//     apellido: "apellido3",
//     rol: "tutor3",
//   },
//   {
//     nombre: "persona4",
//     apellido: "apellido4",
//     rol: "tutor4",
//   },
// ];

// //segmentar -> separar la lógica
// //separar las responsabilidades
// //asdasdas asdasdsad asdasdsad
// function Presentacion() {
//   console.log(`Mi nombre es: ${nombre} ${apellido}. Soy ${rol} de la empresa.`);
// }
// //true

// // for (let index = 0; index < empleados.length; index++) {
// //   const element = empleados[index];
// //   Presentacion(element.nombre, element.apellido, element.rol);
// // }

// // function Presentacion() {
// //   for (let index = 0; index < empleados.length; index++) {
// //     const element = empleados[index];
// //     console.log(
// //       `Mi nombre es: ${nombre} ${apellido}. Soy ${rol} de la empresa.`
// //     );
// //   }
// // }

// Presentacion("hola", "mundo", "ssr developer");
// Presentacion("asdasd", "asdasd", "asdasd");
// // Presentacion();

// function Suma(a, b){
//     return a + b;
// }
 
//referencia
const div = document.getElementById("app");
const label = document.getElementById("lbl");
const btnMas = document.getElementById("mas");
const btnMenos = document.getElementById("menos");
let contador = 99;
Refresh();
btnMas.classList.add("btn");
btnMas.classList.add("btn-primary");

btnMas.addEventListener("click", function () {
  contador++;
  Refresh();
});

btnMenos.classList.add("btn");
btnMenos.classList.add("btn-danger");

btnMenos.addEventListener("click", function () {
  contador--;
  Refresh();
});

function Refresh() {
  if (contador === 100) {
    contador = 0;
  }

  if (contador % 2 === 0) {
    label.classList.remove("azul");
    label.classList.add("rojo");
  } else {
    label.classList.remove("rojo");
    label.classList.add("azul");
  }
  label.innerText = contador;
}

//Manejando el DOM yo puedo hacer muchas cosas:
//Crear elementos e incrustarlos en html
//Eliminar elementos
//duplicar elementos
//mover elementos
//agregarles estilos
//quitarles estilos
//reaccionar a los eventos que se disparen en el navegador
