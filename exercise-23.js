// 23. Raio-x da frase
const frase = prompt("Digite uma frase:").toLowerCase();

let vogais = 0;
let consoantes = 0;
let espacos = 0;
let numeros = 0;

for (let i = 0; i < frase.length; i++) {
  const char = frase[i];

  if (char === " ") {
    espacos++;
  } else if (char >= "0" && char <= "9") {
    numeros++;
  } else if (char >= "a" && char <= "z") {
    switch (char) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vogais++;
        break;
      default:
        consoantes++;
    }
  }
}

console.log(`Vogais: ${vogais}`);
console.log(`Consoantes: ${consoantes}`);
console.log(`Espaços: ${espacos}`);
console.log(`Números: ${numeros}`);
