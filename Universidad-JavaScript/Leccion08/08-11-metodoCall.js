let persona1 = {
    nombre: "Juan",
    apellido: "Perez",

    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
}

let porsona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

console.log(persona1.nombreCompleto());
persona1.nombreCompleto.apply( persona2 )
