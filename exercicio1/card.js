const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
];

const produtosContainer = document.getElementById("produtos");

produtos.forEach(produtos => {
    const card = document.createElement("div");
    card.classList.add("card");


    const titulo = document.createElement("h3");
    titulo.textContent = produtos.nome;
    card.appendChild(titulo);

    const preco = document.createElement("p");
    preco.textContent = `Preço: R$ ${(produtos.preco).toFixed(2)}`;
    card.appendChild(preco);

    produtosContainer.appendChild(card);
})

