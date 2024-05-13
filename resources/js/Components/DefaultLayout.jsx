import { Head, Link, usePage } from "@inertiajs/react";
import '../../css/main.css'
import HeaderContent from "../Components/HeaderContent"


export function DefaultLayout({children}) {
    const { auth } = usePage().props

    return (
        <>
            <Head>
                <title>Hondenschool DB</title>
                <meta name="description" content="Een beheersysteem voor hondenscholen."/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <main>
                <header>
                    {auth.user &&
                    <div className="container "> {/* TO DO: border-bottom */}
                        <HeaderContent/>
                    </div>
                    }
                </header>
                <section className="container">
                    {children}
                </section>
                <footer>
                    {/* TO DO: border-top */}
                    <div className="container">
                        <a href="https://www.hondenschoolderoedel.be/" target="_blank">De Roedel vzw</a> | <a href="https://www.facebook.com/hondenschoolderoedelhelchteren/" target="_blank">Facebook</a>
                        <p>&copy; 2024 Bart Stevens</p>
                    </div>
                </footer>
            </main>
        </>
    )
}
