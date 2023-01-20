//Creacion de Funcion
/*function miFuncion (Parametros){

}
miFuncion(Argumentos);
*/

let Resultado = miFuncion(1, 2, true);
const numero = 5;
console.log(Resultado, typeof Resultado);
console.log(
  "Es string( " + Resultado + " )",
  typeof Resultado,
  "Es numero( " + 5 + " )",
  typeof 5,
  Resultado + 5
);

function miFuncion(a, b, bandera) {
  console.log(arguments.length);
  const C = bandera
    ? "Suma: " + (a + b) /*Regresa como String*/
    : a - b; /*Regresa como int*/
  return C;
} //Es posible usarla porque JS toma las funciones desde el principio a pesar de que se declaren despues.

Resultado = miFuncion(6, 7, false);
console.log(Resultado);
console.log(Resultado + 5);

/**************************************************************/
//FUNCIONES EN VARIABLES (FUNCIONES DE TIPO EXPRECION)

let sumar = function (a = 4, b = 5) {
  console.log(arguments[0]); //a
  console.log(arguments[1]); //b
  console.log(arguments[2]);
  console.log(arguments[3]);
  //argument[2,3]No estan definidos pero se pueden usar sin ser especificados en la funcion.
  console.log(a + b);
  return a + b;
};
let restar = function (a, b) {
  return a - b;
};
resultado = sumar(3, 2, 7, "Hola Mundo"); //4 argumentos pero solo se usaran 2
resultado = sumar(3); //1 argumento y otro indefinido. = 8 porque estan definidos en la funcion como 4 y 5 pero cambiamos 4 por 3 que recibimos
resultado = sumar(); //Sin Argumentos pero es 9 porque estan definidos en la funcion.
let resultadoR = restar(8, 5);
console.log(resultado, resultadoR);

//Funciones Flecha =>
//                          Argumentos   Retorno
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);
const sumarFuncionTipoFlecha2 = (a, b) => sumar2(a,b);
resultado= sumarFuncionTipoFlecha2(5,7);
console.log(resultado);
function sumar2(){
  let x=arguments[0]+arguments[1];
  return x;
}
/**************************************************************/
//FUNCIONES DE AUTOLLAMADO  Puede ser util para cargar funciones al principio del programa.
(function (a, b) {
  console.log("Ejectuando la funcion" + "  Anonima  " + (a + b));
})(3, 4); //se llama con () al final y solo se llama 1 solavez y no se puede volver a llamar.

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

function sumarTodo() {
  let sumaT = 0;
  let sumaS = 0;
  let sumaL = 0;
  let sumaSl = 0;
  for (let i = 0; i < arguments.length; i++) {
    let z = arguments.length - 1;
    for (let j = 0; j < arguments[i].length; j++) {
      sumaS = arguments[i][j] + sumaS;
      if (z >= 0) {
        if(z==i){
            if(i==(arguments.length-1)){
                z=z-1;
            }else{
                z=(arguments.length-1);
            }
        }
        if(z==0)z=i-1;
        for (let y = z; i != y && y >= 0; y--) {
            sumaSl = arguments[y][j]+ sumaSl;  
          if ((y - 1) == i) {
            y =y- 1;
          }
        }
      }
      ;
      console.log(sumaSl);
      console.log(arguments[i][j]);
      sumaL = arguments[i][j] + sumaSl;
      sumaSl =0;
      console.log(sumaL);
    }
    sumaT = sumaS;
  }
  console.log(sumaT);
  return sumaT;
}

const arg1 = [5, 4, 13, 10, 9];
const arg2 = [14, 16, 5, 7, 7];
const arg3 = [ 2 ,1 ,3 ,4,5];
const arg4 = [9,9,9,9,9];
const arg5 = [10,10,10,10,10];
resultado = sumarTodo(arg1, arg2, arg3,arg4, arg5);
console.log(resultado);


//Paso por valor
let x = 10;
function cambiarValor(a){
  a=20;
}

cambiarValor(x);
console.log(x);

//Paso por referencia

const persona = {
  name: "Juan",
  lastName:"Perez"
}

function cambiarValorObjeto(p1){
  p1.name = 'Carlos';
  p1.lastName= 'Lara';
}
cambiarValorObjeto(persona)
console.log(persona.name, persona.lastName);


//LAS FUNCIONES TIENEN METODOS Y PROPIEDADES COMO
/*
toString

Argument

*/


