let x = 10;
console.log(x.length);

let persona ={
    name:'Moises',
    lastName:'Garcia',
    email:'moises@gmail.com',
    age: 21,
    registered: false,
    completeName:function() {
        let nameC = this.name +" "+ this.lastName;
        return nameC;
    },
    datoscompletos: function(){
        let cc=this.name +" "+this.lastName+" "+this.email+" "+this.age+" years";
        return cc;
    },
    inexistente: function(){
        return'No existe registro';
    }
}
let Existe =(persona.registered) ? persona.completeName(): persona.inexistente;
console.log(Existe());
Existe =(persona.registered) ? persona.completeName: persona.inexistente();
console.log(Existe);
//Los () nos regresan el valor de la funcion, sin ellos pasamos la funcion como tal
console.log(persona.name, persona.lastName, persona.age+' years')

console.log(persona.completeName());
console.log(persona.datoscompletos());
//funcion o metodo es lo mismo



