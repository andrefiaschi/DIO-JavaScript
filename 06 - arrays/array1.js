const notas = [];

notas.push(5);
notas.push(7);
notas.push(9);
notas.push(2);
notas.push(9);
notas.push(10);
notas.push(8);

console.log(notas.length);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    
    soma = soma + notas[i];
}

const media = soma/notas.length;

console.log(media.toFixed(2));