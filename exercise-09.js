// 9. Saudação pelo horário
const hora = Number(prompt("Digite a hora (0 a 23):"));
const minuto = Number(prompt("Digite o minuto (0 a 59):"));

const horarioValido =
  Number.isInteger(hora) && hora >= 0 && hora <= 23 &&
  Number.isInteger(minuto) && minuto >= 0 && minuto <= 59;

if (!horarioValido) {
  console.log("Horário inválido.");
} else if (hora < 6) {
  console.log("Boa madrugada");
} else if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
