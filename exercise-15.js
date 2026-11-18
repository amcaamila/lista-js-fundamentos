// 15. Rodízio de São Paulo
const finalPlaca = Number(prompt("Digite o final da placa (0 a 9):"));
const diaSemana = prompt("Digite o dia da semana (segunda, terça, quarta, quinta, sexta):").toLowerCase();
const hora = Number(prompt("Digite a hora (0 a 23):"));

let diaRestrito = false;

switch (finalPlaca) {
  case 1:
  case 2:
    diaRestrito = diaSemana.includes("segunda");
    break;
  case 3:
  case 4:
    diaRestrito = diaSemana.includes("terça") || diaSemana.includes("terca");
    break;
  case 5:
  case 6:
    diaRestrito = diaSemana.includes("quarta");
    break;
  case 7:
  case 8:
    diaRestrito = diaSemana.includes("quinta");
    break;
  case 9:
  case 0:
    diaRestrito = diaSemana.includes("sexta");
    break;
}

const horarioRestrito = (hora >= 7 && hora < 10) || (hora >= 17 && hora < 20);

if (diaRestrito && horarioRestrito) {
  console.log("O carro NÃO pode circular.");
} else {
  console.log("O carro PODE circular.");
}
