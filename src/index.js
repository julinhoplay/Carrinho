import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetalheProduto from "./infob/detalheproduto";
import Carrinho from "./infob/carrinho"
import Contador from "./infob/carrinho/contador"

import App from "./infob/home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/infoX/contador" exact={true} component={Contador} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
