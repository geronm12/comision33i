//#region texto
let saludo = "hola"; //string -> concatenación de carácteres
let caracter = "a"; //char
//#endregion

//#region numbers
//let a = 10; //enteros
let b = 10.5; //decimal
//#endregion

//#region Boolean
let c = true; //1 binario
let d = false; //0 binario
//#endregion

//#region Operadores +, -, *, /, %
//La fábrica de empleados de zapatillas adidas,
//decidió darle un aumento del 30% a todos sus empleados
//Imprima en consola el resultado del aumento de 3 sueldos decididos
//y declarados por el alumno
let sueldoA = 10000;
let sueldoB = 12500;
let sueldoC = 25300;
const aumento = 1.3;

let sueldoConAumentoA = sueldoA * aumento;
let sueldoConAumentoB = sueldoB * aumento;
let sueldoConAumentoC = sueldoC * aumento;

console.log("El resultado es " + sueldoConAumentoA);
console.log("El resultado es " + sueldoConAumentoB);
console.log("El resultado es " + sueldoConAumentoC);
//#endregion

//#region  Operadores Lógicos AND, OR  => &&, ||
const gero = 28;
const mati = 28;
const geroMide = 1.83;
const matiMide = 1.78;
                //28        28       1.83         1.78
const resultado = gero === mati && geroMide > matiMide;
const resultadoOR = gero > mati && geroMide > matiMide;
//#endregion
