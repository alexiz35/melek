import Head from 'next/head'
import React from "react";
import Container from "react-bootstrap/Container";
import LayoutMain from "../components/LayoutMain";


export default function Error() {
    return (
        <>
            <Head>
                <title>404</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <LayoutMain>

                <Container>

                    <h1>Error 404</h1>

                </Container>

            </LayoutMain>

        </>
    )
}