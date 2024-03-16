// import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import Administrador from "../Administrador";

const FormularioTarea = () => {

  const {
    register,
    handleSubmit,
    formState:{errors},
    reset,
  } = useForm();

  return (
    <section className="mainSection py-5 mx-lg-auto rounded-2 px-2 px-sm-4 px-lg-5">
      <h2 className="mb-3">Nueva Tarea</h2>
      <hr />
      <p className="mb-4">
        Campo Obligatorio <span className="text-danger">*</span>
      </p>
      <Form className="mb-5 sectionForm" onSubmit={handleSubmit()}>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="fw-medium">
            Nombre de Tarea <span className="text-danger fw-bold">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Ejercicio en casa"
            {...register("nombreTarea",{
              required: "El nombre de la tarea es obligatorio",
              minLength: {
                value: 5,
                message: "El nombre de la tarea debe tener como mínimo 5 caracteres"
              },
              maxLength: {
                value: 25,
                message: "El nombre de la tarea debe tener como máximo 25 caracteres"
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreTarea?.message}
          </Form.Text>
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
            {...register("descripcion",{
              required: "La descripción de la tarea es obligatorio",
              minLength: {
                value: 10,
                message: "La descripción de la tarea debe tener como mínimo 10 caracteres"
              },
              maxLength: {
                value: 100,
                message: "La descripción de la tarea debe tener como máximo 100 caracteres"
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
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
