import { Head, } from "@inertiajs/react";
import '../../css/main.css'
import HeaderContent from "../Components/HeaderContent"
import FooterContent from "./FooterContent";
import { usePage } from '@inertiajs/react';


export function DefaultLayout({children}) {
    const backgrounds = ['bg-rect-1', 'bg-rect-2', 'bg-rect-3']
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)]
    const { basePath } = usePage().props

    return (
        <>
            <Head>
                {/* TO DO, eventueel: hoe language instellen? (Normaal gezien <html lang="en">) */}
                <title>Hondenschool DB</title>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Een beheersysteem voor hondenscholen."/>
                <link rel="icon" type="image/x-icon" href={`${basePath}/images/logo-nobg-white.png`}/>
                <link
                    rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
                    crossorigin="anonymous" referrerpolicy="no-referrer"
                />
            </Head>
            <main className="wrapper">
                <header
                    className= "background-image border-radius-bottom padding-20px"
                    style={{backgroundImage: `url('${basePath}/images/${randomBackground}.jpg')`}}
                >
                    <div className="container">
                        <HeaderContent/>
                    </div>
                </header>
                <section
                    className="container flex-col align-center">
                        <div className="">
                            {children}
                        </div>
                </section>
                <footer className= "border-radius-top padding-20px">
                    <div className="container">
                        <FooterContent/>
                    </div>
                </footer>
            </main>
        </>
    )
}
