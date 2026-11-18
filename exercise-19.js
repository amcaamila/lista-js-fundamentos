// 19. Conta de luz
const kwh = parseFloat(prompt("Digite o consumo em kWh:"));
const bandeira = prompt("Digite a bandeira (verde, amarela, vermelha1, vermelha2):").toLowerCase();

const tarifaBase = 0.80;
let adicional = 0;

switch (bandeira) {
  case "verde":
    adicional = 0;
    break;
  case "amarela":
    adicional = 0.02;
    break;
  case "vermelha1":
    adicional = 0.04;
    break;
  case "vermelha2":
    adicional = 0.08;
    break;
  default:
    console.log("Bandeira inválida. Considerando bandeira verde.");
}

const total = kwh * (tarifaBase + adicional);
console.log(`Total da conta de luz: R$ ${total.toFixed(2)}`);
