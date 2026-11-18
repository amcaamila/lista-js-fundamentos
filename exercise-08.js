// 8. Bilheteria do cinema
const idade = Number(prompt("Digite a idade:"));
const estudante = prompt("É estudante? (s/n)").toLowerCase();
const diaSemana = prompt("Digite o dia da semana:").toLowerCase();

const precoInteira = 40.00;
let valorFinal = precoInteira;

const isTerca = diaSemana.includes("terça") || diaSemana.includes("terca");

if (idade < 12 || idade >= 60 || estudante === "s" || isTerca) {
  valorFinal = precoInteira / 2;
}

console.log(`Valor final do ingresso: R$ ${valorFinal.toFixed(2)}`);
