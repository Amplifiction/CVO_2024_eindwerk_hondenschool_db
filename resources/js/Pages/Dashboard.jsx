import { usePage } from "@inertiajs/react"
import ComboboxHeadlessUI from "../Components/ComboboxHeadlessUI"


export default function Home () {
    const { flash } = usePage().props

    return (
        <div>
            <h1>Mijn dashboard</h1>
            <p>{flash.message}</p>
        </div>
    )
}
