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
            <Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            </Col>
            <Container>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav>
                        <Link href="/"><a className="nav-link">Новини</a></Link>
                        <NavDropdown title="Про Фонд" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Link href="#action/3.1"><a className="nav-link">Історія Фонду</a></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link href="/projects"><a className="nav-link">Наші проекти</a></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link href="#action/3.3"><a className="nav-link">Звіти</a></Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <Link href="/docPage"><a className="nav-link"> Документи</a></Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link href="/news"><a className="nav-link">Потреби ЗСУ</a></Link>
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

