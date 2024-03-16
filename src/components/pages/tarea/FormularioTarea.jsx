import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearTareaAPI, editarTareaAPI, obtenerTareaAPI } from "../../../helpers/queries.js";
import { useEffect } from "react";

const FormularioTarea = ({
  editar,
  titulo,
  verDetalle,
  boton,
  deshabilitado,
  ocultar,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  const tareaId = id ?? "";

useEffect(() => {
  if (tareaId !== "") {
    cargarDatosTarea();
  }
}, [tareaId]);

  const cargarDatosTarea = async () => {
    try {
      const respuesta = await obtenerTareaAPI(id);

      if(respuesta.status === 200){
        const tareaEncontrada = await respuesta.json();
        setValue("nombreTarea", tareaEncontrada.nombreTarea);
        setValue("descripcion", tareaEncontrada.descripcion);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const tareaValidada = async (tarea) => {
    if (editar) {
      const respuesta = await editarTareaAPI(tarea,id);

      if(respuesta.status === 200){
        Swal.fire({
          title: "Tarea modificada!",
          text: `La tarea "${tarea.nombreTarea}" fue modificada exitosamente`,
          icon: "success",
        });
        navegacion("/");
      }else{
        Swal.fire({
          title: "Ocurrió un error!",
          text: `La tarea "${tarea.nombreTarea}" no pudo ser modificada. Intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearTareaAPI(tarea);

      if (respuesta.status === 201) {
        Swal.fire({
          title: "Tarea registrada!",
          text: `La tarea "${tarea.nombreTarea}" fue registrada exitosamente`,
          icon: "success",
        });
        reset();
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrió un error!",
          text: `La tarea "${tarea.nombreTarea}" no pudo ser registrada. Intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    }
  };

  return (
    <section className="mainSection py-5 mx-lg-auto rounded-2 px-2 px-sm-4 px-lg-5">
      <h2 className="mb-3">{titulo}</h2>
      <hr />
      <p className={`${ocultar ? "d-none" : ""}`}>
        Campo Obligatorio <span className="text-danger">*</span>
      </p>
      <Form className="mb-5 sectionForm" onSubmit={handleSubmit(tareaValidada)}>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="fw-medium">
            Nombre de Tarea{" "}
            <span className={`text-danger fw-bold ${ocultar ? "d-none" : ""}`}>
              *
            </span>
          </Form.Label>
          <Form.Control
            type="text"
            disabled={deshabilitado}
            placeholder="Ej: Ejercicio en casa"
            {...register("nombreTarea", {
              required: "El nombre de la tarea es obligatorio",
              minLength: {
                value: 5,
                message:
                  "El nombre de la tarea debe tener como mínimo 5 caracteres",
              },
              maxLength: {
                value: 25,
                message:
                  "El nombre de la tarea debe tener como máximo 25 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger fw-medium">
            {errors.nombreTarea?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="fw-medium">
            Descripción{" "}
            <span className={`text-danger fw-bold ${ocultar ? "d-none" : ""}`}>
              *
            </span>
          </Form.Label>
          <Form.Control
            type="text"
            disabled={deshabilitado}
            className="textarea"
            as="textarea"
            placeholder="Ej: hacer 3 series de 10 fuerzas de brazos y 100 saltos en rana"
            {...register("descripcion", {
              required: "La descripción de la tarea es obligatorio",
              minLength: {
                value: 10,
                message:
                  "La descripción de la tarea debe tener como mínimo 10 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "La descripción de la tarea debe tener como máximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger fw-medium">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <div className="text-end d-flex gap-2 justify-content-end flex-wrap">
          <Button
            type="submit"
            variant="primary"
            className={`${ocultar ? "d-none" : "px-4"}`}
            disabled={deshabilitado}
          >
            Agregar
          </Button>
          <Button
            className={`btn ${
              verDetalle ? "btn-secondary px-5" : "btn-danger"
            }`}
            as={Link}
            to="/"
          >
            {boton}
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default FormularioTarea;
