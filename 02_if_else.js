// //punto 4
// Declarar 6 variables de tipo number y aplicar operadores lógicos y de igualdad:
// Crear una variable dónde preguntemos si una de las variables creadas anteriormente es mayor que otra.
// Crear una variable dónde preguntemos si una de las variables creadas anteriormente es menor que otra.
// Crear 3 variables dónde utilicemos el operador AND usando las variables creadas anteriormente.
// Crear 3 variables dónde utilicemos sl operador OR usando las variables creadas anteriormente.
// Crear una dónde variable dónde utilizaremos el operador AND, elegiremos una de las 6 variables creadas anteriormente, y utilizaremos el operador: si la variable es PAR Y es mayor a 50
// Crear una dónde variable dónde utilizaremos el operador OR, elegiremos una de las 6 variables creadas anteriormente, y utilizaremos el operador: si la variable es IMPAR O es mayor igual a 8

let primer_valor = 10;
let segundo_valor = 333;
let tercer_valor = 25;
let cuarto_valor = 48;
let quinto_valor = 120;
let sexto_valor = 1;

let esMayor = cuarto_valor > segundo_valor;
let esMenor = segundo_valor < sexto_valor;

let AND_condicion_a =
  primer_valor > segundo_valor && segundo_valor > tercer_valor; //false
let AND_condicion_b =
  tercer_valor === segundo_valor && quinto_valor >= tercer_valor;
let AND_condicion_c =
  sexto_valor === primer_valor && primer_valor >= quinto_valor;

// let a = 5;
// let b = 5;
// let resultado = 10;

// let esM = (a + b) > resultado;
// let esMe = a + b * (c / resultado) < 2000;
// let edades = (18 > 10 && 18 < 20) || (18 < 25 && 18 > 22);

let OR_condicion_a =
  primer_valor > segundo_valor || segundo_valor > tercer_valor; //true
let OR_condicion_b =
  tercer_valor === segundo_valor || quinto_valor >= tercer_valor;
let OR_condicion_c =
  sexto_valor === primer_valor || primer_valor >= quinto_valor;

/*
            10              333
    A = primer_valor > segundo_valor = false = 0;
    OR
            333             25
    B = segundo_valor > tercer_valor = true = 1;

      AND 
    A     B    Rta
    ---|----|---
    1  |  1 | 1
    1  |  0 | 0
    0  |  1 | 0 
    0  |  0 | 0

    O uno o el otro o ambos
    OR 
    A     B    Rta
    ---|----|---
    1  |  1 | 1
    1  |  0 | 1
    0  |  1 | 1
    0  |  0 | 0
  */

//if - else: ejecutar un bloque de código de forma condicional  { }
// if (primer_valor > segundo_valor || segundo_valor > tercer_valor) {
//   console.log("una de las condiciones es verdadera por ende es verdadero");
// } else {
//   console.log("no pasó nada");
// }

//Mayor de 18 entran al salón común y los mayores de 21 entran al salón VIP
//el usuario va a ingresar el número de documento del cliente y el sistema deberá evaluar si
//el cliente cumple con las condiciones para ingresar al salon común o al salón vip

const edad_minima_salon_base = 18;
const edad_minima_salon_vip = 21;

//primer resultado: la persona sea mayor de 21 por ende va al salon vip    x
//segundo resultado: la persona sea mayo de 18 años por ende va al salon base x
//tercer resultado: la persona es menor de edad, por ende no entra x

let edad_persona_a = 16;
let edad_persona_b = 25;
let edad_persona_c = 17;
let edad_persona_d = 22;
let edad_persona_e = 18;
//si... si no también... si no...
if (
  edad_persona_b >= edad_minima_salon_base &&
  edad_persona_b < edad_minima_salon_vip
) {
  console.log("La persona puede ingresar al salon base");
} else if (edad_persona_b > edad_minima_salon_vip) {
  console.log("La persona puede ingresar al salon vip");
} else {
  console.log("La persona es menor de edad, no puede ingresar");
}

// Crear una variable dónde utilizaremos el operador AND,
// elegiremos una de las 6 variables creadas anteriormente,
// y utilizaremos el operador: si la variable es PAR Y es mayor a 50
let es_par_y_mayor_a_cincuenta = quinto_valor % 2 === 0 && quinto_valor > 50;
let es_impar_y_mayor_o_igual_a_ocho =
  quinto_valor % 1 !== 0 || quinto_valor >= 8;

let acumulador = 0;

let camisa_mangas_largas = "camisa mangas largas";
let precio_camisa_mangas_largas = 1200;
let código_camisa_mangas_largas = "CBD1234";

let clienteA = "Gerónimo";

if (código_camisa_mangas_largas === "A") {
  acumulador += precio_camisa_mangas_largas;
} else {
  console.log("El código ingresado es incorrecto");
}

if (código_camisa_mangas_largas === "CBD1234") {
  acumulador += precio_camisa_mangas_largas;
} else {
  console.log("El código ingresado es incorrecto");
}


if(código_camisa_mangas_largas === "CBD1234"){
    acumulador += precio_camisa_mangas_largas;
}else if(cod_camisa === "BBCC"){
    acumulador += precio_camisa;
}else if(cod_zapatillas === "CCCC"){
    acumulador += precio_zapatillas;
}else{
    console.log("El código ingresado de algunoi de los productos anteriores es incorrecto");
}