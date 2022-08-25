import React from 'react'
import Head from "next/head";
import styles from "../styles/LayoutMain.module.css";
import Marquee from "react-fast-marquee/dist";
import Navbar2 from "./Navbar";
import Container from "react-bootstrap/Container";

export default function LayoutMain({children}) {
    return (
        <>
            <header className={styles.header}>

                <Marquee direction="right" speed={180} className={styles.runString}>
                    177-й день війни росії проти України, наразі вже знищено 45000 російских загарбників
                </Marquee>

                <Navbar2/>

            </header>


            <main className={styles.container}>
                <Container className="justify-content-center">
                {children}
                </Container>
            </main>


            {/*<Footer/>*/}
        </>

    )
}