//primer objeto de programación
//JSON -> Javascript Object Notation
//usando el mappeo del mundo real, podemos crear objetos virtuales y utilizarlos
//en nuestro sistema

//En base al análisis de un objeto de la vida
const empleados = [
  {
    nombre: "Gerónimo",
    apellido: "López",
    puesto: "Mentor",
    comision: "33i",
    mail: "gerolpz01@gmail.com",
    legajo: "1",
    telefono: "3815555122",
  },
  {
    nombre: "Matías",
    apellido: "Altamiranda",
    puesto: "Tutor",
    comision: "33i",
    mail: "matias01@gmail.com",
    legajo: "2",
    telefono: "11111111111",
  },
  {
    nombre: "Empleado nuevo",
    apellido: "nuevo",
    puesto: "Tutor",
    comision: "33i",
    mail: "nuevo01@gmail.com",
    legajo: "3",
    telefono: "11111111111",
  },
];

const empleado = empleados[0];

console.log(empleados);
console.log(empleado.apellido, empleado.nombre, empleado.puesto);
