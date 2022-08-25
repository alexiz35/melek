import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function PayForm() {
    const [labelRange, setLabelRange] = useState(null)
    const [donat, setDonat] = useState(null)

    const handleRange = (e) => {
        e.preventDefault()
        setLabelRange(e.target.value)
    }

    const handleInput = (e) => {
        e.preventDefault()
        setDonat(e.target.value)
        setLabelRange(e.target.value)
    }

    const handleClick = (e) => {
        switch (e.target.id) {
            case "100":
                setLabelRange(100);
                break;
            case "500":
                setLabelRange(500);
                break;
            case "1000":
                setLabelRange(1000);
                break;
        }
    }

    return (
        <>
            <Container className="justify-content-end">
            <Form className="border border-success rounded-2 bg-light text-dark mt-2"
                  style={{width: "380px", height: "310px"}}>
                <Row className="justify-content-center">
                    <Form.Text className="text-center mt-2"><h6>Долучитись до допомоги ЗСУ</h6></Form.Text>
                    <Col xs={8}>

                        <Row className="mt-3">
                            <Button as={Col} id="100" variant="outline-dark" className="mx-2" onClick={handleClick}>
                                100
                            </Button>
                            <Button as={Col} id="500" variant="outline-dark" className="mx-2" onClick={handleClick}>
                                500
                            </Button>
                            <Button as={Col} id="1000" variant="outline-dark" className="mx-2" onClick={handleClick}>
                                1000
                            </Button>
                        </Row>

                        <Form.Group className="mb-2 mt-3" controlId="formGroupEmail">
                            {/*<Form.Label>Виберить суму допомоги</Form.Label>*/}
                            <Form.Range defaultValue={100} max={1000} step={100} onChange={handleRange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupSum">
                            <div className="text-center">
                                <Form.Label>Сума доната, грн</Form.Label>
                            </div>
                            <Form.Control
                                className="text-center"
                                type="number"
                                placeholder="0"
                                value={labelRange}
                                onChange={handleInput}
                            />
                        </Form.Group>

                        <Row className="my-3 px-1">
                            <Button as={Col} variant="dark" className="mx-2">
                                Допомогти
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Form>
            </Container>
        </>
    )
}