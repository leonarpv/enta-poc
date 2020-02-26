import { gql } from "apollo-boost";

import {} from "./app.utils";

export const typeDefs = gql`
  type Provincia {
    nombre: String
    contratos: [Provincia]
  }

  type Contratista {
    cuit: String
    razonSocial: String
  }

  type Contrato {
    id: ID
    estado: String
    contratista(id: ID): Contratista
    provincia(id: ID): Provincia
  }
`;

export const resolvers = {};
