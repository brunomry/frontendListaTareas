import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";
import TituloPrincipal from "./components/TituloPrincipal";

function App() {
  return (
    <>
      <Container className="my-4 mainPage">
        <TituloPrincipal />
        <FormularioTarea></FormularioTarea>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
