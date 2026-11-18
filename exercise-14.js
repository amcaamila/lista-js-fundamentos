// 14. Entrada à prova de erro
const entrada = prompt("Digite um número:");

// Teste de comparação com null:
console.log("entrada == null:", entrada == null);
console.log("entrada === null:", entrada === null);

if (entrada === null) {
  console.log("Operação cancelada");
} else if (entrada.trim() === "") {
  console.log("Nada foi digitado");
} else {
  const numero = Number(entrada);
  if (isNaN(numero)) {
    console.log("Valor inválido");
  } else {
    console.log(`O dobro é: ${numero * 2}`);
  }
}

/*
  O que mudou entre == e === com null:
  - Quando o usuário clica em Cancelar no prompt(), o retorno é estritamente null,
    então tanto (null == null) quanto (null === null) dão true.
  - Porém, se o valor testado fosse undefined, (undefined == null) retornaria true
    por causa da conversão automática de tipos (igualdade frouxa), enquanto
    (undefined === null) retorna false porque exige o mesmo tipo e valor (igualdade estrita).
*/
