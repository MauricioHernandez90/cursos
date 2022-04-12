//let autos = new Array ("BMW", "Mercedes Benz", "Volvo");

const autos = ["BMW", "Mercedes Benz", "Volvo"];

console.log(autos);

console.log(autos[0]);

console.log(autos[2]);

for (let i = 0; i < autos.length; i++) {
    console.log(i + " " + autos[i])
}

autos[1] = "MercedesBenz";

console.log(autos[1]);


//Agregar elementos al final del arreglo
autos.push("audi");
console.log(autos);


//Indice
console.log(autos.length);
//Agregamos un elemento al final
autos[autos.length] = "Cadilac";
console.log(autos);

//Agregamos un valor sin importar la posición, sin embargo, no es recomendable.
autos[6] = "Porsche";
console.log(autos);

//Preguntar si estamos trabajando con un arreglo.
console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);