// 7. Frete da loja virtual
const valorCompra = parseFloat(prompt("Digite o valor da compra:"));
const peso = parseFloat(prompt("Digite o peso do pacote em kg:"));

let frete = 0;

if (valorCompra > 250) {
  frete = 0;
} else if (peso <= 1) {
  frete = 15;
} else if (peso <= 5) {
  frete = 25;
} else {
  frete = 25 + (peso - 5) * 4;
}

console.log(`Valor do frete: R$ ${frete.toFixed(2)}`);
