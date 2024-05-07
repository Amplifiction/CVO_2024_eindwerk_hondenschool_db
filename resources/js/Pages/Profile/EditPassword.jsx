import { useForm, usePage } from "@inertiajs/react"
import InputsPassword from "../../Components/InputsPassword"

export default function EditPassword ({}) {
    const { auth } = usePage().props

    const { data, setData, post, processing, errors, setError } = useForm({
        password: '',
        password_confirmation: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/editPassword')
    }

    // TO DO, eventueel: compo maken voor form button (deze komt ook voor in register, edit profile, ...)

    return (
        <div>
            <h1>Wachtwoord wijzigen</h1>
            <form onSubmit={handleSubmit}>
                <InputsPassword
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <div>
                    <input disabled={processing} type="submit" value="Bewaren" />
                </div>
            </form>
        </div>
    )
}
