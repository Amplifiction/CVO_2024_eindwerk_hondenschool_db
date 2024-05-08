import { Head, Link, usePage } from "@inertiajs/react";
import '../../css/main.css'
import AuthMenu from "../Components/AuthMenu"


export function DefaultLayout({children}) {
    const { auth } = usePage().props

    return (
        <>
            <Head>
                <title>Hondenschool DB</title>
                <meta name="description" content="Een beheersysteem voor hondenscholen."/>
            </Head>
            <main>
                <header>
                    {auth.user &&
                    <div className="container"> {/* TO DO: border-bottom */}
                        <AuthMenu/>
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
