/* Crie um programa que, dado um número, imprima a sua tabuada. */

let numero = 7;
let tabuada = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(`===== Tabuada de ${numero} =====`); 

for (let index = 0; index < tabuada.length; index++) {
    const multi = numero * tabuada[index] 
      
    console.log(`${numero} x ${tabuada[index]} = ${multi}`);
    
}

console.log(`========================`);