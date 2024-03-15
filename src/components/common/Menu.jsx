import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container className="d-flex flex-md-column gap-3">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center mb-3">
              <NavLink
               className="nav-link me-3 fs-5 mt-3"
               to="/"
              >
                Tareas
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
