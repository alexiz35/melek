import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    return (
        <>
            <Container fluid className="text-bg-dark mb-0 px-5" style={{height: "150px"}}>

                <Row className="">
                    <Col xs={6} className="mt-4">
                        <h6>Благодійний фонд "Melek"</h6>
                        <h7>м.Лубни, пр-т Володимірский,12</h7>
                    </Col>
                </Row>
                <hr className="mt-4"/>
                <Row className="mt-2 text-center" >
                    <h6>egegegehg</h6>
                </Row>

            </Container>
        </>
    )
}