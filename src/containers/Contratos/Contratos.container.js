import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import * as compose from "lodash.flowright";

import Contratos from "./Contratos.component";

const GET_CONTRATOS = gql`
  {
    contratos {
      estado
    }
  }
`;

const ContratosContainer = ({ match }) => (
  <Query query={GET_CONTRATOS}>
    {({ loading, error, data: contratos }) => {
      if (loading) return "Cargando";
      return <Contratos contratos={contratos} />;
    }}
  </Query>
);

export default ContratosContainer;
