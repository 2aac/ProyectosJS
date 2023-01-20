/*let a = 3;
let b =2;
let z = a+b;
console.log(z);
z-= b-a;
console.log(z);
z = a*b;
console.log(z);
z = a /b;
console.log(z);
z = a %b;
console.log(z);
z = a**b;
console.log(z);
z = ++a;
console.log(z);
z = --a;
console.log(z);

let x = 3, y = 2, c=1, d = 4;
let zr = x*y+ c/d;
console.log(zr);

let a1 = 1;

a1 += 3; // a1= a1 + 3;
console.log(a1);
a1 -= 2; // a1= a1 - 2;
console.log(a1);*/

/*
let a = 3, b =2, c= "3", d = 2;

let z = (a == b) //expresiones pueden declararse
console.log(z);

z = (b == d);
console.log(z);

z =(a == c); //Apesar de ser diferentes tipos los compara como iguales
console.log(z);

z = (a === c); // === Revisa tipo y valor, por eso los compara como diferentes.
console.log(z);

z= (a != c) // (!=) No revisa el tipo, solo valores. Por eso tenemos false ya que no es diferente para JS
console.log(z);

z =(a !== c) // (!==) Revisa tanto el tipo como el valor. por eso tenemos true ya que si es diferente para js
console.log(z);

z = a < b //  
console.log(z);

z = a <= c // No verifica el tipo, solo el valor
console.log(z);
*/

let a = 17,
  b = 20,
  c = 18;

//programa cual es numero par?

if (a % 2 == 0) {
  console.log("ESTE NUMERO ES PAR");
} else {
  console.log("ESTE NUMERO ES IMPAR");
}

//programa mayor a menor

if (a == b && b == c) {
  console.log("LOS NUMEROS SON IGUALES");
} else {
  if (a >= b && a >= c) {
    if (b > c) {
      console.log("EL ORDEN ES " + a + " " + b + " " + c + " ");
    } else {
      console.log("EL ORDEN ES " + a + " " + c + " " + b + " ");
    }
  }

  if (b > a && b >= c) {
    if (a > c) {
      console.log("EL ORDEN ES " + b + " " + a + " " + c + " ");
    } else {
      console.log("EL ORDEN ES " + b + " " + c + " " + a + " ");
    }
  }
  if (c > a && c > b) {
    if (b > a) {
      console.log("EL ORDEN ES " + c + " " + b + " " + a + " ");
    } else {
      console.log("EL ORDEN ES " + c + " " + a + " " + b + " ");
    }
  }
}

let edad = [20,18,17,12,35];
for (let i = 0; i < edad.length; i++) {
  var element = edad[i];
  if(element >= 18){
    console.log("Tu tienes "+ element +" eres mayor de edad");
  }else{
    console.log("Tu tienes "+ element +" eres menor de edad");
  }
}

//and &&
//or ||


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

let Alumno = {
  Materia: "Informatica",
  grupo: 'I7A',
  calificacion: 100,
}
//OPERADOR TERNARIO
//sintaxis   let  Varname = boolean ? truevalue : falsevalue;
// Puede manejarse cualquier tipo de dato pero no se puede inicializar dentro de ellos. 
let resultado = (3>2) ? "Verdadero" : "falso"; //regresa tipo string
console.log(typeof resultado, resultado);

let resultadox = (3>4) ? "Verdadero" : false; //Regresa tipo Booleano
console.log(typeof resultadox, resultadox);

let resultadoy = (3>5) ? "Verdadero" : 0; // Regresa tipo numero
console.log(typeof resultadoy, resultadoy);
let z =1; 
let resultadoz = (10 % 2 == 0) ? z : 0; //Puede regresar variables
console.log(typeof resultadoz, resultadoz);

let resultadoa = (10 % 2 == 0) ? edad : 0; //Puede regresar objetos (Array en este caso)
console.log(typeof resultadoa, resultadoa);

let resultadob = (10 % 2 == 0) ? edad[2] : 0; //Puede regresar elemento exacto de un objetos (Array en este caso)
console.log(typeof resultadob, resultadob);

let resultadoc = (10 % 2 == 0) ? myfunction : 0; //Puede regresar funciones o hacer llamados.
console.log(typeof resultadoc, resultadoc);

let resultadod = (10 % 2 == 0) ? Person : 0; //Puede regresar clases.
console.log(typeof resultadod, resultadod);

let resultadoe = (true) ? Alumno.Materia : Alumno; //Puede regresar objetos y propiedades exactas.
console.log(typeof resultadoe, resultadoe);




//---------------------------
//Convertir string a Numero
//---------------------------

//Usamos el metodo Number()
let miNumero = '18';
console.log(typeof miNumero);
let miEdad = Number(miNumero);
let r = (miEdad >= 18) ? "La persona vota":"La persona es menor de edad";
console.log(typeof miEdad, r)

//---------------------------
//TIPO NAN
//---------------------------
let  suEdad = Number(miNumero+'x')// '18x' Esto debido a que el string contiene caracteres no numerocos como x
console.log(typeof suEdad, suEdad);
suEda = Number(miNumero);
console.log(typeof suEda, suEda);

let res = (isNaN(suEda)) ? " no Es un numoer":" Es un numero";
console.log(res);

                                               
let m = 5;
let n = 10;
let t = ++m + n--; //m se le aumentara en 1 el valor antes de hacer la suma de variables y a n se le restara 1 despues de la suma.
console.log(m);
console.log(n);
console.log(t);