import React from "react";
import Head from "next/head";
import Accordion from "react-bootstrap/Accordion"
import LayoutMain from "../components/LayoutMain";
import Container from "react-bootstrap/Container";
import styles from "../styles/Projects.module.css";
import Gallery from "react-grid-gallery";
import {
    medicImages,
    ammunImages,
    opticImages,
    autoImages,
    productImages,
    fondImages
} from "../components/ProjectImages";
import {useRouter} from "next/router";
import fond from "./fond";
import Row from "react-bootstrap/Row";
import PayCard from "../components/PayCard";


export default function Projects(props) {

    const router = useRouter()


    return (
        <>
            <Head>
                <title>Відкриті проекти фонду Melek</title>
                <meta name="description" content="відправляємо амуницію, продукти, ремонтуємо авто"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <LayoutMain>
                <Container>
                    <h1 id="startProject">Наші проекти</h1>
                    <Accordion defaultActiveKey={props.activeKey}>
                        <Accordion.Item eventKey="medicine">
                            <Accordion.Header>Польова війскова медицина</Accordion.Header>
                            <Accordion.Body>
                                <div style={{
                                    display: "block",
                                    minHeight: "1px",
                                    width: "100%",
                                    border: "1px solid #ddd",
                                    overflow: "auto"
                                }}>
                                    <Gallery
                                        images={medicImages}
                                        enableLightbox={true}
                                        enableImageSelection={false}
                                        backdropClosesModal={true}
                                    />

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="ammunition">
                            <Accordion.Header>Амуніція</Accordion.Header>
                            <Accordion.Body>
                                <div style={{
                                    display: "block",
                                    minHeight: "1px",
                                    width: "100%",
                                    border: "1px solid #ddd",
                                    overflow: "auto"
                                }}>
                                    <Gallery
                                        images={ammunImages}
                                        enableLightbox={true}
                                        enableImageSelection={false}
                                        backdropClosesModal={true}
                                    />

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="optic">
                            <Accordion.Header>Оптика</Accordion.Header>
                            <Accordion.Body>
                                <div id="optic" style={{
                                    display: "block",
                                    minHeight: "1px",
                                    width: "100%",
                                    border: "1px solid #ddd",
                                    overflow: "auto"
                                }}>
                                    <Gallery
                                        images={opticImages}
                                        enableLightbox={true}
                                        enableImageSelection={false}
                                        backdropClosesModal={true}
                                    />

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="car">
                            <Accordion.Header>Транспорт</Accordion.Header>
                            <Accordion.Body>
                                <div style={{
                                    display: "block",
                                    minHeight: "1px",
                                    width: "100%",
                                    border: "1px solid #ddd",
                                    overflow: "auto"
                                }}>
                                    <Gallery
                                        images={autoImages}
                                        enableLightbox={true}
                                        enableImageSelection={false}
                                        backdropClosesModal={true}
                                    />

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="product">
                            <Accordion.Header>Харчування</Accordion.Header>
                            <Accordion.Body>
                                <div style={{
                                    display: "block",
                                    minHeight: "1px",
                                    width: "100%",
                                    border: "1px solid #ddd",
                                    overflow: "auto"
                                }}>
                                    <Gallery
                                        images={productImages}
                                        enableLightbox={true}
                                        enableImageSelection={false}
                                        backdropClosesModal={true}
                                    />

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="fond">
                            <Accordion.Header>Життя Фонду Melek</Accordion.Header>
                            <Accordion.Body>
                                <div style={{
                                    display: "block",
                                    minHeight: "1px",
                                    width: "100%",
                                    border: "1px solid #ddd",
                                    overflow: "auto"
                                }}>
                                    <Gallery
                                        images={fondImages}
                                        enableLightbox={true}
                                        enableImageSelection={false}
                                        backdropClosesModal={true}
                                    />

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <h2><a href="https://www.facebook.com/groups/779859472357564">Детальніше на Facebook</a></h2>

                    <Row className="text-center justify-content-center mt-4">
                        <h3 >Допомогти легко</h3>
                        <h4>Скануйте QR-код або тиснить на нього</h4>
                        <Row className="mt-4 mb-5 justify-content-md-between justify-content-center gap-4">
                        <PayCard
                            url={"/mono/qr_afu.jpg"}
                            id ={"afu"}
                        />
                        <PayCard
                            url={"/mono/qr_auto.jpg"}
                            id ={"auto"}
                        />
                        <PayCard
                            url={"/mono/qr_product.jpg"}
                            id ={"product"}
                        />
                        </Row>
                    </Row>
                </Container>
            </LayoutMain>

        </>
    )
}


Projects.defaultProps = {
    activeKey: "fond",
}

Projects.getInitialProps = ({query}) => {
    return {
        activeKey: query.activeKey
    }
}