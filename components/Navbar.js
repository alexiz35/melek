import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import Image from 'next/image'
import Col from "react-bootstrap/Col";
import "../styles/Navbar.module.css"

export default function Navbar2 () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
            <Col xs={10} sm={10} md={6} style={{paddingInline:"30px"}} >
                    <Image src="/brendMelek5.png" height={70} width={469}  />
            </Col>
            <Col xs={2} sm={2}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Col>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav >
                        <Nav.Link href="#features" >ПРО ФОНД</Nav.Link>
                        <Nav.Link href="#pricing">НОВИНИ</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                  {/*  <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>*/}
                </Navbar.Collapse>

        </Navbar>
    );
}

