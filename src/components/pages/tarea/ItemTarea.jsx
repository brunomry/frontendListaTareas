import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { borrarTareaAPI, leerTareaAPI } from "../../../helpers/queries";

const ItemTarea = ({tarea, setTareas}) => {
  const borrarTarea = () => {
    Swal.fire({
      title: 'Estás seguro de eliminar la tarea?',
      text: 'No se puede revertir este proceso',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaAPI(tarea.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: 'Tarea eliminada!',
            text: `La tarea "${tarea.nombreTarea}" fue eliminada correctamente.`,
            icon: 'success',
          });
          const listaTareas = await leerTareaAPI();
          setTareas(listaTareas);
        } else {
          Swal.fire({
            title: 'Ocurrió un error!',
            text: `La tarea "${tarea.nombreTarea}" no fue eliminada correctamente. Vuelva a intentarlo.`,
            icon: 'error',
          });
        }
      }
    });
  }

  return (
    <ListGroup.Item className="d-flex flex-column gap-3 flex-md-row justify-content-between mb-3 rounded-2">
      <div className="nameTask text-center">
        <p>{tarea.nombreTarea}</p>
      </div>
      <div className="d-md-flex text-center text-md-start justify-content-center align-items-center gap-2">
        <Button variant="secondary" className="px-3" title="Ver más" as={Link} to={`/verDetalle/${tarea.id}`}> 
          <i className="bi bi-eye-fill"></i>
        </Button>{" "}
        <Button variant="warning" className="px-3" title="Editar tarea"  as={Link} to={`/editar/${tarea.id}`}>
          <i className="bi bi-pencil-square"></i>
        </Button>{" "}
        <Button variant="danger" className="px-3" title="Borrar tarea" onClick={borrarTarea}>
          <i className="bi bi-trash"></i>
        </Button>{" "}
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
