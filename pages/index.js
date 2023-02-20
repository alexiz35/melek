import Head from 'next/head'
import React, {useEffect, useState} from "react";
import LayoutMain from "../components/LayoutMain";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselFade from "../components/CarouselFade";
import CardHelp from "../components/CardHelp";
import Link from "next/link";
import Marquee from "react-fast-marquee/dist";
import {useMediaQuery} from "react-responsive";
import {Nav} from "react-bootstrap";


export default function Home(props) {

    /*const warData = {day: props.warData.data.day, person: props.warData.data.stats.personnel_units}*/
    /*const [warString, setWarString] = useContext(AppContext)*/
    const isMobile = useMediaQuery({query: "(max-width: 576px)"})
    const isSizeText = useMediaQuery({query: "(max-width: 768px)"})
    const [sizefont,setSizeFont]=useState(true)


    /*const loadData = useCallback(() => {
        setWarString(warData)
    }, [])

    useEffect(() => {
        loadData()
    }, [])*/

    useEffect(()=>{
        setSizeFont(isSizeText)
    },[isSizeText])

    return (
        <>
            <Head>

                <title>Благодійний фонд Melek</title>
                <meta name="description" content="Фонд Melek допомогає війсковим та цивільним"/>

            </Head>



            <LayoutMain>

                <Row>
                    <CarouselFade
                        font={sizefont}
                    />
                </Row>
                <Row className="text-center justify-content-center mt-4">
                    <h1>Головна наша місія - Допомога тим, хто найбільше цього потребує</h1>

                    <h4 className="text-center" style={{maxWidth: "1100px"}}>Наш Фонд був заснований у 2018 році,
                        кожного дня наша команда волонтерів працює задля досягнення спільної мети.
                        Разом із вами, з нашими партнерами та благодійниками ми реалізовуємо багато життєво важливих
                        проєктів.
                    </h4>
                    <h2 className="mt-5 mb-4">Чим ми займаємось</h2>
                    <h3 className="text-decoration-underline mb-4">Допомога ЗСУ</h3>
                </Row>
                {/*-----------------------------------------------Cards help for AFU---------------------------------------------------*/}
                <Row className="justify-content-center">
                    <Col className="d-flex justify-content-center mb-4" xs={12} md={6} lg={4}>
                        <Link href={"/news"}>
                            <CardHelp
                                pathFront="/javel.jpg"
                                pathBack="/mono/qr_afu.jpg"
                                activeKey="medicine"
                                tittle="Польова війскова медицина"
                                textContent="Збираємо індивідуальні війскові аптечки (для першої допомоги)
                                            та набори для польових медиків/санчасті"
                                /*rotate={!isMobile}*/
                                rotate={false}
                            />
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center mb-4" xs={12} md={6} lg={4}>
                        <CardHelp
                            pathFront="/javel.jpg"
                            pathBack="/mono/qr_afu.jpg"
                            activeKey="ammunition"
                            tittle="Амуніція"
                            textContent="Виготовляємо наколінники, розгрузки рпс, плитоноски, підсумок
                                  сбросу, підсумки під аптечку, під турнікет, стропа евакуації,
                                  кікімора (шугайстр)"
                            /*rotate={!isMobile}*/
                            rotate={false}
                        />
                    </Col>
                    <Col className="d-flex justify-content-center mb-4" xs={12} md={6} lg={4}>
                        <CardHelp
                            pathFront="/javel.jpg"
                            pathBack="/mono/qr_afu.jpg"
                            activeKey="optic"
                            tittle="Оптика"
                            textContent="Закуповуємо прибори нічного бачення, біноклі, тепловізори, захисні окуляри,
                                   монокуляри"
                            /*rotate={!isMobile}*/
                            rotate={false}

                        />
                    </Col>
                    <Col className="d-flex justify-content-center mb-4" xs={12} md={6} lg={4}>
                        <CardHelp
                            pathFront="/javel.jpg"
                            pathBack="/mono/qr_afu.jpg"
                            activeKey="car"
                            tittle="Транспорт"
                            textContent="Пошук, закупівля, ремонт,
                                        фарбування автівок для ЗСУ"
                            /*rotate={!isMobile}*/
                            rotate={false}

                        />
                    </Col>
                    <Col className="d-flex justify-content-center mb-4" xs={12} md={6} lg={4}>
                        <CardHelp
                            pathFront="/javel.jpg"
                            pathBack="/mono/qr_afu.jpg"
                            activeKey="product"
                            tittle="Харчування"
                            textContent="Виготовлення субліматів, тушонки, консервів, кондитерських виробів. Постачання
                                    води, овочів, крупи, консервації"
                            /*rotate={!isMobile}*/
                            rotate={false}

                        />
                    </Col>
                </Row>
                {/*-----------------------------------------------Cards help for people------------------------------------------------*/}
                <Row>
                    <h3 className="text-decoration-underline text-center mb-4 mt-5">Допомога ВПО та людям, що опинилися у складних життєвих обставинах</h3>
                    <Col className="d-flex justify-content-center mb-4" xs={12} md={6} lg={4}>
                        <CardHelp
                            pathFront="/product.jpg"
                            pathBack="/product.jpg"
                            tittle="Харчова допомога"
                            textContent="Допомагаємо продуктами
                                        харчування ВПО та СЖО"
                            rotate={false}
                        />
                    </Col>
                    <Col className="d-flex justify-content-center mb-4" xs={12} md={6} lg={4}>
                        <CardHelp
                            pathFront="/clothes.jpg"
                            pathBack="/clothes.jpg"
                            tittle="Одяг та предмети побуту"
                            textContent="Забезпечуємо одягом, взуттям, посудом та іншими предметами першої необхідності"
                            rotate={false}
                        />
                    </Col>
                    <Col className="d-flex justify-content-center mb-4" xs={12} md={6} lg={4}>
                        <CardHelp
                            pathFront="/child.jpg"
                            pathBack="/child.jpg"
                            tittle="Дитячі товари та харчування"
                            textContent="Забезпечення найменших громадян предметами дитячої гігієни,
                                     одягом, дитячими візочками та харчуванням. Співпрацюємо з
                                    дитячими будинками"
                            rotate={false}
                        />
                    </Col>
                    <Col className="d-flex justify-content-center mb-4" xs={12} md={6} lg={12}>
                        <CardHelp
                            pathFront="/lawer.jpg"
                            pathBack="/lawer.jpg"
                            tittle="Юридична допомога"
                            textContent="Надання безкоштовної юр.
                                    допомоги, консультація з приводу майна, відновлення втраченних документів,
                                    оформлення юр.послуг"
                            rotate={false}
                        />
                    </Col>
                </Row>
                {/*---------------------------------------------------------------------------------------------------------------------*/}

                <div className="pb-5">
                    <h3 className="text-center my-5">Наші партнери</h3>
                    <Marquee
                        /*direction="right"*/
                        gradientWidth={isMobile ? 100 : 200}
                        speed={100}
                    >
                        <img style={{marginRight: "50px"}} src={"/fond/partner/zarog.jpg"} height={55} width={222}
                             alt={"молокозавод Зарог"}/>
                        <img style={{marginRight: "50px"}} src={"/fond/partner/kernel-logo.png"} height={55} width={222}
                             alt={"кернел"}/>
                        <img style={{marginRight: "50px"}} src={"/fond/partner/bread.jpg"} height={55} width={222}
                             alt={"хлібозавод лубенський"}/>

                    </Marquee>
                </div>
                <h6 className="text-center">Дуже дякуємо нашим партнерам за постійну допомогу, а також всім , хто долучається до допомоги!
                    ● місцевому населенню та населенню сусідніх громад ● працівникам дитячих садочків та шкіл ● хлібзаводу та молокозаводу
                    ● нашим невтомним волонтерам.
                    Дякуємо кожному, хто зробив внесок в нашу спільну справу. Пам`ятайте, ваша допомога важлива та дуже потрібна нашим хлопцям!<div>
                    РАЗОМ МИ ПЕРЕМОЖЕМО!!!</div></h6>

                {/*<Row className="text-center justify-content-center mt-4 ">
                    <h3>Збір коштів на потреби ЗСУ</h3>
                    <h5>До нас щодня звертаються війскові частини з проханням допомгти їм з придбанням необхідних речей,
                        тактичного обладнання, авто тощо...
                    </h5>
                    <h4>Відкриті проекти</h4>
                    <Row className=" justify-content-center w-75">

                        <PayForm/>

                         <Link href="/news">
                        <Button variant="outline-dark mt-5 mb-5 btn-block" size="lg" style={{height: "100px"}}>
                            Збір речей для бійців на "Нулі"
                        </Button>
                        </Link>

                    </Row>
                </Row>*/}

            </LayoutMain>

        </>
    )
}

/*export async function getServerSideProps() {
    const res = await fetch("https://russianwarship.rip/api/v1/statistics/latest")
    const warData = await res.json()

    return {
        props: {warData}
    }
}*/
