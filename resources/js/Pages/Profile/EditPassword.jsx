import { useForm, usePage } from "@inertiajs/react"
import InputsPassword from "../../Components/Auth/InputsPassword"
import FormStandardButtons from "../../Components/FormStandardButtons"
import Form from "../../Components/Form"


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
            <Form onSubmit={handleSubmit}>
                <InputsPassword
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <FormStandardButtons
                    title='Bewaren'
                    processing={processing}
                />
            </Form>
        </div>
    )
}
