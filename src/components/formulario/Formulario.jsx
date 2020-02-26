import React, { useState } from "react";
import { Form, Container, Row } from "react-bootstrap";

const Formulario = ({ contrato, provincias, contratistas }, ...props) => {
  const [provincia, setProvinciaSeleccionada] = useState("");
  const [contratista, setContratista] = useState("");

  const handleChangeProvincia = e => {
    console.log(e.target.value);
  };
  const handleChangeContratista = e => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Monto base</Form.Label>
            <Form.Control type="text" placeholder="Ej. 100.00" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Contratista</Form.Label>
            {contratistas.length && (
              <Form.Control
                value={contratista}
                as="select"
                onChange={handleChangeContratista}
              >
                {contratistas.map((contratista, index) => (
                  <option key={index} value={contratista.id}>
                    {contratista.razonSocial}
                  </option>
                ))}
              </Form.Control>
            )}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Provincia</Form.Label>
            {provincias.length && (
              <Form.Control as="select">
                {provincias.map(contratista => (
                  <option>{contratista.nombre}</option>
                ))}
              </Form.Control>
            )}
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
};

export default Formulario;
