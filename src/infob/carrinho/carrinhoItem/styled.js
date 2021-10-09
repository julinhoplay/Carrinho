import styled from 'styled-components'


const Quadrado = styled.div`
display: flex;
align-items: center;
width: 60%;

font: 700 1em Roboto;

& > div {
  margin: 2em 0em 5em 5em;
  flex-grow: 1;
  text-align: center;
}

span {
  font-weight: 400 !important;
}

img {
  width: 7em;
  height: auto;
}

.remover img {
  width: 3em;
  cursor: pointer;
}

.capa-produto {
  margin-right: 3em;
}

.preco {
  font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  font-weight: bold;
  
}


.titulo {
  font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  font-weight: bold;
}

.quantidade {
  font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  font-weight: bold;
}




`

const RemoverIcone = styled.img`
content: url("/assets/images/delete.svg");
`

export { Quadrado, RemoverIcone }