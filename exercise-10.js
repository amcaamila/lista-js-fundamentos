// 10. Margem consignável
const salario = parseFloat(prompt("Digite o salário:"));
const parcela = parseFloat(prompt("Digite o valor da parcela do empréstimo:"));

const parcelaMaxima = salario * 0.30;

if (parcela <= parcelaMaxima) {
  console.log("Aprovado");
} else {
  console.log(`Negado. A parcela máxima permitida seria R$ ${parcelaMaxima.toFixed(2)}.`);
}
