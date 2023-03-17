//primer objeto de programación
//JSON -> Javascript Object Notation
//usando el mappeo del mundo real, podemos crear objetos virtuales y utilizarlos
//en nuestro sistema

//En base al análisis de un objeto de la vida
//no tienen estructura predefinda
const pEmpleados = [{}, {}];
//Objeto JSON -> Javascript Object Notation

// {
//   nombre: "Gerónimo",
//   apellido: "López",
//   puesto: "Mentor",
//   comision: "33i",
//   mail: "gerolpz01@gmail.com",
//   legajo: "1",
//   telefono: "3815555122",
// }

//Dato Compuesto -> El par Clave o Llave y Valor
//Estructuras y patrones para desarrollar
//clase -> crear un tipo de dato con el nombre
//que nosotros queramos y darle una estructura obligatoria

//un tipo de dato propio nuestro
//Esto es una receta o estrucutra
class Empleado {
  nombre = "";
  apellido = "";
  email = "";
  sueldo = 0;
  nombreCompleto = function nombreCompleto() {
    console.log(`${this.nombre} ${this.apellido}`);
  };
  parOImpar = function () {
    if (this.sueldo === 0) {
      return "Debe ingresar un sueldo para poder calcular si es par o impar";
    }

    if (this.sueldo % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  };

  constructor(nombre, apellido, email, sueldo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.sueldo = sueldo;
  }
}

//new -> Instanciar un Objeto -> Crearlo
let primer_empleado = new Empleado(
  "Gero",
  "López",
  "gerolpz01@gmail.com",
  10000
);
console.log("este es un objeto creado a partir de una clase");
console.log(primer_empleado);
primer_empleado.nombreCompleto();
console.log(primer_empleado.parOImpar());
const a = [1, 2, 3, 4, 5]; //muchos datos -> indice
const b = 1;
const c = {
  nombre: "hola",
  legajo: 1234,
  mail: "@mail.com",
};
const d = new Empleado("gero", "hola", "a@gmail.com", 1200);

//get y set es leer y asignar
console.log();
