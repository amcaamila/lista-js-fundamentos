// 27. Bateria do celular
const gastoPorHora = parseFloat(prompt("Digite quanto % a bateria gasta por hora:"));

let bateria = 100;
let horas = 0;
let horaEconomia = null;

while (bateria > 0) {
  horas++;
  const consumoAtual = bateria <= 15 ? gastoPorHora / 2 : gastoPorHora;
  bateria -= consumoAtual;

  if (bateria <= 15 && horaEconomia === null) {
    horaEconomia = horas;
  }
}

if (horaEconomia !== null) {
  console.log(`Modo economia ligou na ${horaEconomia}ª hora.`);
} else {
  console.log("O modo economia não chegou a ser ativado.");
}
console.log(`A bateria acabou em ${horas} hora(s).`);
