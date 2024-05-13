import { Head, } from "@inertiajs/react";
import '../../css/main.css'
import HeaderContent from "../Components/HeaderContent"
import FooterContent from "./FooterContent";


export function DefaultLayout({children}) {
    const backgrounds = ['bg-rect-1', 'bg-rect-2', 'bg-rect3']
    //TO DO: overbodige backgrounds verwijderen
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    return (
        <>
            <Head>
                <title>Hondenschool DB</title>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Een beheersysteem voor hondenscholen."/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <main>
                <header
                    className= "background-image"
                    style={{backgroundImage: `url('/images/${randomBackground}.jpg')`}}
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
                <footer className= "bg2">
                    <div className="container">
                        <FooterContent/>
                    </div>
                </footer>
            </main>
        </>
    )
}
