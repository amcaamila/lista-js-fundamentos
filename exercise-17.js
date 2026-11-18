// 17. Rastreio do delivery
const status = prompt("Digite a letra do status (P, A, S, E, C):").toUpperCase();

switch (status) {
  case "P":
    console.log("Status: Pendente");
    break;
  case "A":
    console.log("Status: Aceito");
    break;
  case "S":
    console.log("Status: Saiu para entrega");
    break;
  case "E":
    console.log("Status: Entregue");
    break;
  case "C":
    console.log("Status: Cancelado");
    break;
  default:
    console.log("Status inválido");
}

switch (status) {
  case "P":
  case "A":
    console.log("O pedido AINDA PODE ser cancelado.");
    break;
  case "S":
  case "E":
  case "C":
    console.log("O pedido NÃO PODE mais ser cancelado.");
    break;
}
