import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import Image from 'next/image'
import Link from "next/link";
import Col from "react-bootstrap/Col";
import "../styles/Navbar.module.css"

import styles from "../styles/LayoutMain.module.css";
import Marquee from "react-fast-marquee/dist";


export default function Navbar2() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

            <Col xs={9} sm={10} md={10} lg={6} style={{paddingInline: "30px"}}>
                <Image src="/brendMelek5.png" height={70} width={469}/>
            </Col>
            <Col >
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            </Col>
            <Container>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                <Nav>
                    <Link href="/404"><a className="nav-link">Допомогти</a></Link>
                    {/*<Link href="#pricing"><Nav>Новини</Nav></Link>*/}
                    <Nav.Link href="#pricing">Пронас</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav>
                        <Link href="/payment">
                        <Button variant="primary">
                            Допомогти
                        </Button>
                        </Link>
                    </Nav>

                </Nav>
                {/*  <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>*/}
            </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

