// 21. Escada de blocos (sem usar repeat)
const n = Number(prompt("Digite a altura N da escada:"));

for (let linha = 1; linha <= n; linha++) {
  let resultado = "";

  for (let espaco = 1; espaco <= n - linha; espaco++) {
    resultado += " ";
  }

  for (let bloco = 1; bloco <= linha; bloco++) {
    resultado += "#";
  }

  console.log(resultado);
}
