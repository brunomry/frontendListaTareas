import { useEffect, useState } from "react";
import ListaTareas from "./ListaTareas";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const tareasLocalStorage = JSON.parse(localStorage.getItem('tareasKey')) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);

  useEffect(()=>{
    localStorage.setItem('tareasKey', JSON.stringify(tareas))
  },[tareas])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(tarea.trim !== ''){

      Swal.fire({
        icon: "success",
        title: "La tarea se guardó con éxito",
        showConfirmButton: true,
      });
      setTareas([...tareas, tarea]);
    }else{
      Swal.fire({
        title: "La tarea no fue ingresada",
        text: "Por favor, asegúrese de ingresar una tarea!",
        icon: "warning",
        confirmButtonColor: "#d64130",
        confirmButtonText: "Ok!",
      });
    }
  
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar la tarea?",
      text: "Una vez borrada la tarea no puede volver atrás",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const tareasFiltradas = tareas.filter(
          (elementoTarea) => elementoTarea !== nombreTarea
        );
        setTareas(tareasFiltradas);
      }
    });
  };

  return (
    <section className="sectionForm mx-auto pt-5 border border-2 border-white px-5 rounded-3">
      <h2 className="text-center mb-4 text-white">Bienvenido</h2>
      <p className="text-center mb-4 text-white">Ingresa tus tareas</p>
      <Form className="mb-5" onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex flex-column gap-3 flex-md-row"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea. Ej: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
            required
          />
          <Button variant="success" className="px-5" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
