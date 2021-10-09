import styled from "styled-components";

const Quadrado = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #ffb800;

  padding: 3em;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    margin: 0.5em;
  }

  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-size: 1.5em;
      
  }

  h2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h3 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0px 0px 20px ;
  }

  div {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    
    
  }
  img {
    width: 20em;
    background-color: #ffb800;
    margin-right: 3.5em;

  }

  button {
      margin-top: 7.5em;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    height: 3.5em;
    width: 9em;
    background-color: black;
    color: white;
    border-radius: 30px;
    border: none;
    margin-left: 0px;
    outline: none;
    cursor: pointer;
  }
`;

export { Quadrado };
