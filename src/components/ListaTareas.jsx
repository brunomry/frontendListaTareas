import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, borrarTarea }) => {
  return (
    <>
      <h3 className="text-center mb-4 text-white">Lista de tareas</h3>
      <ListGroup>
        {tareas.map((elementoTarea, posicion) => (
          <ItemTarea
            key={posicion}
            nombreTarea={elementoTarea}
            borrarTarea={borrarTarea}
          />
        ))}
      </ListGroup>
    </>
  );
};

export default ListaTareas;
