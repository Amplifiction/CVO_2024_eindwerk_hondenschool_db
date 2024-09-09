import { useForm, usePage } from "@inertiajs/react"
import InputsPassword from "./InputsPassword"
import InputsUserReq from "./InputsUserReq"
import FormStandardButtons from "../FormStandardButtons"
import Form from "../Form"
import InputsUserNullA from "./InputsUserNullA"
import InputsUserNullB from "./InputsUserNullB"
import { useState } from "react"

export default function Register ({postal_codes, sexes}) {
    const { data, setData, post, processing, errors, setError } = useForm({
        first_name: '',
        last_name: '',
        sex_id: '',
        date_of_birth: '',
        email: '',
        cellphone: '',
        phone: '',
        street: '',
        housenumber: '',
        housenumber_addition: '',
        postal_code_id: '',
        password: '',
        password_confirmation: '',
    })

    const { basePath } = usePage().props

    const [showNullables, setShowNullables] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        post(`${basePath}/register`)
    }

    function handleToon(e) {
        e.preventDefault()
        setShowNullables(!showNullables)
    }

    //form repopulation gebeurt automatisch in Inertia.

    return (
        <div className="bg8 padding-20px border-radius-bottom">
            <Form
                onSubmit={handleSubmit}
            >
                <div className="grid-row">
                    <div className="xs-col-12 flex-col">
                        <div>
                            <InputsUserReq
                                data={data}
                                errors={errors}
                                setData={setData}
                                setError={setError}
                            />
                            <InputsPassword
                                data={data}
                                errors={errors}
                                setData={setData}
                                setError={setError}
                            />
                        </div>
                        <div className="flex-row just-center">
                            <button
                                onClick={handleToon}
                                    className="btn-accent m-y-1"
                            >Toon optionele velden</button>
                        </div>
                        {showNullables && <div className="xs-col-12">
                            <InputsUserNullA
                                sexes={sexes}
                                data={data}
                                errors={errors}
                                setData={setData}
                                setError={setError}
                            />
                            <InputsUserNullB
                                postal_codes={postal_codes}
                                data={data}
                                errors={errors}
                                setData={setData}
                                setError={setError}
                            />
                        </div>}
                        <div className="flex-row just-center">
                            <FormStandardButtons
                                title='Bewaren'
                                processing={processing}
                            />
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}
