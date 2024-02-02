import ListaTareas from "./ListaTareas";
import { Button, Form} from 'react-bootstrap';

const FormularioTarea = () => {
  return (
    <section className="sectionForm mx-auto pt-5 border border-2 border-white px-5 rounded-3">
      <h2 className="text-center mb-4 text-white">Bienvenido</h2>
      <p className="text-center mb-4 text-white">Ingresa tus tareas</p>
      <Form className="mb-5">
        <Form.Group
          className="mb-3 d-flex flex-column gap-3 flex-md-row"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea. Ej: tarea 1"
            minLength={3}
            maxLength={50}
          />
          <Button variant="success" className="px-5" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
