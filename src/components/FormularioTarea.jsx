import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const FormularioTarea = () => {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Ej: tarea 1" minLength={3} maxLength={50}/>
        <Button variant='dark' className='ms-2' type='submit'>Agregar</Button>
      </Form.Group>
    </Form>
  );
};

export default FormularioTarea;