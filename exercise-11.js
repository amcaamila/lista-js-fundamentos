// 11. Qual plano de celular?
const gbMes = parseFloat(prompt("Quantos GB você usa por mês?"));

const custoPlanoB = gbMes <= 5 ? 30 : 30 + (gbMes - 5) * 3;

if (gbMes > 20) {
  console.log(`O Plano A não serve (limite de 20 GB). O ideal é o Plano B por R$ ${custoPlanoB.toFixed(2)}.`);
} else {
  const custoPlanoA = 55;
  if (custoPlanoA < custoPlanoB) {
    const economia = custoPlanoB - custoPlanoA;
    console.log(`Mais barato: Plano A (R$ ${custoPlanoA.toFixed(2)}). Economia de R$ ${economia.toFixed(2)}.`);
  } else if (custoPlanoB < custoPlanoA) {
    const economia = custoPlanoA - custoPlanoB;
    console.log(`Mais barato: Plano B (R$ ${custoPlanoB.toFixed(2)}). Economia de R$ ${economia.toFixed(2)}.`);
  } else {
    console.log(`Os dois planos custam o mesmo valor: R$ ${custoPlanoA.toFixed(2)} (economia de R$ 0.00).`);
  }
}
