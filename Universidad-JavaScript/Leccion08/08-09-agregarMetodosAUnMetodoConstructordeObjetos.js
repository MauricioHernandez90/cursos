
//Constructor de objetos de tipo persona
function Persona (nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    }
}
Persona.prototype.tel = '7987987'; 

console.log(madre.tel);

let padre = new Persona("Juan", "Perez", "jperez@gmail.com");
console.log(padre.nombreCompleto()); //Ahora mostrarĂ¡ el nombre completo gracias al metodo nombreCompleto
let madre = new Persona("Maria", "Gomez", "maria@gmail.com");

console.log(padre);
console.log(madre);

//Realizar un cambio en objeto padre
padre.nombre = "Carlos";

console.log(padre);
console.log(madre);

let miObjeto = new Object();
let miObjeto2= {};

let miCadena1 = new String ( "hola" );
let miCadena2 = 1;

let miBoolean = new Boolean(false);

let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){

};