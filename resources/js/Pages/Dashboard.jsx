import { Link, usePage } from "@inertiajs/react"

export default function Home () {
    const { auth, flash } = usePage().props

    console.log(auth)

    return (
        <div>
            <h1>Mijn dashboard</h1>
            <p>{flash.message}</p>
            {auth.user
                ? <p>{`Welkom, ${auth.user.first_name}.`} <Link href="/logout" method="post">Uitloggen</Link></p>
                : <p><Link href="/register">Registreren</Link> <Link href="/login">Inloggen</Link></p>
            }
        </div>
    )
}
