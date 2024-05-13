import { useForm, usePage } from "@inertiajs/react"
import InputsUser from "../../Components/Auth/InputsUser"
import FormStandardButtons from "../../Components/FormStandardButtons"
import Form from "../../Components/Form"

export default function EditProfile ({postal_codes, sexes}) {
    const { auth } = usePage().props

    const { data, setData, post, processing, errors, setError } = useForm({
        first_name: auth.user.first_name,
        last_name: auth.user.last_name,
        sex_id: auth.user.sex_id,
        date_of_birth: auth.user.date_of_birth,
        email: auth.user.email,
        cellphone: auth.user.cellphone,
        phone: auth.user.phone
            ?auth.user.phone
            : '',
        street: auth.user.street,
        housenumber: auth.user.housenumber,
        housenumber_addition: auth.user.housenumber_addition
            ?auth.user.housenumber_addition
            : '',
        postal_code_id: auth.user.postal_code_id,
        password: '',
        password_confirmation: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/editProfile')
    }

    return (
        <div>
            <Form
                onSubmit={handleSubmit}
                header='Mijn profiel'
            >
                <InputsUser
                    postal_codes={postal_codes}
                    sexes={sexes}
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
