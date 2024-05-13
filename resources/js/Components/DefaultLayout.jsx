import { Head, } from "@inertiajs/react";
import '../../css/main.css'
import HeaderContent from "../Components/HeaderContent"


export function DefaultLayout({children}) {
    const backgrounds = ['bg-rect-1', 'bg-rect-2', 'bg-rect-3', 'bg-rect-4', 'bg-rect-5', 'bg-rect-6']
    //TO DO: overbodige backgrounds verwijderen
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const randomBackground2 = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    return (
        <>
            <Head>
                <title>Hondenschool DB</title>
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
                    className="container">
                    {children}
                </section>
                <footer
                    className= "background-image"
                    style={{backgroundImage: `url('/images/${randomBackground2}.jpg')`}}
                >
                    <div className="padding-20p">
                        <a href="https://www.hondenschoolderoedel.be/" target="_blank">De Roedel vzw</a> | <a href="https://www.facebook.com/hondenschoolderoedelhelchteren/" target="_blank">Facebook</a>
                        <p>&copy; 2024 Bart Stevens</p>
                    </div>
                </footer>
            </main>
        </>
    )
}
