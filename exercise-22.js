// 22. Palíndromo
const palavra = prompt("Digite uma palavra:").toLowerCase();
let invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  invertida += palavra[i];
}

if (palavra === invertida) {
  console.log(`"${palavra}" é um palíndromo.`);
} else {
  console.log(`"${palavra}" não é um palíndromo (invertida: "${invertida}").`);
}
