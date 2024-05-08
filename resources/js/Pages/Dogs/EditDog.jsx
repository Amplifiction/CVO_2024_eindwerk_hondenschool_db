import { useForm } from "@inertiajs/react"
import FormSubmitButton from "../../Components/FormSubmitButton"
import InputsDog from "../../Components/Dogs/InputsDog"

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
