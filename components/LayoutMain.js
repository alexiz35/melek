import React from 'react'
import styles from "../styles/LayoutMain.module.css";
import Marquee from "react-fast-marquee/dist";
import MyNavbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import {useMediaQuery} from "react-responsive"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res)=> res.json())

export default function LayoutMain({children}) {
    const prefetchedData = {
        "message": "The data were fetched successfully.",
        "data": {
            "date": "2022-04-14",
            "day": 50,
            "resource": "https://www.facebook.com/MinistryofDefence.UA/posts/295952562717203",
            "stats": {
                "personnel_units": 19900,
                "tanks": 753,
                "armoured_fighting_vehicles": 1968,
                "artillery_systems": 366,
                "mlrs": 122,
                "aa_warfare_systems": 64,
                "planes": 160,
                "helicopters": 144,
                "vehicles_fuel_tanks": 1437,
                "warships_cutters": 7,
                "cruise_missiles": 0,
                "uav_systems": 134,
                "special_military_equip": 25,
                "atgm_srbm_systems": 4
            },
            "increase": {
                "personnel_units": 100,
                "tanks": 14,
                "armoured_fighting_vehicles": 4,
                "artillery_systems": 8,
                "mlrs": 7,
                "aa_warfare_systems": 0,
                "planes": 2,
                "helicopters": 1,
                "vehicles_fuel_tanks": 8,
                "warships_cutters": 0,
                "cruise_missiles": 0,
                "uav_systems": 2,
                "special_military_equip": 0,
                "atgm_srbm_systems": 0
            }
        }
    }
    //const [warString] = useContext(AppContext)
    const isMobile = useMediaQuery({query: "(max-width: 576px)"})
    const {data,error} = useSWR('https://russianwarship.rip/api/v1/statistics/latest',fetcher,{ fallbackData: prefetchedData })

    const warString = data.data
    return (
        <>

            <header className={styles.header}>

                <Marquee
                    /*direction="right"*/
                    speed={120}
                    gradientColor={[250,250,25]}
                    gradientWidth={isMobile?100:300}
                    className={styles.runString}>
                    <span className="mx-3">{warString.day}-й день війни росії проти України, наразі вже знищено {warString.stats.personnel_units} російских
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

