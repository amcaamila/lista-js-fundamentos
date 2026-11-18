// 30. Desafio integrador: máquina de snacks
let estoqueA1 = 3; // Água - R$ 3,50
let estoqueA2 = 2; // Refrigerante - R$ 6,00
let estoqueB1 = 2; // Salgadinho - R$ 7,50
let estoqueB2 = 1; // Chocolate - R$ 5,00

let faturamentoTotal = 0;
let vendasRealizadas = 0;

while (true) {
  const codigo = prompt(
    `MÁQUINA DE SNACKS
` +
    `A1 - Água: R$ 3,50 (Estoque: ${estoqueA1})
` +
    `A2 - Refrigerante: R$ 6,00 (Estoque: ${estoqueA2})
` +
    `B1 - Salgadinho: R$ 7,50 (Estoque: ${estoqueB1})
` +
    `B2 - Chocolate: R$ 5,00 (Estoque: ${estoqueB2})

` +
    `Digite o código do produto ou 'sair':`
  ).toUpperCase();

  if (codigo === "SAIR") {
    break;
  }

  let produto = "";
  let preco = 0;
  let disponivel = false;

  switch (codigo) {
    case "A1":
      produto = "Água";
      preco = 3.50;
      disponivel = estoqueA1 > 0;
      break;
    case "A2":
      produto = "Refrigerante";
      preco = 6.00;
      disponivel = estoqueA2 > 0;
      break;
    case "B1":
      produto = "Salgadinho";
      preco = 7.50;
      disponivel = estoqueB1 > 0;
      break;
    case "B2":
      produto = "Chocolate";
      preco = 5.00;
      disponivel = estoqueB2 > 0;
      break;
    default:
      console.log("Código inválido.");
      continue;
  }

  if (!disponivel) {
    console.log(`Produto esgotado: ${produto}.`);
    continue;
  }

  let valorInserido = 0;
  while (valorInserido < preco) {
    const falta = preco - valorInserido;
    const moedaOuNota = parseFloat(
      prompt(`${produto} custa R$ ${preco.toFixed(2)}. Falta R$ ${falta.toFixed(2)}. Insira o dinheiro:`)
    );
    if (!isNaN(moedaOuNota) && moedaOuNota > 0) {
      valorInserido += moedaOuNota;
    }
  }

  const troco = valorInserido - preco;

  if (codigo === "A1") estoqueA1--;
  else if (codigo === "A2") estoqueA2--;
  else if (codigo === "B1") estoqueB1--;
  else if (codigo === "B2") estoqueB2--;

  faturamentoTotal += preco;
  vendasRealizadas++;

  console.log(`Venda concluída: ${produto}. Troco: R$ ${troco.toFixed(2)}`);
}

console.log(`Máquina desligada. Vendas feitas: ${vendasRealizadas} | Faturamento total: R$ ${faturamentoTotal.toFixed(2)}`);
