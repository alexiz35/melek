import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    return (
        <>
            <Container fluid className="text-bg-dark px-5" style={{height: "150px"}}>

                <Row>
                    <Col xs={6} className="mt-4">
                        <h6>Благодійний фонд "Melek"</h6>
                        <h7>м.Лубни, пр-т Володимірский,12</h7>
                    </Col>
                </Row>
                <hr className="mt-4"/>
                <Row className="text-center" >
                    <h6 className="small">egegegehg</h6>
                </Row>

            </Container>
        </>
    )
}