import { useForm } from "@inertiajs/react"
import FormSubmitButton from "../../Components/FormSubmitButton"
import InputsDog from "../../Components/Dogs/InputsDog"


export default function CreateDog ({breeds}) {
    const { data, setData, post, processing, errors, setError } = useForm({
        breed_id: '',
        date_of_birth: '',
        name: '',
        sex: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/dogs')
    }

    return (
        <div>
            <h1>Hond toevoegen</h1>
            <form onSubmit={handleSubmit}>
                <InputsDog
                    breeds={breeds}
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
