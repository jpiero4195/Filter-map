//Author: Jean Valencia
//fecha: 2024-07-13
/*
Tema: array - every
*/

const numeros = [4,2,6,4,150,5];

//Devuelve verdadero si todos los elementos del arra son pares
const pares=numeros.every(x => {
    return x % 2 == 0
});
console.log("En el array todos los elementos son pares ?",pares);
//console.log(numeros.every((numero) => numero % 2 === 0));