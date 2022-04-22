
//Constructor de objetos de tipo persona
function Persona (nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    }
}

Persona.prototype.tel = '7987987'; //funciona para agregar un atributo a todos los objetos

madre.tel = "2983882"
console.log(madre.tel);

let padre = new Persona("Juan", "Perez", "jperez@gmail.com");
console.log(padre.nombreCompleto()); //Ahora mostrará el nombre completo gracias al metodo nombreCompleto
let madre = new Persona("Maria", "Gomez", "maria@gmail.com");

console.log(padre);
console.log(madre);