class pessoa {
    nome;
    peso;
    altura;
    imc;
    
    constructor(nome,peso,altura) {
        this.nome = nome;
        this.altura = altura;
        this.imc = peso / (altura*altura);
        this.peso = peso;
    }

    dizerImc() {
        console.log(`O IMC do ${this.nome} é ${this.imc.toFixed(2)}!`);
    }

}

const andre = new pessoa('André',80,1.80);

andre.dizerImc();

const joao = new pessoa('João',85,1.74);

joao.dizerImc();