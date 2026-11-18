// 2. Bilhete Único
const saldo = parseFloat(prompt("Digite o saldo do cartão:"));
const tarifa = 5.00;

const viagens = Math.floor(saldo / tarifa);
const sobra = saldo - (viagens * tarifa);

console.log(`Viagens cobertas pelo saldo: ${viagens}`);
console.log(`Quanto sobra: R$ ${sobra.toFixed(2)}`);
