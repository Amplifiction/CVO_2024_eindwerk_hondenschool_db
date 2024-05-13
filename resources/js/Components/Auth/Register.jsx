import { useForm } from "@inertiajs/react"
import InputsPassword from "./InputsPassword"
import InputsUser from "./InputsUser"
import FormStandardButtons from "../FormStandardButtons"
import Form from "../Form"

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
            <Form
                onSubmit={handleSubmit}
            >
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
                <FormStandardButtons
                    title='Registreren'
                    processing={processing}
                />
            </Form>
        </div>
    )
}
