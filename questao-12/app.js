const produtos = [
  { nome: "Batata", quantidade: 10, preco: 5.0 },
  { nome: "Cebola", quantidade: 1, preco: 0.97 },
  { nome: "Cenoura", quantidade: 3, preco: 2.52 },
  { nome: "Banana", quantidade: 1, preco: 4.20 }
];

const quantidadeTotal = produtos.reduce((total, produto) => {
  return total + produto.quantidade;
}, 0);

console.log("Quantidade total:", quantidadeTotal);