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
        <div className="bg8 padding-20px border-radius-bottom">
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
                <p className="max-width-400p">Voer hier de code in die u heeft gekregen van de eigenaar van de hond waarmee u wil trainen.</p>
            </Form>
        </div>
    )
}
