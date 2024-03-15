import { ListGroup, Button } from "react-bootstrap";
import ItemTarea from "./tarea/ItemTarea.jsx";
import {Link} from "react-router-dom";

const Administrador = () => {
  return (
    <>
      <section className="container mainSection px-2 px-md-5">
        <div className="d-flex flex-column gap-2 flex-sm-row justify-content-around align-items-center my-5 ">
          <h1 className="">Lista de tareas</h1>
          <Button
            className="btn btn-primary" title="Agregar tarea" to="/creartarea" as={Link}
          >
            <i className="bi bi-file-earmark-plus fs-5"></i>
          </Button>
        </div>

        <ListGroup className="sectionList mx-auto">
          {/* {tareas.map((elementoTarea, posicion) => (
          <ItemTarea
            key={posicion}
            nombreTarea={elementoTarea}
            borrarTarea={borrarTarea}
          />
        ))} */}
          <ItemTarea></ItemTarea>
          <ItemTarea></ItemTarea>
          <ItemTarea></ItemTarea>
          <ItemTarea></ItemTarea>
          <ItemTarea></ItemTarea>
          <ItemTarea></ItemTarea>
          <ItemTarea></ItemTarea>
        </ListGroup>
      </section>
    </>
  );
};

export default Administrador;
