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

//Modificar propiedad

persona.tel = "380923923";

console.log(persona.tel);

//Agregar propiedad

persona.direccion = "Romanos 22";
console.log(persona.direccion);

//Eliminar propiedad

delete persona.direccion;
console.log(persona);