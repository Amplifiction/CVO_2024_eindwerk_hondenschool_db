
import { useForm } from "@inertiajs/react"
import SingleInput from "../SingleInput"
import FormStandardButtons from "../FormStandardButtons"
import Form from "../Form"

export default function Login ({}) {
    const { data, setData, post, processing, errors, setError } = useForm({
        email: '',
        password: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/login')
    }

    return (
        <div className="bg8 padding-20px border-radius-bottom">
            <Form
                onSubmit={handleSubmit}
            >
                <SingleInput
                    field='email'
                    title='Email'
                    type='email'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <SingleInput
                    field='password'
                    title='Wachtwoord'
                    type='password'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
            <input
                disabled={processing}
                type="submit"
                value="Inloggen"
                className="btn-green"
            />
            </Form>
        </div>
    )
}
