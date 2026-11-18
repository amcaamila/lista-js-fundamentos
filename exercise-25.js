// 25. Apuração da eleição do grêmio
const totalVotos = Number(prompt("Digite a quantidade de votos:"));

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let nulos = 0;

for (let i = 1; i <= totalVotos; i++) {
  const voto = Number(prompt(`Voto ${i} (1, 2, 3 para candidatos ou 0 para nulo):`));
  if (voto === 1) {
    candidato1++;
  } else if (voto === 2) {
    candidato2++;
  } else if (voto === 3) {
    candidato3++;
  } else if (voto === 0) {
    nulos++;
  }
}

console.log(`Candidato 1: ${candidato1}`);
console.log(`Candidato 2: ${candidato2}`);
console.log(`Candidato 3: ${candidato3}`);
console.log(`Nulos: ${nulos}`);

const maiorVotacao = Math.max(candidato1, candidato2, candidato3);
let qtdVencedores = 0;
if (candidato1 === maiorVotacao) qtdVencedores++;
if (candidato2 === maiorVotacao) qtdVencedores++;
if (candidato3 === maiorVotacao) qtdVencedores++;

if (qtdVencedores > 1) {
  console.log("Houve empate!");
} else if (candidato1 === maiorVotacao) {
  console.log("Vencedor: Candidato 1");
} else if (candidato2 === maiorVotacao) {
  console.log("Vencedor: Candidato 2");
} else {
  console.log("Vencedor: Candidato 3");
}
