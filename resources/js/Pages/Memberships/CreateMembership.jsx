import { useForm, usePage } from "@inertiajs/react"
import FormStandardButtons from "../../Components/FormStandardButtons"
import InputsMembership from "../../Components/Memberships/InputsMembership"
import Form from "../../Components/Form"

export default function CreateMembership ({dogs, disciplines, statuses}) {
    const { data, setData, post, processing, errors, setError } = useForm({
        dog_id: '',
        discipline_id: '',
        start_date: '',
    })

    const { basePath } = usePage().props

    function handleSubmit(e) {
        e.preventDefault()
        post(`${basePath}/memberships/store`)
    }

    return (
        <div>
            <h1>Lidmaatschap aanvragen</h1>
            <Form onSubmit={handleSubmit}>
            <InputsMembership
                dogs={dogs}
                disciplines={disciplines}
                statuses={statuses}
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
            <FormStandardButtons
                title='Aanvragen'
                processing={processing}
            />
            </Form>
        </div>
    )
}
