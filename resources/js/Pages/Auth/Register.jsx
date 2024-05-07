import { useForm } from "@inertiajs/react"
import InputsPassword from "../../Components/InputsPassword"
import InputsUser from "../../Components/InputsUser"

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
                <div>
                    <input disabled={processing} type="submit" value="Verzenden" />
                </div>
        </form>

        </div>
    )
}
