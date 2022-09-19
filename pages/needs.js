import Head from 'next/head'
import React from "react";
import Container from "react-bootstrap/Container";
import LayoutMain from "../components/LayoutMain";
import Image from "next/image";
import {Col,Row} from "react-bootstrap";


export default function Needs() {
    return (
        <>
            <Head>
                <title>Потреби ЗСУ</title>
                <meta name="description" content="Фонд Melek допомогає війсковим"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <LayoutMain>

                <Container className="text-center">

                    <h1 className=" mt-5 mb-5">Потреби ЗСУ</h1>
                    <Row>
                    <Col xs={12} md={6}>
                    <Image src="/potreby.jpg" height={1080} width={1080} layout="responsive"/>
                    </Col>
                    <Col xs={12} md={6}>
                    <h2>Нашим війсковим постійно потрібно:</h2>
                        <h4>
                            <ul className="text-start mt-4">
                                <li>
                                    Лопати, кирки, топори, пилки, скоби, гвіздки
                                </li>
                                <li>
                                    Шкарпетки, труси, футболки, дощовики, дутики, резинові чоботи
                                </li>
                                <li>
                                    ЛІКИ: протипростудні, спреі від нежиті, від болі в горлі, від кишкових розладів, від циститу, від болю в шлунку, мезим, панкреатин, креон
                                </li>
                                <li>
                                    Каремати, Матраси, Павербанки, Цигарки, запальнички, газові балони та горєлки
                                </li>
                                <li>
                                    Цукор, кава, чай, сгущене молоко, мівіна, сало в банках, тушонка, консерви, мед, сіль, спеції, гірчиця, домашня консервація, вода, напої, соки, цукерки
                                </li>
                                <li>
                                    Мило, гелі, шампуні, піна для гоління, для прання, для миття посуду, вологі серветки, туалетний папір, зубні пасти та щітки
                                </li>
                            </ul>
                        </h4>
                    </Col>
                    </Row>
                    <Row className="text-center justify-content-center mt-5 mb-3">
                        <h3>Війсковим потрібно все - від бронежилета до гвіздка.</h3>
                        <h5>
                            Якщо ви маєте бажання передати речі, медикаменти,
                            паливо чи щось зі списку потреб ЗСУ
                            звертайтеся, будь ласка, за телефоном:
                        </h5>
                        <div className="text-center py-3 mt-3 mb-3 border border-dark rounded-3" style={{maxWidth:"300px"}}>
                            <h4>Ірина Подфедько </h4>
                            <h4> +380954608102 </h4>
                            {/*<h4>Виталий Ника </h4>
                                <h4> 0980050523 </h4>*/}
                        </div>
                        <h5>або за нашою адресою :</h5>
                        <div className="text-center py-3 mt-3 mb-3 border border-dark rounded-3" style={{maxWidth:"300px"}}>
                            <h4>м.Лубни,  </h4>
                            <h4> пр-т Володимірский,12 </h4>
                            {/*<h4>Виталий Ника </h4>
                                <h4> 0980050523 </h4>*/}
                        </div>
                    </Row>

                </Container>

            </LayoutMain>

        </>
    )
}