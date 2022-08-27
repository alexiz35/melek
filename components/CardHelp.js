import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import styles from "../styles/CardHelp.module.css";

function CardHelp (props) {
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={props.path} className={styles.scale}/>
            <Card.Body>
                <Card.Title>{props.tittle}</Card.Title>
                <Card.Text>
                    {props.textContent}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default CardHelp;