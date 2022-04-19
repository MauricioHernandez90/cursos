
//Constructor de objetos de tipo persona
function Persona (nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    }
}


let padre = new Persona("Juan", "Perez", "jperez@gmail.com");
console.log(padre.nombreCompleto()); //Ahora mostrará el nombre completo gracias al metodo nombreCompleto
let madre = new Persona("Maria", "Gomez", "maria@gmail.com");

console.log(padre);
console.log(madre);

//Realizar un cambio en objeto padre
padre.nombre = "Carlos";

console.log(padre);