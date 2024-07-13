//Author: Jean Valencia
//fecha: 2024-07-13
/*
Tema: array - reduce
*/

const numero=[10,20,30,1,2,3,4,69,70,71];
//Realice la sumatoria de los elemntos del array
const suma=numero.reduce((acumulador,valorActual)=>{
    return acumulador+valorActual;
},0);
console.log("La sumatoria de los elementos del vector es: ",suma);

//con el siguiente vector, devuelva el producto de sus elementos
const producto=numero.reduce((acumulador,valorActual)=>{
    return acumulador*valorActual;
},1);
console.log("El producto de los elementos del vector es: ",producto);

//con los siguientes datos
const estudiantes=[
    {
        nombre:"Juan Angulo",
        sexo:"m",
        asignatura:{
            nom:"Progmacion I",
            notaParcial:[30,32,45],
            notaFinal:35
        }
    },
    {
        nombre:"Galo Alvarado",
        sexo:"m",
        asignatura:{
            nom:"Progmacion I",
            notaParcial:[30,30,30],
            notaFinal:35
        }
    },
    {
        nombre:"Juan Angulo",
        sexo:"m",
        asignatura:{
            nom:"Progmacion I",
            notaParcial:[40,32,45],
            notaFinal:35
        }
    }
]
//calcule el promedio de la notaParcial, debe usar reduce

const promedio=estudiantes.map(est => {
    return {
        nombre: est.nombre,
        sexo: est.sexo,
        asignatura:{
            nom: est.asignatura.nom,
            notaParcial:est.asignatura.notaParcial.reduce((ac,va)=>{
                return ac+va;
            },0)/est.asignatura.notaParcial.length
        }
    }
});

console.log("El promedio es:",promedio);

const promedio2=estudiantes.reduce((ac,va)=>{
    return ac+va.asignatura.notaParcial.reduce((ac,va)=>{
        return ac+va;
    },0)/va.asignatura.notaParcial.length;
},0)/estudiantes.length;
console.log("El promedio es:",promedio2.toFixed(2));

