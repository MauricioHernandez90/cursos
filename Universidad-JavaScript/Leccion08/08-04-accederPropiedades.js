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

console.log(persona["apellido"]);

for (propiedad in persona ) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}