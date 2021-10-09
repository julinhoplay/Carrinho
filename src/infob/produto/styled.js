import styled from "styled-components";

const Quadrado = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-shadow: 0px 0px 5px 1px black;
  margin: 20px;

  img {
    width: 10em;
    height: 10em;
  }

  button {
    margin-top: 9.5em;
    margin-left: 14em;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    height: 3.5em;
    width: 9em;
    background-color: black;
    color: white;
    border-radius: 30px;
    border: none;
    margin-left: 0px;
    cursor: pointer;
    outline: none
  }

  .titulo-produto {
    color: #000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.5em;
    font-weight: bold;
  }

  .preco-produto {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.5em;
    font-weight: 600;
    color: white;
  }
  
`;
export { Quadrado };
