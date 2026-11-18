// 1. Racha da conta
const valorConta = parseFloat(prompt("Digite o valor da conta:"));
const pessoas = Number(prompt("Digite o número de pessoas:"));
const taxaServico = prompt("Vai ter os 10% de serviço? (s ou n)").toLowerCase();

const total = taxaServico === "s" ? valorConta * 1.10 : valorConta;
const valorPorPessoa = total / pessoas;

console.log(`Total da conta: R$ ${total.toFixed(2)}`);
console.log(`Cada pessoa paga: R$ ${valorPorPessoa.toFixed(2)}`);
