import Head from 'next/head'
import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import LayoutMain from "../components/LayoutMain";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import PayForm from "../components/PayForm";
import Table from "react-bootstrap/Table";
import {useMediaQuery} from "react-responsive";


export default function Payment() {
    const isMobile = useMediaQuery({query: "(max-width: 576px)"})
    const [mono, setMono] = useState(<h6>Щось пішло не так</h6>)
    const [anybank, setAnybank] = useState(<h6>Щось пішло не так</h6>)

    useEffect(() => {
        isMobile ?
            setMono(<a href={"https://send.monobank.ua/jar/2aYBaMCcHr"}>
                <Image src={"/monoPay.png"} width={300} height={400}/>
            </a>)
            :
            setMono(<Image src={"/mono/qr_afu.jpg"} width={300} height={339}/>)
    }, [isMobile])

    useEffect(() => {
        !isMobile ?
            setAnybank(
                <a href={"https://send.monobank.ua/jar/2aYBaMCcHr"}>
                <Image src={"/monoPay.png"} width={300} height={400}/>
                </a>
            )
            :
            setAnybank(
                <>
                <h3>Номер картки</h3>
                <h3>4441114420222661</h3>
                </>
            )
    }, [isMobile])

    return (
        <>
            <Head>
                <title>Збір коштів для ЗСУ</title>
                <meta name="description" content="Збираємо кошти на допомогу ЗСУ та постраждалим від війни"/>
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
                    <Row className="text-center justify-content-center mt-2 mb-2 border border-dark rounded-3">
                        <h3 className="mt-2">Долучитись до допомоги дуже легко</h3>
                        <h4 className="mt-1 mb-5">Можно підтримати ЗСУ фінансово</h4>
                        <Row className="text-center justify-content-around">


                            <Col sx={12} md={5} className="text-center border border-dark rounded-3 mb-3">
                                <h6 className="mt-3 mb-4">Для власників картки монобанку</h6>
                                {mono}
                            </Col>
                            <Col sx={12} md={5} className="text-center border border-dark rounded-3 mb-3">
                                <h6 className="mt-3 mb-3">Для власників карток інших банків</h6>
                                {anybank}
                                {/*<a href={"https://send.monobank.ua/jar/8ZKWUg3jyC"}>
                                    <Image src={"/monoPay.png"} width={300} height={400}/>
                                </a>*/}
                                {/*<PayForm/>*/}
                            </Col>

                        </Row>

                        <Row className="justify-content-center mt-4 mb-3">
                            <h3>aбо</h3>
                            <h5>
                                Якщо ви маєте бажання передати речі, медикаменти,
                                паливо чи щось зі списку потреб ЗСУ
                                звертайтеся, будь ласка, за телефоном:
                            </h5>
                            <div className="text-center py-3 mt-3 mb-3 border border-dark rounded-3" style={{maxWidth:"300px"}}>
                                <h5>Голова фонду </h5>
                                <h4>Ірина Подфедько </h4>
                                <h4> +380954608102 </h4>
                                {/*<h4>Виталий Ника </h4>
                                <h4> 0980050523 </h4>*/}
                            </div>
                        </Row>
                        <Row className="mt-4 mb-4">
                            <h3>Також можно переказати кошти на рахунок Фонду</h3>
                            <h5 className="mt-4">Реквізити Фонду Melek у гривні</h5>
                            <a className=" mb-4" href="/uaInvoice.pdf" download>Завантажити реквізити для переказу</a>
                            <Table responsive striped bordered hover size={"sm"}>
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
                            <h5 className="mt-5">Реквізити Фонду Melek у доларах</h5>
                            <a href="/dolInvoice.pdf" download>Завантажити реквізити для переказу</a>
                        </Row>
                    </Row>


                </Container>

            </LayoutMain>

        </>
    )
}