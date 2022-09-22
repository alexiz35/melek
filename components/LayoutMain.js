import React, {useContext} from 'react'
import Head from "next/head";
import styles from "../styles/LayoutMain.module.css";
import Marquee from "react-fast-marquee/dist";
import MyNavbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import AppContext from "../context/AppContext";
import {useMediaQuery} from "react-responsive"

export default function LayoutMain({children}) {

    const [warString] = useContext(AppContext)
    const isMobile = useMediaQuery({query: "(max-width: 576px)"})


    return (
        <>

            <header className={styles.header}>

                <Marquee
                    /*direction="right"*/
                    speed={120}
                    gradientColor={[250,250,25]}
                    gradientWidth={isMobile?100:300}
                    className={styles.runString}>
                    <span className="mx-3">{warString.day}-й день війни росії проти України, наразі вже знищено {warString.person} російских
                        загарбників.</span>
                </Marquee>

                <MyNavbar/>

            </header>


            <main className={styles.container}>
                <Container className="justify-content-center">
                    {children}
                </Container>
            </main>

            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </>

    )
}

