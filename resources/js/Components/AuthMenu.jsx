import { Link, usePage } from "@inertiajs/react"

export default function AuthMenu ({}) {
    const { auth } = usePage().props

    return (
        <div className="flex-row just-between">
            <Link
                href="/dashboard"
                as="button"
                className="btn-gray"
            >Dashboard</Link>
            <div className="m-y-1">{`Welkom, ${auth.user.first_name}.`}</div>
            <Link
                href="/logout"
                method="post"
                as="button"
                className="btn-gray"
            >Uitloggen</Link>

            {/* <Link href="/editProfile">Profiel bewerken</Link> */}
            {/* <Link href="/editPassword">Wachtwoord wijzigen</Link> */}

        </div>
    )
}
