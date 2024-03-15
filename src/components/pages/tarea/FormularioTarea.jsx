// import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import Administrador from "../Administrador";

const FormularioTarea = () => {
  return (
    <section className="mainSection py-5 mx-lg-auto rounded-2 px-2 px-sm-4 px-lg-5">
      <h2 className="mb-3">Nueva Tarea</h2>
      <hr />
      <p className="mb-4">
        Campo Obligatorio <span className="text-danger">*</span>
      </p>
      <Form className="mb-5 sectionForm">
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="fw-medium">
            Nombre <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Ejercitarme en casa"
            minLength={3}
            maxLength={50}
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="fw-medium">
            Descripción <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            className="textarea"
            as="textarea"
            placeholder="Ej: hacer 3 series de 10 fuerzas de brazos y 100 saltos en rana"
            minLength={3}
            maxLength={50}
            required
          />
        </Form.Group>
        <div className="text-end d-flex gap-2 justify-content-end flex-wrap">
          <Button variant="primary" className="px-4" type="submit">
            Agregar
          </Button>
          <Button variant="danger" className="px-3" type="submit" as={Link} to="/">
            Cancelar
          </Button>
        </div>
      </Form>
      {/* <Administrador tareas={tareas} borrarTarea={borrarTarea}></Administrador> */}
    </section>
  );
};

export default FormularioTarea;
