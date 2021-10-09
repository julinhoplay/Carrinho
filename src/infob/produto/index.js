import { Link } from "react-router-dom";
import { Quadrado } from "./styled";

export default function Produto(props) {
  return (
    <Quadrado>
      <img className="capa_produto" src={props.blabla.imagem} alt="" />
      <div className="titulo_produto"> {props.blabla.titulo} </div>
      <div className="preco_produto"> {props.blabla.preco} </div>

      <Link
        to={{
          pathname: "/detalhe",
          state: props.blabla
        }}>
        <button> Ver Detalhes </button>
      </Link>
    </Quadrado>
  )
}
