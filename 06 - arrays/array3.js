/* Crie um programa que seja capaz de percorrer uma lista de nũmeros e imprima cada número par encontrado */

let numeros = [1,5,8,2,46,2547,46,4,4.5,235,46,0,678,5,545,3];
numeros.sort(function(a, b){return a-b});

let pares = [];
let impares = [];

for (let index = 0; index < numeros.length; index++) {
   
    if (numeros[index]%2===0) {
        pares.push(numeros[index]);

    } else {
        impares.push(numeros[index]);
    }
    
}

console.log(`==== Nũmeros PARES encontrados ====`);

console.log(pares);

console.log(`=== Nũmeros ÍMPARES encontrados ===`);

console.log(impares);

console.log(`===================================`);