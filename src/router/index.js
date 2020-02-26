import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ContratosContainer from "./../containers/Contratos/Contratos.container";
import ContratoContainer from "../containers/Contrato/Contrato.container";
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ContratosContainer} />
        <Route path="/update/:id" component={ContratoContainer} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
