import { Link, usePage } from "@inertiajs/react"

export default function AuthMenu ({}) {
    const { auth } = usePage().props

    return (
        <p>
            {`Welkom, ${auth.user.first_name}.`}
            <Link href="/dashboard">Dashboard</Link>
            {/* <Link href="/editProfile">Profiel bewerken</Link> */}
            {/* <Link href="/editPassword">Wachtwoord wijzigen</Link> */}
            <Link href="/logout" method="post" as="button">Uitloggen</Link>
        </p>
    )
}
