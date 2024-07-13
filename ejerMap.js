//Author: Jean Valencia
//fecha: 2024-07-13
/*
Tema: array - map
*/

const vector=[2,4,6,8,10,11,12];

//Devuelva el vector multiplicado cada uno de sus elemento por 10
const vecPor10=vector.map(x=>x*10);
console.log("Vector multiplicado por 10",vecPor10);

//con la siguiente arrar de objetos:

const personas=[
    {nombres:"Juan Alcivar",edad:19},
    {nombres:"Ana Cuesta",edad:30},
    {nombres:"Emilio Centeno",edad:40},
    {nombres:"Jimena Castro",edad:15},
    {nombres:"Pedro Ponce",edad:9}
];
//Devuelva un array de esta forma
//{ nombres: "Juan Alcivar", edad:19, mensaje:"Puede votar"}
//{ nombres: "Ana Cuesta", edad:17, mensaje:"NO puede votar"}
//la persona peude votar si la edad es mayor o igual que 18
const personasVotantes=personas.map(x=>{
    if(x.edad>=18){
        return {nombres:x.nombres,edad:x.edad,mensaje:"Puede votar"};
    }else{
        return {nombres:x.nombres,edad:x.edad,mensaje:"NO puede votar"};
    }
});
console.log("Personas que pueden votar",personasVotantes);

//operador de propagacion
const res2=personas.map( persona => {
    return {...persona, mensaje: persona.edad >= 18 ? "Puede votar" : "No puede votar"};
});
console.log("Personas que pueden votar",res2);