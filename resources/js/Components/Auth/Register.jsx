import { useForm } from "@inertiajs/react"
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

    const [showNullables, setShowNullables] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        post('/register')
    }

    function handleToon(e) {
        e.preventDefault()
        setShowNullables(!showNullables)
    }

    //form repopulation gebeurt automatisch in Inertia.

    return (
        <div>
            <Form
                onSubmit={handleSubmit}
            >
                <div className="grid-row">
                    <div className="xs-col-12 m-col-6 bg2 padding-20 flex-col just-between">
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
                        <div className="flex-col just-center align-center">
                            <div>
                                <button
                                    onClick={handleToon}
                                        className="btn-accent m-y-1"
                                >Toon optionele velden</button>
                            </div>
                            <FormStandardButtons
                                title='Bewaren'
                                processing={processing}
                            />
                        </div>
                    </div>
                    {showNullables && <div className="xs-col-12 m-col-6 bg2 padding-20">
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
                    </div> }
                </div>
            </Form>
        </div>
    )
}
