import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useMemo, useState} from "react";
import Head from "next/head";
import SSRProvider from 'react-bootstrap/SSRProvider';
import AppContext from "../context/AppContext";


function MyApp({Component, pageProps}) {
    const [warString, setWarString] = useState({
        day: "150",
        person: "40000"
    })
    const contextValue = useMemo(()=>{
        return [warString,setWarString]
    },[warString,setWarString])

    return (
        <>
            <Head>
                <title>Melek</title>
                <meta name="keywords" content="text, keywords,rere"/>
                <meta name="description" content="this is my first site on react-next"/>
                <meta charSet="utf-8"/>
            </Head>
            <AppContext.Provider value={contextValue}>
                <SSRProvider>
                    <Component {...pageProps} />
                </SSRProvider>
            </AppContext.Provider>
        </>
    )
}

export default MyApp

