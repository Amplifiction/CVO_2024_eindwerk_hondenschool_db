import { useForm, usePage } from "@inertiajs/react"
import InputsPassword from "../../Components/Auth/InputsPassword"
import FormSubmitButton from "../../Components/FormSubmitButton"


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
                <FormSubmitButton
                    title='Bewaren'
                    processing={processing}
                />
            </form>
        </div>
    )
}