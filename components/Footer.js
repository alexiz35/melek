import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    return (
        <>
            <Container fluid className="text-bg-dark px-5" >

                <Row className="justify-content-around">
                    <Col xs={12} sm={4} className="mt-4 text-center">
                        <h6>Благодійний фонд "Melek"</h6>
                        <h6>м.Лубни, пр-т Володимірский,12</h6>
                        <h6>т.+38(095)4608102</h6>
                    </Col>
                    <Col xs={12} sm={4} className="mt-4 text-center">
                        <i className="bi bi-instagram mx-2" style={{fontSize:"26px"}}/>
                        <a href="https://www.facebook.com/groups/779859472357564"><i className="bi bi-facebook mx-2" style={{fontSize:"26px"}}/></a>
                        <i className="bi bi-telegram mx-2" style={{fontSize:"26px"}}/><br/>

                        <i className="bi bi-envelope mx-2" style={{fontSize:"1rem"}}>
                        <span style={{fontSize:"0.9rem",padding:"10px"}}>bf15.12melek@gmail.com</span>
                        </i>
                    </Col>
                </Row>
                <hr className="mt-4 mb-1" />
                <Row className="text-center">
                    <i className="bi bi-c-circle mx-2 mb-2" style={{fontSize:"0.7rem"}}>
                        <span style={{fontSize:"0.7rem",padding:"10px"}}>всі права захищені | розроблено UniqueStudio</span>
                    </i>
                </Row>

            </Container>
        </>
    )
}