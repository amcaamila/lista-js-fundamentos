// 12. Prioridade do chamado
const urgencia = Number(prompt("Digite a urgência (1 a 3):"));
const impacto = Number(prompt("Digite o impacto (1 a 3):"));

const soma = urgencia + impacto;

if (urgencia === 3 && impacto === 3) {
  console.log("P1 Crítico");
} else if (soma === 5) {
  console.log("P2 Alto");
} else if (soma === 3 || soma === 4) {
  console.log("P3 Médio");
} else {
  console.log("P4 Baixo");
}
