import React from "react";
import Head from "next/head";
import LayoutMain from "../components/LayoutMain";
import Gallery from "react-grid-gallery";
import {productImages} from "../components/ProjectImages";
import {docImages} from "../components/DocImages";
import {useMediaQuery} from "react-responsive";

export default function DocPage() {
    const isMobile = useMediaQuery({query: "(max-width: 576px)"})
    return (
    <>
        <Head>
            <title>Документи благодійного фонду Melek</title>
            <meta name="description" content="документи фонду благодійної допомоги Melek"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <LayoutMain>

            <h1 className="text-center">Документи Благодійного фонду "Melek"</h1>

            <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"
            }}>
                <Gallery
                    images={docImages}
                    rowHeight={500}
                    enableLightbox={true}
                    enableImageSelection={false}
                    backdropClosesModal={true}
                    margin={isMobile?2:20}
                />

            </div>

        </LayoutMain>
    </>
)
}