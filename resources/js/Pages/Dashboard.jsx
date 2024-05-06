import { usePage } from "@inertiajs/react"
import EigenCombobox from "../Components/EigenCombobox"


export default function Home () {
    const { flash } = usePage().props

    return (
        <div>
            <h1>Mijn dashboard</h1>
            <p>{flash.message}</p>
            {/* <EigenCombobox/> */}
        </div>
    )
}
