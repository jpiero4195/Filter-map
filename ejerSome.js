//Author: Jean Valencia
//fecha: 2024-07-13
/*
Tema: array - some
*/
const vector=[10,3,17,6,-6,810,3];
//El arrar tiene elmento negativos?
const res=vector.some(item=>item<0);
console.log("En el array exiten elemnto negativo ?",res);
//console.log(vector.some((elemento)=>elemento<0));

//En la siguiente matriz, determine si todos los elemntos son positivos
const matriz=[[1,2,-3], [4,5,6], [7,8,9]];
/*
1 2 3
4 5 6
7 8 9
*/
const matrizPos = matriz.every(areglo=>{
    return areglo.every(x=>{
        return x>0;
    });
});


console.log("Todos los elemntos son positivos ?",matrizPos);

//de otra forma
const res2=matriz.every(item=>item.every(elemento=>elemento>0));
console.log("Todos los elemntos son positivos ?",res2);
