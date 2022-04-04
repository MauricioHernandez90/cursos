let a = 3, b = 2, c = 3;

//Valores iguales
let z = a == c; //Se revisa el valor sin importar el tipo
console.log(z);

z = a === c; //Se revisa el valor pero tambien se revisan los tipos
console.log(z);

//valores diferentes
z = a != c; //Revisa el valor sin importat el tipo
console.log(z);

z = a !==c; //Revisa el valor pero también los tipos
console.log(z);