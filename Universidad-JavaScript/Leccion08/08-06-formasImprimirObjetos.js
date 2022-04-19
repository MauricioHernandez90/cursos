let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "juan@perez.com",
    edad: 28,


    //Metodo
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
}

//concatenar cada valor de cada propiedad

console.log( persona.nombre + ", " + persona.apellido);

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);