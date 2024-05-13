import { useForm, usePage } from "@inertiajs/react"
import InputsUserReq from "../../Components/Auth/InputsUserReq"
import FormStandardButtons from "../../Components/FormStandardButtons"
import Form from "../../Components/Form"
import InputsUserNullA from "../../Components/Auth/InputsUserNullA"
import InputsUserNullB from "../../Components/Auth/InputsUserNullB"

export default function EditProfile ({postal_codes, sexes}) {
    const { auth } = usePage().props

    const { data, setData, post, processing, errors, setError } = useForm({
        first_name: auth.user.first_name,
        last_name: auth.user.last_name,
        sex_id: auth.user.sex_id,
        date_of_birth: auth.user.date_of_birth,
        email: auth.user.email,
        cellphone: auth.user.cellphone,
        phone: auth.user.phone
            ?auth.user.phone
            : '',
        street: auth.user.street,
        housenumber: auth.user.housenumber,
        housenumber_addition: auth.user.housenumber_addition
            ?auth.user.housenumber_addition
            : '',
        postal_code_id: auth.user.postal_code_id,
        password: '',
        password_confirmation: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/editProfile')
    }

    return (
        <div className="bg5 padding-20px m-y-3">
            <Form
                onSubmit={handleSubmit}
                header='Mijn profiel'
            >
                <div className="grid-row">
                    <div className="xs-col-12 m-col-6 padding-20px">
                        <InputsUserReq
                            data={data}
                            errors={errors}
                            setData={setData}
                            setError={setError}
                        />
                        <InputsUserNullA
                            sexes={sexes}
                            data={data}
                            errors={errors}
                            setData={setData}
                            setError={setError}
                        />
                    </div>
                    <div className="xs-col-12 m-col-6 padding-20px">
                        <InputsUserNullB
                            postal_codes={postal_codes}
                            data={data}
                            errors={errors}
                            setData={setData}
                            setError={setError}
                        />
                    </div>
                </div>
                <div className="grid-row">
                    <div className="xs-col-12 flex-row just-center padding-20">
                        <FormStandardButtons
                            title='Bewaren'
                            processing={processing}
                        />
                    </div>
                </div>
            </Form>
        </div>
    )
}
