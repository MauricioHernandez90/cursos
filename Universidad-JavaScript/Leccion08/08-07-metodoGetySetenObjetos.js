let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "juan@perez.com",
    edad: 28,

    idioma: "es",
    get lang() {
        return this.idioma.toUpperCase();
    },

    get nombreCompleto() {
        return this.nombre + " " + this.apellido
    },
    
    set lang (lang) {
        this.idioma = lang.toUpperCase();
    }

   
}

//metodo antiguo
console.log(persona.nombreCompleto);

console.log(persona.lang);

persona.lang = "en";

console.log(persona.lang);
console.log(persona.idioma);

