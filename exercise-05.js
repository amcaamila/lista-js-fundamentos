// 5. Custo da viagem
const distancia = parseFloat(prompt("Digite a distância até o destino em km:"));
const consumo = parseFloat(prompt("Digite o consumo do carro em km/l:"));
const precoLitro = parseFloat(prompt("Digite o preço do litro do combustível:"));

const custoPorKm = precoLitro / consumo;
const custoIdaEVolta = (distancia * 2) * custoPorKm;

console.log(`Custo de ida e volta: R$ ${custoIdaEVolta.toFixed(2)}`);
console.log(`Custo por km: R$ ${custoPorKm.toFixed(2)}`);
