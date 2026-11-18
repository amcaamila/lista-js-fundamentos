// 29. O computador adivinha
let min = 1;
let max = 100;
let tentativas = 0;
let acertou = false;

while (!acertou && min <= max) {
  const chute = Math.floor((min + max) / 2);
  tentativas++;

  const resposta = prompt(`Meu chute é ${chute}. O seu número é 'maior', 'menor' ou 'acertou'?`).toLowerCase();

  if (resposta === "acertou") {
    acertou = true;
    console.log(`Acertei o número ${chute} em ${tentativas} tentativa(s)!`);
  } else if (resposta === "maior") {
    min = chute + 1;
  } else if (resposta === "menor") {
    max = chute - 1;
  }
}
