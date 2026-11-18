// 4. Troco do caixa
let troco = Math.floor(Number(prompt("Digite um valor inteiro de troco:")));

const notas100 = Math.floor(troco / 100);
troco = troco % 100;

const notas50 = Math.floor(troco / 50);
troco = troco % 50;

const notas20 = Math.floor(troco / 20);
troco = troco % 20;

const notas10 = Math.floor(troco / 10);
troco = troco % 10;

const notas5 = Math.floor(troco / 5);
troco = troco % 5;

const notas2 = Math.floor(troco / 2);
troco = troco % 2;

const moedas1 = troco;

console.log(`Notas de 100: ${notas100}`);
console.log(`Notas de 50: ${notas50}`);
console.log(`Notas de 20: ${notas20}`);
console.log(`Notas de 10: ${notas10}`);
console.log(`Notas de 5: ${notas5}`);
console.log(`Notas de 2: ${notas2}`);
console.log(`Moedas de 1: ${moedas1}`);
