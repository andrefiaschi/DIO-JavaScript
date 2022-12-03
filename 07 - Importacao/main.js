const { gets, print } = require('./funcoes-auxiliares');

/* Receber 5 número e mostrar qual é o maior número */

const numeros = [];
let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    
    const sort = gets();
    if (sort > maiorValor) {
        maiorValor = sort;
    }
    
}

print(maiorValor);