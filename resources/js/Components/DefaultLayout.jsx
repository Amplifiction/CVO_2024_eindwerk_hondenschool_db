import { Head, Link, usePage } from "@inertiajs/react";
import '../../css/main.css'
import GuestMenu from "../Components/GuestMenu"
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
                    <div className="m-xy-1">
                        <Link href="/">Dashboard</Link>
                        {auth.user? <AuthMenu/> : <GuestMenu/>}
                    </div>
                    <hr />
                </header>
                <section className="container">
                    {children}
                </section>
                <footer>
                    <hr />
                    <div className="m-xy-1">
                        <a href="https://www.hondenschoolderoedel.be/" target="_blank">De Roedel vzw</a> | <a href="https://www.facebook.com/hondenschoolderoedelhelchteren/" target="_blank">Facebook</a>
                        <p>Copyright &copy; 2024 Bart Stevens</p>
                    </div>
                </footer>
            </main>
        </>
    )
}
