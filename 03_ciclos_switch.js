// const h1 = "<h1>Hola Mundo </h1>";
// const style = "h1 { color: red; }";

// let numero_cancha = 5;
// let precio_cancha = 120;
// let esta_alquilada = true;
// let es_techada = true;
// let clima = "lluvioso";

// // La cancha si o si debe estár libre, es decir esta_alquilada debe ser false
// // Si el clima es lluvioso la cancha debe ser techada si o si
// // Si el clima es soleado la cancha puede ser techada o no

// if (esta_alquilada === false) {
//   if (clima === "lluvioso" && es_techada === true) {
//     //vendo la cancha
//   } else {
//     //no vendo la cancha
//   }
// }

// //!==
// if (esta_alquilada !== true) {
//   if (clima === "lluvioso") {
//     if (es_techada === false) {
//     }
//   }
// }

// if (!esta_alquilada) {
//   if (clima === "lluvioso") {
//     if (!es_techada) {
//       //no alquilo
//     } else {
//       //si alquilo
//     }
//   }
// }

// //DOM

//switch
//simulamos crear una paleta para que el usuario pueda personalizar su perfil de nuestra aplicación
const color = "verde";
const numero = 10;
const clima = "lluvioso";
const esTechada = false;

if (color === "azul") {
  console.log("azul");
  //acá hacemos la lógica para cambiar el fondo de la app
} else if (color === "violeta") {
  console.log("violeta");
  //acá hacemos la lógica para cambiar el fondo de la app
} else if (color === "naranja") {
  console.log("naranja");
  //acá hacemos la lógica para cambiar el fondo de la app
} else if (color === "rojo") {
  console.log("rojo");
  //acá hacemos la lógica para cambiar el fondo de la app
} else {
  console.log("no era ninguno de los colores anteriores");
  //acá dejamos el color como está
}
//verde
if (color === "azul") {
  console.log("color azul if pequeño");
} else {
  console.log("el color no es azul, es otro color");
}

switch (color) {
  case "azul":
    console.log("azul");
    break;
  case "naranja":
    console.log("naranja");
    break;
  case "violeta":
    console.log("violeta");
    break;
  case "rojo":
    console.log("rojo");
    break;
  default:
    break;
}

switch (numero % 2) {
  case 0:
    console.log("par");
    break;

  default:
    console.log("impar");
    break;
}

switch (clima) {
  case "lluvioso":
    //ejecutar una lógica
    if (esTechada === false) {
      console.log("No se puede alquilar, está lloviendo");
    }
    break;
  case "soleado":
    console.log("podemos alquilar igual");
    break;

  default:
    console.log(
      "no se puede alquilar, contacte con el administrador del sistema"
    );
    break;
}
//if() default else
const USS = "dolar";
const tipoCambio = "380";
const AR = "peso";
const pisoGanancias = 440000;

const sueldoEmpleado = 200000;
const cobraEn = AR;

const sueldoEmpleadoB = 150000;
const cobraEnB = AR;

const sueldoEmpleadoC = 85000;
const cobraEnC = AR;

const sueldoEmpleadoD = 3000;
const cobraEnD = USS;

if (cobraEn === USS) {
  console.log("convierto");
  let conversion = sueldoEmpleado * tipoCambio;
  if (conversion >= pisoGanancias) {
    console.log("impuesto a las ganancias");
  }
} else {
  if (sueldoEmpleado >= pisoGanancias) {
    console.log("impuesto a las ganancias");
  }
}
//...n
if (cobraEnD === USS && sueldoEmpleadoD * tipoCambio >= pisoGanancias) {
  console.log("impuesto a las ganancias");
} else if (cobraEnD === AR && sueldoEmpleadoD >= pisoGanancias) {
  console.log("impuesto ganancias sin convertir");
} else {
  console.log("El empleado no paga ganancias");
}

switch (cobraEnD) {
  case USS:
    //ejecutar una lógica
    if (sueldoEmpleadoD * tipoCambio >= pisoGanancias) {
      console.log("paga ganancias");
    }
    break;
  case "pesos":
    if (sueldoEmpleadoD >= piosoGanancias) {
      console.log("paga ganancias");
    }
    break;
  default:
    console.log(
      "no cobra en ninguna de las monedas reconocidas, por favor contacte al adminsitrador."
    );
    break; //return
}

const inputColor = document.getElementById("color");
const body = document.getElementById("body");
var colorElegido = "";

inputColor.addEventListener("change", (e) => {
  const color = e.target.value;

  switch (color) {
    case "#009dff":
      console.log("color certero");
      body.style = "background-color:" + "black";
      break;
    case "#FFFFFF":
      console.log("color certero");
      body.style = "background-color:" + "black";
      break;
    default:
      body.style = "background-color:" + e.target.value;
      break;
  }
});
