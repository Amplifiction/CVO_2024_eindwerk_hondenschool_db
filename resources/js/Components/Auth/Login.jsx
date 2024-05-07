import { useForm } from "@inertiajs/react"
import SingleInput from "../SingleInput"
import FormSubmitButton from "../FormSubmitButton"

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
        <div>
            <h1>Inloggen</h1>
            <form onSubmit={handleSubmit}>
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
                <FormSubmitButton
                    title='Inloggen'
                    processing={processing}
                />
            </form>
        </div>
    )
}
