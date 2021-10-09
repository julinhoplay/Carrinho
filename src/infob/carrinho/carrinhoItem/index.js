import Cookie from 'js-cookie'
import { useState } from "react";
import Contador from '../contador';
import { Quadrado, RemoverIcone } from "./styled";

export default function CarrinhoItem(props) {
const [produto, setProduto] = useState(props.blabla);

function AlterarQtd(qtd) {
  setProduto({ ...produto, qtd});
  props.Modificar(produto.id, qtd);
}

function remover() {
  props.Remover(produto.id);
}

return (
<Quadrado>

  <div>

    <img className="capa-produto" src={produto.imagem} alt="" />
    <Contador onChange={AlterarQtd} value={produto.qtd} />
    </div>
    <div className="titulo"> {produto.titulo} </div>
    <div className="preco"> <span> Preço Unitario </span> {produto.preco} </div>
    <div className="quantidade"> <span> Quantidade </span> {produto.qtd} </div>
    <div className="remover">  <RemoverIcone onClick={remover} /> </div>
</Quadrado>
);
}
