import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import Link from "next/link";
import styles from "../styles/CardHelp.module.css";

function CardHelp(props) {

    return (
        <Card style={{width: '18rem'}}>
            {/*<Card.Img variant="top" src={props.path} className={styles.scale}/>*/}
            <div className={styles.wrapCard}>
                <div className={styles.card}>
                    <Card.Img variant="top" src={props.pathFront} className={styles.front}/>
                    <Card.Img variant="top" src={props.pathBack} className={styles.back}/>
                </div>
            </div>
            <Card.Body>
                <Card.Title>{props.tittle}</Card.Title>
                <Card.Text>
                    {props.textContent}
                </Card.Text>
            </Card.Body>

            <Link href={`/projects?activeKey=${props.activeKey}`} scroll={true}>
                <Button className="w-100" variant="primary">Детальніше</Button>
            </Link>
        </Card>
    );
}

export default CardHelp;