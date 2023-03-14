//3 datos -> El operador (+, -, * o /), 2 valores que queremos que se operen
const mensaje =
  "Por favor, seleccione la operación que desea realizar: " +
  "+ (suma), - (resta), * (multiplicación), / (división)";

const mensaje_error =
  "Por favor ingrese una de las operaciones válidas. Requeridas por el sistema.";

const mensaje_suma = "El resultado de la suma es: ";

const operacion = prompt(mensaje); //en este punto, deberíamos tener el operador
//pido los valores
let array_operacion = []; //esto es ambito global
//-> linea
//-> evaluamos la operación
if (
  operacion === "+" ||
  operacion === "-" ||
  operacion === "*" ||
  operacion === "/"
) {
  array_operacion = ValoresIngresadosPorUsuario();
  switch (operacion) {
    case "+":
      Mensaje(array_operacion[0] + array_operacion[1], mensaje_suma);
      break;
    case "-":
      //resultado -> llaman a la función resta
      Mensaje(array_operacion[0] - array_operacion[1], "");
      break;
    case "*":
      alert(array_operacion[0] * array_operacion[1]);
      break;
    case "/":
      alert(array_operacion[0] / array_operacion[1]);
      break;
    default:
      alert(mensaje_error);
      break;
  }
}

console.log(array_operacion);

function ValoresIngresadosPorUsuario() {
  let array = []; //existe sólo dentro de esta funcion -> Scope o ámbito
  //pido los valores
  let primer_valor = prompt("Por favor seleccione el primer valor.");
  let segundo_valor = prompt("Por favor seleccione el segundo valor.");
  //convierto los valores a number
  primer_valor = parseInt(primer_valor); //si yo no convierto a tipo number no voy a poder operar
  segundo_valor = Number(segundo_valor); //si yo no convierto a tipo number no voy a poder operar
  //almaceno los valores en el array
  array.push(primer_valor); //0
  array.push(segundo_valor);
  return array;
}

function Mensaje(resultado, mensaje) {
  alert(mensaje + resultado); //esto no devuelve un valor
}
