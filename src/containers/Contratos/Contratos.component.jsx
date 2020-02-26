import React from "react";

const Contratos = contratos => {
  return (
    <div className="contratos">
      {contratos.lenght > 0 ? (
        contratos.map(contrato => <span>{contrato.estado}</span>)
      ) : (
        <></>
      )}
    </div>
  );
};

export default Contratos;
