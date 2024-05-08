import { useForm } from "@inertiajs/react"
import FormStandardButtons from "../../Components/FormStandardButtons"
import InputsDog from "../../Components/Dogs/InputsDog"
import Form from "../../Components/Form"

export default function EditDog ({dog, breeds}) {
    const { data, setData, put, processing, errors, setError } = useForm({
        breed_id: dog.breed_id,
        date_of_birth: dog.date_of_birth,
        name: dog.name,
        sex: dog.sex,
    })

    function handleSubmit(e) {
        e.preventDefault()
        put('/dogs')
    }

    return (
        <div>
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
