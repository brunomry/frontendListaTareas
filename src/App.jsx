import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer.jsx";
import Menu from "./components/common/Menu.jsx";
import Administrador from "./components/pages/Administrador.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioTarea from "./components/pages/tarea/FormularioTarea.jsx";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Error404 from "./components/pages/Error404.jsx";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route
          path="/crear"
          element={
            <FormularioTarea
              editar={false}
              deshabilitado={false}
              boton="Cancelar"
              ocultar={false}
              titulo="Nueva tarea"
            ></FormularioTarea>
          }
        ></Route>
        <Route
          path="/editar/:id"
          element={
            <FormularioTarea
              editar={true}
              boton="Cancelar"
              ocultar={false}
              titulo="Editar receta"
            ></FormularioTarea>
          }
        ></Route>
        <Route
          path="/verDetalle/:id"
          element={
            <FormularioTarea
              deshabilitado={true}
              boton="Volver"
              ocultar={true}
              titulo="Detalle de la tarea"
              verDetalle={true}
            ></FormularioTarea>
          }
        ></Route>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
