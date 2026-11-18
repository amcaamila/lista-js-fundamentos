// 24. Poupança programada
const depositoMensal = parseFloat(prompt("Digite o valor do depósito mensal:"));
const meses = Number(prompt("Digite a quantidade de meses:"));

let saldo = 0;
const totalInvestido = depositoMensal * meses;

for (let mes = 1; mes <= meses; mes++) {
  saldo = (saldo + depositoMensal) * 1.005;
  console.log(`Mês ${mes}: R$ ${saldo.toFixed(2)}`);
}

const totalRendido = saldo - totalInvestido;
console.log(`Total rendido no final: R$ ${totalRendido.toFixed(2)}`);
