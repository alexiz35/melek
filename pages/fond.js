import React from "react";
import Head from "next/head";
import LayoutMain from "../components/LayoutMain";
import Container from "react-bootstrap/Container";
import Gallery from "react-grid-gallery";
import {fondImages} from "../components/FondImages";
import Marquee from "react-fast-marquee/dist";
import Image from "next/image";
import {useMediaQuery} from "react-responsive";

export default function Fond() {
    const isMobile = useMediaQuery({query: "(max-width: 576px)"})
    return (
        <>
            <Head>
                <title>Благодійний фонд Melek</title>
                <meta name="description" content="Фонд Melek - історія, місія та відзнаки"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <LayoutMain>

                <h1 className="text-center mt-4 mb-4">Історія Фонду</h1>
                <h5 className="text-center">
                    Засновник фонду Ірина Подфедько, ще з 2014 року почала займатися волонтерською діяльністю. Молода
                    дівчина разом з невеличкою групою людей у вільний від роботи час почали плести
                    маскувальні сітки для військових. Дуже швидко їх робота набула попиту і
                    замовлень на сітки ставало все більше і більше. Згодом, дізнаючись про діяльність Ірини,
                    місцеві люди та люди з сусідніх громад, що опинилися у скрутних становищах, почали звертатися з
                    різними проханнями про допомогу - кому дах перекрити, кому передати щось до військових частин, кому
                    допомогти з лікуванням. Зіткнувшись с безліччю людських проблем і труднощами з офіційним оформленням
                    допомоги Ірина почала збирати документи для відкриття Благодійний Фонду.
                    "Хто, як не я?!" - чи це не гасло сильної жінки!
                </h5>
                <h5 className="text-center">
                    Назва фонду теж була невипадковою.<br/>
                    Колись Ірина Павлівна дуже допомогла людям, громадянам Туреччини, які потрапили в
                    дорожньо-транспортну аварію під Київом. Їй зателефонували с проханням поспілкуватись з
                    постраждалими, бо Ірина раніше вивчала турецьку мову. Вона перекладала та пояснювала, що робити до
                    прибуття швидкої і після підтримувала з ними зв'язок. Історія для всіх закінчилася добре. Вони і
                    надалі продовжували спілкування та з того часу нові друзі Ірини стали звати її Melek, що в перекладі
                    означає "Янгол". <br/>
                    І коли в 2018 році постало питання назви для благодійного фонду, вибір був однозначним- "MELEK"
                </h5>
                <h5 className="text-center mb-5">
                    От і зараз Благодійний Фонд "Melek" на чолі з незламним "Янголом" та надійною командою волонтерів
                    щодня невпинно виконує свою місію.<br/>
                    Тепер ми міцні, впевненні, сповнені досвідом та готові йти до кінця, ДО ПЕРЕМОГИ!
                </h5>

                <h1 className="text-center mb-4">Відзнаки Благодійного фонду "Melek"</h1>

                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"
                }}>
                    <Gallery
                        images={fondImages}
                        rowHeight={500}
                        enableLightbox={true}
                        enableImageSelection={false}
                        backdropClosesModal={true}
                        margin={isMobile ? 2 : 20}
                    />

                </div>
                {/*<div className="pb-5">
                         <h3 className="text-center my-5">Наші партнери</h3>
                         <Marquee
                             direction="right"
                             gradientWidth={isMobile?100:200}
                             speed={100}
                         >
                             <Image src={"/fond/partner/zarog.png"} height={55} width={222} />
                             <Image src={"/fond/partner/kernel-logo.png"} height={55} width={222} />
                             <Image src={"/fond/partner/breadLubny.png"} height={55} width={222} />

                         </Marquee>
                     </div>*/}


            </LayoutMain>
        </>
    )
}