import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import Link from "next/link";
import styles from "../styles/CardHelp.module.css";
import {useRouter} from "next/router";

function CardHelp(props) {
    const router = useRouter()

    const handleClick = ()=> {
        if (props.rotate) return 0;
        switch (props.activeKey) {
            case "medicine"  : router.push("https://send.monobank.ua/jar/2aYBaMCcHr");break;
            case "ammunition": router.push("https://send.monobank.ua/jar/2aYBaMCcHr");break;
            case "optic"     : router.push("https://send.monobank.ua/jar/2aYBaMCcHr");break;
            case "car"       : router.push("https://send.monobank.ua/jar/5qRWqWNqgH");break;
            case "product"   : router.push("https://send.monobank.ua/jar/8Ckdp87Rvz");break;
            default: break;
        }
    }

    return (
        <Card style={{width: '18rem'}}>
            {/*<Card.Img variant="top" src={props.path} className={styles.scale}/>*/}
            <div className={styles.wrapCard}>
                <div className={(props.rotate) ? styles.card : styles.cardStop}>

                    <Card.Img variant="top" src={props.pathFront} className={styles.front} onClick={handleClick}
                              alt="збір коштів на допомогу ЗСУ"/>
                    <Card.Img variant="top" src={props.pathBack} className={styles.back}
                                alt="донати на ЗСУ"/>
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