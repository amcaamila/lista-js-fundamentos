// 20. Agenda de horários
for (let hora = 8; hora <= 12; hora++) {
  for (let minuto = 0; minuto < 60; minuto += 15) {
    if (hora === 12 && minuto > 0) {
      break;
    }
    const hh = String(hora).padStart(2, "0");
    const mm = String(minuto).padStart(2, "0");
    console.log(`${hh}:${mm}`);
  }
}
