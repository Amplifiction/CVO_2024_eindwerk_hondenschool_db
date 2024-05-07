import { useForm } from "@inertiajs/react"
import InputsPassword from "./InputsPassword"
import InputsUser from "./InputsUser"
import FormSubmitButton from "../FormSubmitButton"

export default function Register ({postal_codes, sexes}) {
    const { data, setData, post, processing, errors, setError } = useForm({
        first_name: '',
        last_name: '',
        sex_id: '',
        date_of_birth: '',
        email: '',
        cellphone: '',
        phone: '',
        street: '',
        housenumber: '',
        housenumber_addition: '',
        postal_code_id: '',
        password: '',
        password_confirmation: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/register')
    }

    //form repopulation gebeurt automatisch in Inertia.

    return (
        <div>
            <h1>Registreren</h1>
            <form onSubmit={handleSubmit}>
                <InputsUser
                    postal_codes={postal_codes}
                    sexes={sexes}
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <InputsPassword
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <FormSubmitButton
                    title='Registreren'
                    processing={processing}
                />
            </form>
        </div>
    )
}
