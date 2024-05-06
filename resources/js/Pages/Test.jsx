import { useForm } from "@inertiajs/react"
import ComboboxHeadlessUI from "../Components/ComboboxHeadlessUI"

export default function test () {
    const { data, setData, post, processing, errors, setError } = useForm({

    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/test')
    }

    return (
        <>
            <h1>TEST</h1>
            <form onSubmit={handleSubmit}>
                <ComboboxHeadlessUI/>
                <div>
                    <input disabled={processing} type="submit" value="Verzenden" />
                </div>
            </form>
        </>
    )
}
