import { useEffect, useState } from 'react'
import styled from "styled-components";


const Quadrado = styled.div`
display: flex;


font: 700 1em Roboto;

& > div {
  margin: 2em 0em;
  flex-grow: 1;
  text-align: center;
}
`



export default function Contador(props) {
const [qtd, setQTD] = useState(props.value);

function acrescentar() {

  if (qtd >= 10)
  return;
  setQTD(qtd + 1)
}

function tirar() {

  if (qtd === 0)
  return;
  setQTD(qtd - 1)
}

useEffect(() => {
  props.onChange(qtd);

}, [qtd])

return (
<Quadrado>
  <div className="Menos" onClick={tirar}> - </div>
  

<div className="quantidade"> {qtd} </div>

<div className="Mais" onClick={acrescentar}> + </div>

</Quadrado>
)
}




