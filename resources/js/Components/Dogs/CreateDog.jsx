import { useForm } from "@inertiajs/react"
import FormStandardButtons from "../../Components/FormStandardButtons"
import InputsDog from "../../Components/Dogs/InputsDog"
import Form from "../../Components/Form"

export default function CreateDog ({breeds}) {
    const { data, setData, post, processing, errors, setError } = useForm({
        breed_id: '',
        date_of_birth: '',
        name: '',
        sex: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/dogs/store')
    }

    return (
        <div className="bg8 padding-20px border-radius-bottom">
            <Form onSubmit={handleSubmit}>
                <InputsDog
                    breeds={breeds}
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
