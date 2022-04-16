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

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

console.log(persona)

console.log(persona.nombreCompleto());