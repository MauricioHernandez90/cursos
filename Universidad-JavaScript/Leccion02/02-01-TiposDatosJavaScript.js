//Tipo de datos String
var nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 2234;
console.log(numero);
console.log(typeof numero);

//Tipo de dato objeto
var objeto = {
    nombre : "Carlos Mauricio",
    domicilio : "Calle granola 1234",
    telefono : "7639271632"
}

console.log(objeto);
console.log(typeof objeto)

//Tipo de dato boleano
var bandera = true;
console.log(typeof bandera);

//Tipo de dato funcion
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato simbolo
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo de dato clase (las clases son funciones)
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato indefinido
var x;
console.log(x);
console.log(typeof x);

//Tipo de dato nulo (ausencia de valor)
var y = null;
console.log(y);
console.log(typeof y);

//Tipo de dato arreglo (array)
var autos = ["BMW", "Audo", "Volvo"];
console.log(autos);
console.log(typeof autos);

//Tipo de dato de cadena vacia
var z = "";
console.log(z);
console.log(typeof z);