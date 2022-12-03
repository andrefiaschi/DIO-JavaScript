const preco = 150;
const forma = 3;

/* Formas: 1 - PIX
           2 - Débito
           3 - Crédito
*/

console.log("===================== PAGAMENTO =====================");

console.log("Valor do produto: R$ "+preco.toFixed(2));


if (forma==1) {

    console.log("Forma de pagamento: PIX (10% off)");

    let valorPago = preco*0.9;
    console.log("Valor a ser pago: R$ "+valorPago.toFixed(2));

} else if (forma==2) {

    console.log("Forma de pagamento: Débito (10% off)");

    let valorPago = preco*0.9;
    console.log("Valor a ser pago: R$ "+valorPago.toFixed(2));

} else if (forma==3) {

    const parcelas = 5;

    if (parcelas<=2) {

        console.log("Forma de pagamento: Crédito");

        let valorPago = preco;
        let valorParcela = valorPago/parcelas;
        console.log("O valor a ser pago é: "+parcelas+" parcela(s) de R$ "+valorParcela.toFixed(2));
        console.log("O valor total é: R$ "+valorPago.toFixed(2));

    } else if (parcelas>2) {

        console.log("A forma de pagamento é: Crédito (juros de 10%)");

        let valorPago = preco*1.1;
        let valorParcela = valorPago/parcelas;
        console.log("O valor a ser pago é: "+parcelas+" parcelas de R$ "+valorParcela.toFixed(2));
        console.log("O valor total é: R$ "+valorPago.toFixed(2));

    }

} else {

    console.log("A forma de pagamento é inválida!");

}

console.log("=====================================================");