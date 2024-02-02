import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({nombreTarea}) => {
  return (
    <ListGroup.Item className="d-flex flex-column gap-3 flex-sm-row justify-content-between mb-3 rounded-2">
      {nombreTarea} <Button variant="danger px-5">Borrar</Button>{" "}
    </ListGroup.Item>
  );
};

export default ItemTarea;
