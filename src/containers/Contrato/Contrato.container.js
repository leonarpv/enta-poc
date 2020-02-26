import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import * as compose from "lodash.flowright";

import Contrato from "./Contrato";

const GET_CONTRATO = gql`
  query getContratoById($id: ID) {
    contrato(id: $id) {
      estado
    }
    provincias {
      nombre
    }
    contratistas {
      razonSocial
      provincias{
          id
          nombre
      }
    }
  }
`;

const ContratoContainer = ({ match }) => (
  <Query query={GET_CONTRATO} variables={{ id: match.params.id }}>
    {({ loading, error, data: getContratoById }) => {
      if (loading) return "Cargando";
      return <Contrato formData={getContratoById} />;
    }}
  </Query>
);

export default ContratoContainer;
