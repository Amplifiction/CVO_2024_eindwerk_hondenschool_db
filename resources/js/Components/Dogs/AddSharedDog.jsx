import { useForm } from "@inertiajs/react"
import Form from "../../Components/Form"
import SingleInput from "../SingleInput"
import FormStandardButtons from "../FormStandardButtons"

export default function AddSharedDog ({}) {
    const { data, setData, post, processing, errors, setError } = useForm({
        uuid: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post('/dogs/addshared')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <SingleInput
                field='uuid'
                title='Code'
                type='text'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
            <FormStandardButtons
                title='Toevoegen'
                processing={processing}
            />
            <p>Voer hier de code in die u heeft gekregen van de eigenaar van de hond waarmee u wil trainen.</p>
            <p>9c005fc2-c807-4626-996d-4afcc9ed52b6</p>
        </Form>
    )
}
