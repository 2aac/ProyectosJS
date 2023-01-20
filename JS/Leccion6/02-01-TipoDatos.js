//Tipo String
nombre = "Abel";
console.log(nombre, typeof nombre);
//Tipo Numerico
nombre = 100.0;
console.log(nombre, typeof nombre);

//Tipo de dato object
var objeto = {
  nombre: "Moises",
  apellido: "Garcia",
  telefono: "6624880423",
};
console.log(objeto, typeof objeto);

//Tipo de dato Booleano (true, false)
var Bandera = true;
console.log(Bandera, typeof Bandera);

//Tipo de dato Function
function myfunction() {}
console.log(myfunction, typeof myfunction);

//Tipo de dato Symbol

var simbolo = Symbol("Mi simbolo");
console.log(simbolo, typeof simbolo);

//Tipo de dato Class es una function
class Person {
  constructor(nombre, apellido) {
    this.nombre = apellido;
    this.apellido = nombre;
  }
}
console.log(Person, typeof Person);

//Tipo de dato Undefined
var x;
console.log(x, typeof x);

x = undefined;
console.log(x, typeof x);

//Tipo de dato Null = ausencia de valor
var y = null;
console.log(y, typeof y);

//Array es un tipo Object
var Frutas = ["Mango", "Melon", "Arandano"];
var Autos = ["BMW", "VOLVO", "MERCEDES"];
console.log(typeof Autos);

for (let index = 0; index < Frutas.length; index++) {
  console.log(nombre + " ama el " + Frutas[index]);
}

var num = 1000;

console.log(num);

var z = "";
console.log(z);
console.log(typeof z);


//
var name = 'Moises';
var lastname= 'Garcia';
//Concatenacion de cadenas
console.log(name+' '+lastname);
var years = 21;
console.log(typeof years);
var completename= name+' '+lastname+' is '+ years+' years old';
console.log(completename);
var sum = 19;
//Se concatena como cadena a pesar de ser numerico
var completename= name+' '+lastname+' is '+ years + sum+' years old';
console.log(completename);
//Se concatena como numerico  usando () apesar de estar entre strings
var completename= name+' '+lastname+' is '+ (years + sum)+' years old';
console.log(completename);
//Esto porque las expresiones en JS son evaluadas de izquierda a derecha, siendo numerico antes que cadena.
var completename= years + sum+' is the age of '+name+' '+lastname;
console.log(completename);

//Declaracion sin palabra reservada
    //Mala practica pero posible
    URNAME = 'Jose';
    console.log(URNAME);

    
//var
    
//let 
    //Buena practica
    let myName;
    myName = 'MOISES';

//const solo acepta un valor ya que es constante
    const nacimiento= '15/09/2001'


  let nombres = ["Juan","Moises","Abel","Leonardo"]
  let nombreCompleto = "Juan Perez";
  console.log(nombreCompleto);

  for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);
  }