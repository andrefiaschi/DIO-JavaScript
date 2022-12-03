class pessoa {

    nome;
    idade;
    altura;
    anoNascimento;

    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.anoNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}!`);
    }

}

function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}!`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}!`);
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}!`);
    }
}


const andre = new pessoa('André Fiaschi',34,180);

const renan = new pessoa('Renan Fiaschi',34,170);

andre.descrever();
renan.descrever();


compararPessoas(andre,renan);