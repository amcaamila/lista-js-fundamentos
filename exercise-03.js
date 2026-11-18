// 3. Tempo de download
const tamanhoGB = parseFloat(prompt("Digite o tamanho do arquivo em GB:"));
const velocidadeMbps = parseFloat(prompt("Digite a velocidade da internet em Mbps:"));

const tamanhoMb = tamanhoGB * 8192;
const tempoTotalSegundos = tamanhoMb / velocidadeMbps;

let minutos = Math.floor(tempoTotalSegundos / 60);
let segundos = Math.round(tempoTotalSegundos % 60);

if (segundos === 60) {
  minutos++;
  segundos = 0;
}

console.log(`Tempo estimado: ${minutos} minuto(s) e ${segundos} segundo(s).`);
