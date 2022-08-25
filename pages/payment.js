import Head from 'next/head'
import React from "react";
import Container from "react-bootstrap/Container";
import LayoutMain from "../components/LayoutMain";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import PayForm from "../components/PayForm";
import Table from "react-bootstrap/Table";


export default function payment() {

    return (
        <>
            <Head>
                <title>Payment</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <LayoutMain>
                <Container>
                    <Row className="text-center">
                        <div>
                            <Image src="/helpImg.jpg" width={800} height={300}/>
                        </div>
                    </Row>
                    <Row className="text-center mt-2">
                        <h1>Дякуємо за підтримку!</h1>
                        <h5>У звʼязку з війною в Україні Міжнародний Фонд «Melek» закликає кожного
                        українця на своєму рівні робити все можливе, що залежить від вас у даний час. Лише так ми
                        зможемо наблизились до спільної мети — перемоги над ворогом та відновлення територіальної
                            цілісності нашої держави!</h5>
                    </Row>
                    <Row className="text-center mt-2 mb-2 border border-dark rounded-3">
                        <h3 className="mt-2">Долучитись до допомоги дуже легко</h3>
                        <Col sx={12} md={5} className="justify-content-center">
                            <h6>Можно підтримати ЗСУ фінансово</h6>
                            <PayForm/>
                        </Col>

                        <Col sx={12} md={2}>
                            <h4>aбо</h4>
                        </Col>
                        <Col sx={12} md={5}>
                            <h6>
                                Якщо ви маєте бажання передати речі, медикаменти,
                                паливо чи щось зі списку потреб ЗСУ
                                звертайтеся, будь ласка, за номерами телефону:
                            </h6>
                        </Col>
                        <Row className="mt-4 mb-4">
                            <h3>Також можно переказати кошти на рахунок Фонду</h3>
                            <h5>Реквізити Фонду Melek</h5>
                            <Table responsive striped bordered hover size={"sm"} >
                                <thead>
                                    <tr>
                                        <th>
                                           Найменування юридичної особи
                                        </th>
                                        <th>
                                            БЛАГОДІЙНА ОРГАНІЗАЦІЯ "БЛАГОДІЙНИЙ ФОНД "MELEK""
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Код за ЄДРПОУ юридичної особи</td>
                                    <td>42671745</td>
                                </tr>
                                <tr>
                                    <td>Валюта рахунку</td>
                                    <td>UAH</td>
                                </tr>
                                <tr>
                                    <td>№ рахунку</td>
                                    <td>UA413510050000026003878926420</td>
                                </tr>
                                <tr>
                                    <td>Назва банку</td>
                                    <td>Акціонерне товариство "УКРСИББАНК"</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Row>



                </Container>

            </LayoutMain>

        </>
    )
}