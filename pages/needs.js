import Head from 'next/head'
import React from "react";
import Container from "react-bootstrap/Container";
import LayoutMain from "../components/LayoutMain";
import Image from "next/image";
import {Col, Row} from "react-bootstrap";


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

                    <h1 className=" mt-4 mb-5">Потреби ЗСУ</h1>
                    <Row>
                        <Col xs={12} md={6}>
                            <Image src="/potreby.jpg" height={1080} width={1080} layout="responsive"/>
                        </Col>
                        <Col xs={12} md={6}>
                            <h2>Наші війскові постійно потребують:</h2>
                            <h4>
                                <ul className="text-start mt-4">
                                    <li>
                                        Топори, лопати, кирки, пилки, скоби, гвіздки, робочі рукавички
                                    </li>
                                    <li>
                                        Плитоноски, наколінники, підсумки, каремати, матраси, павербанки, сірники,
                                        запальнички, газові балони
                                    </li>
                                    <li>
                                        Біноклі, тепловізори, захисні окуляри, прибори нічного бачення
                                    </li>
                                    <li>
                                        Теплий одяг, шкарпетки, шапки, термобілизна, футболки, труси, резинові чоботи,
                                        куртки, дощовики
                                    </li>
                                    <li>
                                        Ліки протизастудні, спреї від нежиті, від болю в горлі, жарозничуючі,
                                        протигрибкові, від кишкових розладів, знеболюючі, антисептики, аптечки першої
                                        допомоги
                                    </li>
                                    <li>
                                        Вода, цигарки, кава, чай, сіль, цукор, молоко згущене, мед, печиво, тушонка,
                                        консерви, крупи, овочі, фрукти
                                    </li>
                                    <li>
                                        Мило, туалетний папір, зубні пасти та щітки, шампуні, гелі, станки та піни для
                                        гоління, вологі серветки, засоби для миття посуду.
                                    </li>
                                </ul>
                            </h4>
                        </Col>
                    </Row>
                    <Row className="text-center justify-content-center mt-3 mb-3">
                        <h3 className="mb-3">Війсковим потрібно все - від бронежилета до гвіздка.</h3>
                        <h5>
                            Якщо ви маєте бажання передати речі, медикаменти,
                            паливо чи щось зі списку потреб ЗСУ
                            звертайтеся, будь ласка, за телефоном:
                        </h5>
                        <div className="text-center py-3 mt-3 mb-3 border border-dark rounded-3"
                             style={{maxWidth: "300px"}}>
                            <h4>Ірина Подфедько </h4>
                            <h4> +380954608102 </h4>
                            {/*<h4>Виталий Ника </h4>
                                <h4> 0980050523 </h4>*/}
                        </div>
                        <h5>або за нашою адресою :</h5>
                        <div className="text-center py-3 mt-3 mb-3 border border-dark rounded-3"
                             style={{maxWidth: "300px"}}>
                            <h4>м.Лубни, </h4>
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