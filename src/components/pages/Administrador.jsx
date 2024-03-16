import { Button, ListGroup } from "react-bootstrap";
import ItemTarea from "./tarea/ItemTarea.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerTareaAPI } from "../../helpers/queries.js";

const Administrador = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerTareaAPI();
      setTareas(respuesta.tareas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="container mainSection px-2 px-lg-5">
        <div className="d-flex flex-column gap-2 flex-sm-row justify-content-around align-items-center my-5 ">
          <h1 className="">Lista de tareas</h1>
          <Button
            className="btn btn-primary"
            title="Agregar tarea"
            to="/crear"
            as={Link}
          >
            <i className="bi bi-file-earmark-plus fs-5"></i>
          </Button>
        </div>

        <ListGroup className="sectionList mx-auto">
          {tareas.map((tarea) => (
            <ItemTarea tarea={tarea} key={tarea._id} setTareas={setTareas} />
          ))}
        </ListGroup>
      </section>
    </>
  );
};

export default Administrador;
