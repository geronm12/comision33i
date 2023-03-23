console.log("hola");
//al html sobre el cuál está incrustado mi script
const div = document.getElementById("hola");

console.log(div);

// const resultado = confirm("Hola desea continuar");
// console.log(resultado);

//almacenar un nuevo elemento en el local storage

const numero = localStorage.getItem("usuarioB");
const boolean = localStorage.getItem("usuario");
const strg = localStorage.getItem("usuarioC");
console.log(numero);
console.log(boolean);
console.log(strg);
//llave       valor
localStorage.setItem("usuario", "g");
localStorage.setItem("usuarioB", 1);
localStorage.setItem("usuarioC", true);

//lo que hace es convertir

//dato completo o compuesto

//esto convierte nuestro objeto o array o dato compuesto en un string

const emp = JSON.stringify(empleados);

localStorage.setItem("empleados", emp);

console.log(empleados);
