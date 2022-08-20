import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Head from "next/head";


function MyApp({Component, pageProps}) {


    return (
        <>
            <Head>
                <title>Melek</title>
                <meta name="keywords" content="text, keywords,rere"/>
                <meta name="description" content="this is my first site on react-next"/>

                <meta charSet="utf-8"/>
            </Head>

            <Component {...pageProps} />

        </>
    )
}

export default MyApp
