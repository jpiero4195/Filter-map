//Author: Jean Valencia
//fecha: 2024-07-13
/*
Tema: array - filter
*/

const vector=[2,4,6,-7,10,-3,-1,5];
let aux=[];
//Muestra los elementos positivos
//Programación estructurada:
for (let k=0; k<vector.length; k++){
    if (vector[k]>0){
        aux.push(vector[k]);
    }
}
console.log("Array de solo positivo (Prog. estructurada)",aux);

//Progamación funcional - forma normal
const res = vector.filter(item=>{ return item>0;});
console.log("Array de solo positivo (Prog. funsional)",res);

//Progamación funcional - forma simplificada
const res2 = vector.filter(item=>item>0);
console.log("Array de solo positivo (Prog. Funsional) simplificada",res2);

//usando la palabra funcion
const res3 = vector.filter(function(x){return x>0});
console.log(res3);

//Separa la función
function EsPositivo(x){
    return x>0;
}
const res4 = vector.filter(EsPositivo);
console.log(res4);