import React from "react";
import Head from "next/head";
import Accordion from "react-bootstrap/Accordion"
import LayoutMain from "../components/LayoutMain";
import Container from "react-bootstrap/Container";
import styles from "../styles/Projects.module.css";
import Gallery from "react-grid-gallery";
import {medicImages, ammunImages, opticImages, autoImages, productImages} from "../components/ProjectImages";
import {useRouter} from "next/router";
import Link from "next/link";


export default function Projects() {

    const router = useRouter()


    return (
        <>
            <Head>
                <title>Payment</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <LayoutMain>
                <Container>
                    <h1 id="startProject">Наші проекти</h1>
                    <Accordion defaultActiveKey={router.query.activeKey} >
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
                        <Accordion.Item eventKey="optic" >
                            <Accordion.Header >Оптика</Accordion.Header>
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
                    </Accordion>
                    <h2><a href="https://www.facebook.com/groups/779859472357564">Детальніше на Facebook</a></h2>
                </Container>
            </LayoutMain>

        </>
    )
}