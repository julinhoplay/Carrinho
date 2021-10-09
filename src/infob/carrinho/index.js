import { Link } from "react-router-dom";
import { Quadrado } from "./styled";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import CarrinhoItem from "./carrinhoItem";

export default function Carrinho() {
  const [produtos, setProdutos] = useState([]);

  useEffect(carregamento, []);

  function carregamento() {
    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined ? JSON.parse(carrinho) : [];
    setProdutos(carrinho);
  }

  function removerProduto(id) {
    let carrinho = produtos.filter(item => item.id !== id);
    Cookie.set("carrinho", JSON.stringify(carrinho));

    setProdutos([...carrinho]);
  }

  function qtdAlterada(id, qtd) {
    let ProdutoAlterado = produtos.filter(item => item.id === id)[0];
    ProdutoAlterado.qtd = qtd;

    Cookie.set('carrinho', JSON.stringify(produtos));
  }

  return (
    <Quadrado>
      <h1> Seu Carrinho </h1>
      <Link to="/"> Voltar </Link>
      <div className="coisas">
        {produtos.map((item) => (
          <CarrinhoItem
            key={item.id}
            blabla={item}
            Modificar={qtdAlterada}
            Remover={removerProduto}
          />
        ))}
      </div>
    </Quadrado>
  );
}
