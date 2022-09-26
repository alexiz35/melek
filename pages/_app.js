import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Head from "next/head";
import SSRProvider from 'react-bootstrap/SSRProvider';


function MyApp({Component, pageProps}) {
   /* const [warString, setWarString] = useState({
        day: "150",
        person: "40000"
    })
    const contextValue = useMemo(()=>{
        return [warString,setWarString]
    },[warString,setWarString])*/

    return (
        <>
            <Head>
                <title>Melek</title>
                <meta name="google-site-verification" content="s4tupUGoWhTamUWR1DS2boQINNrD-dzghB12ZS1KVE8" />
                <meta name="keywords" content="допомога, ЗСУ, фонд допомоги, збір коштів"/>
                <meta name="description" content="допомогти зсу головна місія благодійного фонду Melek"/>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/ico.png"/>
            </Head>

                <SSRProvider>
                    <Component {...pageProps} />
                </SSRProvider>

        </>
    )
}

export default MyApp

