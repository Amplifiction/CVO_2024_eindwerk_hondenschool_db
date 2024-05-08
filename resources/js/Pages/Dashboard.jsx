import { usePage, Link } from "@inertiajs/react"
import IndexDogs from "../Components/Dogs/IndexDogs"
export default function Dashboard ({dogs}) {
    const { flash } = usePage().props

    return (
        <div>
            <h1>Mijn dashboard</h1>
            <p>{flash.message}</p>
            <IndexDogs
                dogs={dogs}
            />
        </div>
    )
}
