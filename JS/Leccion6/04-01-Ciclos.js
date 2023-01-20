do {} while (false);

let a = "Julio";
let c = a;

console.log(a, c);
let b = c != null ? estacion(a) : "Ingrese un mes";
console.log(b);

function estacion(X) {
  console.log(X);
  let x = X;
  console.log(x);
  if (x == "Marzo" || x == "Abril" || x == "Mayo") {
    console.log(x);
    return 1;
  }
  if (x == "Junio" || x == "Julio" || x == "Agosto") {
    console.log(x);
    return 2;
  }
  if (x == "Septiembre" || x == "Octubre" || x == "Noviembre") {
    console.log(x);
    return 3;
  }
  if (x == "Diciembre" || x == "Enero" || x == "Febrero") {
    console.log(x);
    return 4;
  }
  return 0;
}
console.log(b);
switch (b) {
  case 1:
    console.log("Es primavera");
    break;
  case 2:
    console.log("Es verano");
    break;
  case 3:
    console.log("Es Falls");
    break;
  case 4:
    console.log("Es Invierno");
    break;
  default:
    console.log("Error intente con un Mes valido");
    break;
}


//Switch hace comparacion estricta por lo que compara valor y tipo.
let mes = 2;

switch (mes) {
  case 1:
  case 2:
  case 12:
    console.log("Invierno");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Falls");
    break;
  default:
    break;
}
