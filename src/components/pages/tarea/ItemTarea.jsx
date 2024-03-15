import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemTarea = () => {
  return (
    <ListGroup.Item className="d-flex flex-column gap-3 flex-md-row justify-content-between mb-3 rounded-2">
      <div className="nameTask text-center">
        <p>Realizar ejercicio aa aa aaaaaaa aa aa aaaaaaaaaaa aaaaaaaaa</p>
      </div>
      <div className="d-md-flex text-center text-md-start justify-content-center align-items-center gap-2">
        <Button variant="secondary" className="px-3" title="Ver más" as={Link} to={"/vertarea/:id"}> 
          <i className="bi bi-eye-fill"></i>
        </Button>{" "}
        <Button variant="warning" className="px-3" title="Editar tarea"  as={Link} to={`/editartarea/:id`}>
          <i className="bi bi-pencil-square"></i>
        </Button>{" "}
        <Button variant="danger" className="px-3" title="Borrar tarea">
          <i className="bi bi-trash"></i>
        </Button>{" "}
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
