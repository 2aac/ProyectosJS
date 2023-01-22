let ans;
let str = '6545+8753'

let valor = [...str];
console.log(valor);
console.log();
valor.pop();
console.log(valor.toString());
console.log(valor.join(''));

let display = document.getElementById('dis').value;

let agregar = (x) => {
    let boton = document.getElementById('dis');
    boton.value += x;
    lastnum = x;
}

let borrar = () => {
    let display = document.getElementById('dis');
    display.value = null;
}

let porcentaje = () => {

}

let exponente = () => {
    let display = document.getElementById('dis').value;
    let arreglo = display.split('^');
    let exp = Math.pow(arreglo[0], arrelgo[1]);
    display.value = exp;
}

let del = () => {
    let cadena = document.getElementById('dis');
    let algo = cadena.value;
    cadena.value = cadena.value.slice(0, -1);
}

let lastresult = () => {
    let display = document.getElementById('dis');
    if (ans != undefined) {

        if (display.value != null) {
            display.value += ans;
        } else {
            display.value = ans;
        }
    }
}

let resultado = () => {
    let display = document.getElementById('dis');
    let a = display;
    try {
        display.value = eval(a.value);
        ans = display.value;
    } catch {
        display.value = 'Error';
    }
}
