import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const HeaderLoguin = () => {
  return (
    <Navbar bg="gray" expand="lg">
      <Navbar.Brand href="#home" className="ms-3 d-flex align-items-center">
        <img
          src="src/assets/logo_U.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <span className="encabezado  ms-2">Sistema de Votación  Escolar</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavDropdown title="Loguin" id="basic-nav-dropdown" align="end">
            <NavDropdown.Item href="#action1">Estudiante</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Administrador</NavDropdown.Item>
            <NavDropdown.Item href="#action3">Veedor</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderLoguin;
