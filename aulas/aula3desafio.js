/* Calcular médio e exibir resultado se aprovado ou não */

const nota1 = 7;
const nota2 = 9;
const nota3 = 7;

const media = (nota1+nota2+nota3)/3;

/* Exibir notas e média */

console.log("========= NOTAS DO ALUNO =========");

console.log("A nota 1 é: "+nota1);
console.log("A nota 2 é: "+nota2);
console.log("A nota 3 é: "+nota3);
console.log("A média do semestre é: "+media.toFixed(2));

/* Resultado */

if (media>7) {
    console.log("O aluno foi APROVADO ! (～￣▽￣)～");
} else if (media<5) {
    console.log("O aluno foi REPROVADO ! (* ￣︿￣)");
} else {
    console.log("O aluno está em RECUPERAÇÃO... （︶^︶）");
}

console.log("==================================");

/* Fim */