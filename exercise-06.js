// 6. Etanol ou gasolina?
const etanol = parseFloat(prompt("Digite o preço do litro do etanol:"));
const gasolina = parseFloat(prompt("Digite o preço do litro da gasolina:"));

const relacaoPercentual = (etanol / gasolina) * 100;
const diferencaPercentual = Math.abs(100 - relacaoPercentual);

if (etanol <= gasolina * 0.70) {
  console.log(`Abasteça com Etanol (custa ${relacaoPercentual.toFixed(2)}% da gasolina — diferença de ${diferencaPercentual.toFixed(2)}%).`);
} else {
  console.log(`Abasteça com Gasolina (o etanol custa ${relacaoPercentual.toFixed(2)}% da gasolina — diferença de ${diferencaPercentual.toFixed(2)}%).`);
}
