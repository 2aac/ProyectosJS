//sintaxis para hacer arreglo

let autoos = new Array('FORD', 'VOLWKSVAGEN', 'NISSAN'); //Sintaxis vieja

let autos = ['BMW', 'MERCEDEZ', 'VOLVO'];
console.log(autos);

//Seleccion de elemento.
console.log(autos[2]);

//Recorrido de Arreglo

function imprimir(autos) {
    for (let index = 0; index < autos.length; index++) {
        console.log(autos[index]);
    }
}

//MODIFICAR VALOR DE ARREGLO
autos[0] = 'FORD';
console.log(autos);


//AGREGAR VALOR EN ARREGLO  Usa funcion Push()
//              0         1         2          3        INDICES
autos.push('CHEVROLET');//              1         2         3          4        ELEMENTOS
console.log(autos, typeof autos);

console.log(autos.length);
autos[autos.length] = 'CADILLAC';
console.log(autos, typeof autos);

console.log(autos.length);
autos[10] = 'NISSAN';
console.log(autos, typeof autos);

autos[8] = 'PONTIAC';
console.log(autos, typeof autos);


//REMPLAZAR VALOR EN ARREGLO

autos[3] = "NISSAN"
console.log(autos, typeof autos);

//FUNCIONES EN ARREGLOS

autos.push("ME AGREGO AL FINAL DEL ARREGLO");
console.log(autos)

console.log(Array.isArray(autos)) //Sabemos que trabajamos con un arreglo.

//PREGUNTAR SI TRABAJAMOS CON ARREGLO
console.log(autos instanceof Array);//Si trabajamos con un arreglo

const vec = [10, 60, 30, 80, 70,];

const orden = vec.sort((x, y) => {
    if (x < y) {
        return 1;
    } else {
        return -1;
    }
})

console.log(orden)

const delet = vec.push(20); //delet se queda con el length
console.log(vec)
vec.pop();
console.log(vec)
vec.fill(50, 2, 4);
console.log(vec)
const newvec = vec.filter(Element => Element != 50);
console.log(newvec.push(50, 60, 65, 10), newvec);

((arguments)=> {
    console.log(arguments); 
    for (let j = 0; j <= 1; j++) {
        let v2 = 5;
        for (let index = arguments; index < 10; index++) {
            let tabla = index * v2;
            console.log(index + " X " + v2 + " = " + (index * v2));
        }
    }
})(4);

console.log(newvec.find(Element => Element > 50 && Element < 70));
const vec2 = (Element) => Element < 20;

((a,b) => {
    let v2 = a;
        for (let index = 0; index <= 10; index++) {
            let tabla = index * v2;
            console.log(index + " X " + v2 + " = " + (index * v2));
        }
})(4,5);


