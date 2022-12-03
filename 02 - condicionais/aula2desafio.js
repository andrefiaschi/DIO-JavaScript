/* Calcular valor da viagem escolhendo o tipo de combustivel */

/* Definir valores */

const valorEtanol = 3.4;
const valorGas = 5.7;

const rendEtanol = 10;
const rendGas = 15;

const tipoComb = "Gasolina"

const distancia = 250;

/* Calcular os custos para cada opção */

console.log("A distância da viagem é de "+distancia.toFixed(2)+" Km");

let custoEtanol = (distancia/rendEtanol)*valorEtanol;
let custoGas = (distancia/rendGas)*valorGas;

console.log("O valor gasto com Etanol seria: R$ "+custoEtanol.toFixed(2));
console.log("O valor gasto com Gasolina seria: R$ "+custoGas.toFixed(2));

/* Mostrar a melhor escolha */

if(custoEtanol==custoGas) {
    console.log("Melhor escolha: tanto faz =)");

} else if (custoEtanol<custoGas) {
    console.log("Melhor escolha: Etanol!");
} else {
    console.log("Melhor escolha: Gasolina!");
}

/* Mostrar quanto economizou ou desperdiçou */

let diferenca = custoGas-custoEtanol;

if (tipoComb=="Etanol") {

    console.log("Você escolheu: Etanol")

    if (diferenca>0) {
        console.log("Você economizou: R$ "+diferenca.toFixed(2)+" (～￣▽￣)～");
    } else {
        console.log("Você desperdiçou: R$ "+ (-1*diferenca.toFixed(2))+" ㄟ( ▔, ▔ )ㄏ");
    }
    
} else if (tipoComb=="Gasolina") {

    console.log("Você escolheu: Gasolina")

    if (diferenca<0) {
        console.log("Você economizou: R$ "+(-1*diferenca.toFixed(2))+" (～￣▽￣)～");
    } else {
        console.log("Você desperdiçou: R$ "+diferenca.toFixed(2)+" ㄟ( ▔, ▔ )ㄏ");
    }

} else {
    console.log("Você escolheu: "+tipoComb)
    console.log("Você não escolheu um combustível correto! (* ￣︿￣)");
}

/* FIM */