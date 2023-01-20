
//BREAK Termina el ciclo.
for (let index = 1; index <= 10; index++) {
    if(index % 2 == 0){
        console.log(index);
        break;   
    }
        console.log(index)
}
console.log('Fin del FOR');

//CONTINUE  Salta a la siguiente iteracion sin ejecutar el resto de codigo, por eso solo se imprimen los numeros pares.
for (let index = 0; index <= 10; index++) {
    if(index % 2 != 0){
       continue;  
    }
        console.log(index)
}

//Operador Ternario trabaja con let y var aparte de const
for (let index = 0; index <= 10; index++) {
    let x = (index % 2 == 0) ? 'Par':'Impar';
console.log(x)
        console.log(index+' '+x)
        x = 'Iteracion: ';
        console.log(x + index);
}


inicio:
for (var index = 0; index <= 10; index++) {
    
    
    if(index % 2 != 0){
       continue inicio;  
    }
        console.log(index)
}



