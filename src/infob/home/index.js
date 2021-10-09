import { Quadrado } from "./styled";

import Produto from "../produto";
import { useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  function listar() {
    const r = [
      {
        id: 1,
        imagem:
          "https://cf.shopee.com.br/file/211802ddef8e8576d83b76ebf2e591d6",
        titulo: "Bolsa Louis Vuitton",
        preco: "R$ 1.149,90",
        descricao: "Mochila cara demais",
        especificacoes: "Bolsa muito Bonita e cara para você usar apenas na sua escola"
      },
      {
        id: 2,
        imagem:
          "https://cf.shopee.com.br/file/9ea773bbb68a9f7320ac0db9495bcb85",
        titulo: "Camiseta Masculina Louis Vuitton",
        preco: "R$ 800,00",
        descricao: "Camiseta bonita demais",
        especificacoes: "Camiseta bonita demais para sair com sua crush"
      },
      {
        id: 3,
        imagem:
          "https://closetcare.com.br/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/i/m/img_6386_1_2.jpg",
        titulo: "Sapato Masculino Louis Vuitton",
        preco: "R$ 2500,00",
        descricao: "Sapato Top",
        especificacoes: "Um belo sapato social para usar no casamento da sua sogra"
      }
    ];
    setProdutos(r);
  }

  return (
    <Quadrado>
      <h1> OLA PETER </h1>
      <br />

      <div class="botao1">
        {" "}
        <button onClick={listar}> Listar </button>{" "}
      </div>
      <div className="produtos-lista">
        {produtos.map((item) => (
          <Produto blabla={item} />
        ))}
      </div>
    </Quadrado>
  );
}
