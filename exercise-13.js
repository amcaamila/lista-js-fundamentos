// 13. Nota com bônus de presença
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const frequencia = parseFloat(prompt("Digite a frequência (%):"));

if (frequencia < 75) {
  console.log("Reprovado direto por falta.");
} else {
  let media = (nota1 + nota2) / 2;
  if (frequencia > 90) {
    media = Math.min(10, media + 0.5);
  }
  const resultado = media >= 6 ? "Aprovado" : "Reprovado";
  console.log(`Média final: ${media.toFixed(2)} - ${resultado}`);
}
