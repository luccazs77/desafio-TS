interface Produto {
  nome: string;
  preco: number;
}

const produtos: Produto[] = [
  { nome: 'Arroz', preco: 30 },
  { nome: 'Feijao', preco: 55 },
  { nome: 'Batata', preco: 42 },
  { nome: 'Pera', preco: 75 },
];

// Filtrar produtos com preço menor que R$50
const produtosFiltrados = produtos.filter(produto => produto.preco < 50);
console.log(produtosFiltrados);

// 10% de desconto em todos os produtos
const produtosComDesconto = produtos.map(produto => ({ ...produto, preco: produto.preco * 0.9 }));
console.log(produtosComDesconto);

// Preço médio dos produtos
const media = produtos.reduce((accumulator, produto) => {
  return accumulator + produto.preco;
}, 0) / produtos.length;
console.log(media);

// Encontrar o produto mais caro
const produtoMaisCaro = produtosComDesconto.reduce((accumulator, produto) =>
  produto.preco > accumulator.preco ? produto : accumulator
);
console.log(produtoMaisCaro);

// Lista apenas com os nomes dos produtos
const nomesDosProdutos = produtos.map(produto => produto.nome);
console.log(nomesDosProdutos);

