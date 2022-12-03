const preco = 150;
const forma = 3;
let parcelas = 3;

/* Formas: 1 - PIX
           2 - Débito
           3 - Crédito
*/

function validaForma (forma) {
    if (forma==1) {
        parcelas = 1;
        return "Forma de pagamento: PIX (15% off)";
    
    } else if (forma==2) {
        parcelas = 1;
        return "Forma de pagamento: Débito (10% off)";
        
    } else if (forma==3) {
        
        return "Forma de pagamento: Crédito (juros 10% acima de 2 parcelas)";
        
    } else {
        parcelas = 1;
        return "Forma de pagamento: Inválida";
        
    } 
}

function taxa(forma,parcelas) {
    if (forma==1) {
        return 0.85;
    } else if (forma==2) {
        return 0.9;
    } else if (forma==3 && parcelas<=2) {
        return 1;
    } else if (forma==3 && parcelas>=3) {
        return 1.1;
    } else {
        return 1;
    }
}

function calcValor (preco,taxa) {

    return (preco * taxa).toFixed(2);

}

function calcParc (valorFinal,parcelas) {

    return (valorFinal/parcelas).toFixed(2);

}

console.log("===================== PAGAMENTO =====================");

console.log("Valor do produto: R$ "+preco.toFixed(2));

console.log(validaForma(forma));

console.log("Valor final do produto: R$ "+calcValor(preco,taxa(forma,parcelas)));

if (parcelas>=2) {
    console.log("Serão "+parcelas+" parcelas de R$ "+calcParc(calcValor(preco,taxa(forma,parcelas)),parcelas));
}

console.log("=====================================================");