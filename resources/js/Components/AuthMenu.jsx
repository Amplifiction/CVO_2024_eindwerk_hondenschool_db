import { Link, usePage } from "@inertiajs/react"

export default function AuthMenu ({}) {
    const { auth } = usePage().props

    return (
        <p>
            {`Welkom, ${auth.user.first_name}.`}
            <Link href="/logout" method="post" as="button">Uitloggen</Link>
             {/* TO DO: button CSS om er te doen uitzien als link */}
        </p>
    )
}
