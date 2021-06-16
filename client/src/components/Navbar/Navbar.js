import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom"
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { PersonCircle } from "react-bootstrap-icons";
const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand ><NavLink to = "/">Sahayak</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to = "/">Home</NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <NavDropdown  title= {<PersonCircle size ={30}/>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> My Info </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            My Queries
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Account Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
