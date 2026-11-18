// 26. Carrinho de compras
let quantidadeItens = 0;
let itemMaisCaro = 0;
let total = 0;

while (true) {
  const entrada = prompt("Digite o preço do item (ou 'fim' para encerrar):").toLowerCase();

  if (entrada === "fim") {
    break;
  }

  const preco = parseFloat(entrada);
  if (!isNaN(preco) && preco > 0) {
    quantidadeItens++;
    total += preco;
    if (preco > itemMaisCaro) {
      itemMaisCaro = preco;
    }
  }
}

if (total > 300) {
  total *= 0.90; // 10% de desconto
}

console.log(`Quantidade de itens: ${quantidadeItens}`);
console.log(`Item mais caro: R$ ${itemMaisCaro.toFixed(2)}`);
console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
