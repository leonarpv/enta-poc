import React from "react";
import Formulario from "../../components/formulario/Formulario";

const Contrato = (
  { formData: { contrato, provincias, contratistas } },
  ...props
) => {
  return (
    <div className="contrato">
      <Formulario provincias={provincias} contratistas={contratistas} />
    </div>
  );
};

export default Contrato;
