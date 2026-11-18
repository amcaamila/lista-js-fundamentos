// 18. Casa de câmbio
const reais = parseFloat(prompt("Digite o valor em reais (R$):"));
const moeda = prompt("Digite o código da moeda (USD, EUR, ARS, JPY):").toUpperCase();

const valorLiquido = reais * 0.98; // desconto de 2% de taxa
let cotacao = 0;

switch (moeda) {
  case "USD":
    cotacao = 5.50;
    break;
  case "EUR":
    cotacao = 6.00;
    break;
  case "ARS":
    cotacao = 0.0055;
    break;
  case "JPY":
    cotacao = 0.036;
    break;
  default:
    console.log("Moeda inválida.");
}

if (cotacao > 0) {
  const valorRecebido = valorLiquido / cotacao;
  console.log(`Você recebe: ${valorRecebido.toFixed(2)} ${moeda} (já descontada a taxa de 2%).`);
}
