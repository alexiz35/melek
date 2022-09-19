import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";

export default function PayCard (props) {
    const router = useRouter()

    const handleClick = ()=>{
        switch (props.id) {
            case "afu": router.push("https://send.monobank.ua/jar/2aYBaMCcHr");break;
            case "auto": router.push("https://send.monobank.ua/jar/5qRWqWNqgH");break;
            case "product": router.push("https://send.monobank.ua/jar/8Ckdp87Rvz");break;
        }
    }
    return (
        <>
            <Image src={props.url} width={300} height={339} onClick={handleClick}/>
        </>
    )
}