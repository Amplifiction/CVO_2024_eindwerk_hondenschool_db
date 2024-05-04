import { Head, usePage } from "@inertiajs/react";
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
                    {auth.user? <AuthMenu/> : <GuestMenu/>}
                    <hr />
                </header>
                <section>
                    {children}
                </section>
                <footer>
                    <hr />
                    <div>
                        <a href="https://www.hondenschoolderoedel.be/" target="_blank">De Roedel vzw</a> | <a href="https://www.facebook.com/hondenschoolderoedelhelchteren/" target="_blank">Facebook</a>
                    </div>
                    <p>Copyright &copy; 2024 Bart Stevens</p>
                </footer>
            </main>
        </>
    )
}
