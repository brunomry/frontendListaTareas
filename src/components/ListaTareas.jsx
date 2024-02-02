import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = () => {
  return (
    <>
      <h3 className="text-center mb-4 text-white">Lista de tareas</h3>
      <ListGroup>
        <ItemTarea></ItemTarea>
      </ListGroup>
    </>
  );
};

export default ListaTareas;
