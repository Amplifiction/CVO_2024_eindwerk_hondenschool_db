import { usePage, Link } from "@inertiajs/react"
export default function Dashboard ({}) {
    const { flash } = usePage().props

    return (
        <div>
            <h1>Mijn dashboard</h1>
            <p>{flash.message}</p>
            <Link href="/dogs/create">Hond toevoegen</Link>
        </div>
    )
}
