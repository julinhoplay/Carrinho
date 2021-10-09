import styled from "styled-components";

const Quadrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3em;
  background-color: #ffb800;
  width: 100%;
  height: 100%;

  
  .produtos-lista {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }


  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    align-self: center;
  }

  .botao1 button {
    justify-content: center;
    height: 3em;
    width: 9em;
    background-color: black;
    border-radius: 2em;
    color: white;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    outline: none
  }

  .botao1 {
    align-self: center;
  }
`;

export { Quadrado };
