// 28. Quando o dinheiro dobra?
const valorInvestido = parseFloat(prompt("Digite o valor investido:"));
const taxaPercentual = parseFloat(prompt("Digite a taxa de rendimento mensal (%):"));

const taxa = taxaPercentual / 100;
let saldo = valorInvestido;
let meses = 0;

while (saldo < valorInvestido * 2) {
  saldo += saldo * taxa;
  meses++;
}

console.log(`São necessários ${meses} meses para o valor dobrar (Saldo final: R$ ${saldo.toFixed(2)}).`);
