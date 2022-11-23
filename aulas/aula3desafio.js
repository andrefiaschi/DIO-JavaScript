/* Calcular médio e exibir resultado se aprovado ou não */

const nota1 = 8;
const nota2 = 10;
const nota3 = 7;

const media = (nota1+nota2+nota3)/3;

/* Exibir notas e média */

console.log("========= NOTAS DO ALUNO =========");

console.log("A nota 1 é: "+nota1);
console.log("A nota 2 é: "+nota2);
console.log("A nota 3 é: "+nota3);
console.log("A média do semestre é: "+media.toFixed(2));

/* Resultado */
console.log("=========== RESULTADO ============");

if (media>7 && media<=10) {
    console.log("O aluno foi APROVADO ! (～￣▽￣)～");
} else if (media<5) {
    console.log("O aluno foi REPROVADO ! (* ￣︿￣)");
} else if (media<=7 && media >=5) {
    console.log("O aluno está em RECUPERAÇÃO... （︶^︶）");
} else {
    console.log("Deu algo errado! Confira as notas... O.O");
}

console.log("==================================");

/* Fim */