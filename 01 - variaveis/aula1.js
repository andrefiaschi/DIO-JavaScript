/* Programa para calulcar o custo de combustível em uma viagem
*/

let gasPrice = 5.45;
let kmPerLiter = 11.5;
let distance = 250;



let tripCost = (distance/kmPerLiter)*gasPrice;

console.log("Custo total da viagem: R$ "+tripCost.toFixed(2));