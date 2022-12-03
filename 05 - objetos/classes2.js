/* 
    1 - Crie uma classe para representar carros.
    Marca, cor e gasto médio de comb.
    Crie um método que, dado a quantidade de quilometros e o preco de comb, 
    nos de o valor gasto em reais. 
    
*/

class carro {
    marca;
    cor;
    consMedio;

    constructor(marca,cor,consMedio) {
        this.marca = marca;
        this.cor = cor;
        this.consMedio = consMedio;
    
    }

    gastoTotal(distancia,precoLitro) {
        const totalGasto = (distancia/this.consMedio)*precoLitro;
        console.log(`O carro é um ${this.marca}, na cor ${this.cor} e consumo médio de ${this.consMedio} Km/L.`);
        console.log(`A distância de viagem é ${distancia} km e o preço do combustível é de R$ ${[precoLitro]}.`);
        console.log(`O gasto total da viagem é R$ ${totalGasto.toFixed(2)}.`);
    }
}

const peugeot = new carro('Peugeot','Branco',13);

peugeot.gastoTotal(450,4.5);

const citroen = new carro('Citroen','Preto', 15);

citroen.gastoTotal(250,5);