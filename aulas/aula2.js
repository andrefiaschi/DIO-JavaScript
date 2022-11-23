/* Aula 2 sobre condicionais
*/

const numero = 10;

console.log("O número é: "+numero);

const numeroPar = (numero % 2) === 0;

if (numero == 0) {
    console.log("O número "+numero+" é inválido.");
} else if (numeroPar) {
    console.log("O número "+numero+" é par!");
} else {
    console.log("O número "+numero+" é ímpar!");
}