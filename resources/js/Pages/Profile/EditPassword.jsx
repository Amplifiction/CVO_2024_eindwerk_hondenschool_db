import { useForm, usePage } from "@inertiajs/react"
import InputsPassword from "../../Components/Auth/InputsPassword"
import FormStandardButtons from "../../Components/FormStandardButtons"
import Form from "../../Components/Form"


export default function EditPassword ({}) {
    const { data, setData, post, processing, errors, setError } = useForm({
        password: '',
        password_confirmation: '',
    })

    const { basePath } = usePage().props

    function handleSubmit(e) {
        e.preventDefault()
        post(`${basePath}/editPassword`)
    }

    return (
        <div className="bg8 padding-20px m-y-3">
            <Form
                onSubmit={handleSubmit}
                header='Wachtwoord wijzigen'
            >
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
