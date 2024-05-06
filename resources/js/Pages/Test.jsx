import { useForm } from "@inertiajs/react"

import ComboboxHeadlessUI from "../Components/ComboboxHeadlessUI"

import "react-widgets/styles.css";
import Combobox from "react-widgets/Combobox";

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
                {/* <ComboboxHeadlessUI/> */}
                <Combobox
                    hideCaret
                    hideEmptyPopup
                    data={["Red", "Yellow", "Blue", "Orange"]}
                    placeholder="Search for a color"
                />
                <div>
                    <input disabled={processing} type="submit" value="Verzenden" />
                </div>
            </form>
        </>
    )
}
