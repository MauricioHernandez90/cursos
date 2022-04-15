//Declaración tipo expresión
let x = function (a, b) {
    
    console.log(arguments[0]);
    console.log(arguments[1]);

    return a + b
};

resultado = x(1, 2);

console.log(resultado);