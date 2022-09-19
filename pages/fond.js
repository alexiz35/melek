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

                     <h1 className="text-center">Історія Фонду</h1>

                     <h1 className="text-center">Відзнаки Благодійного фонду "Melek"</h1>

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
                             margin={isMobile?2:20}
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