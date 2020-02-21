import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Contratos from "./../containers/Contratos";
import Contrato from "./../containers/Contrato";
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Contratos} />
        <Route path="/contract" component={Contrato} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
