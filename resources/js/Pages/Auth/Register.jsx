import { useForm } from "@inertiajs/react"
import SingleInput from "../../Components/SingleInput"
import InputsPassword from "../../Components/InputsPassword"

export default function Register ({postal_codes, sexes}) {
    const { data, setData, post, processing, errors, setError } = useForm({
        first_name: '',
        last_name: '',
        sex_id: -1,
        date_of_birth: '',
        email: '',
        cellphone: '',
        phone: '',
        street: '',
        housenumber: '',
        housenumber_addition: '',
        postal_code_id: -1,
        password: '',
        password_confirmation: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/register')
    }

    //TO DO: Autocomplete combobox component maken (voor sex en postal_code)
    //TO DO: letterlijke field name uit error messages halen

    //form repopulation gebeurt automatisch in Inertia.

    return (
        <div>
            <h1>Registreren</h1>
            <form onSubmit={handleSubmit}>
                <SingleInput
                    field='first_name'
                    title='Voornaam'
                    type='text'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <SingleInput
                    field='last_name'
                    title='Achternaam'
                    type='text'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <div>
                    <label htmlFor="sex_id">Geslacht</label>
                    <select
                        id="sex_id"
                        value={data.sex_id}
                        onChange={e => {
                            setError('sex_id', '')
                            setData('sex_id', e.target.value)
                        }}
                    >
                        <option value="-1" disabled>-- kies een geslacht --</option>
                        {sexes.map(sex => (
                            <option
                                key={sex.id}
                                value={sex.id}
                            >{sex.name}</option>
                        ))}
                    </select>
                    {errors.sex_id && <div>{errors.sex_id}</div>}
                </div>
                <SingleInput
                    field='date_of_birth'
                    title='Geboortedatum'
                    type='date'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <SingleInput
                    field='email'
                    title='Email'
                    type='email'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <SingleInput
                    field='cellphone'
                    title='GSM'
                    type='tel'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <SingleInput
                    field='phone'
                    title='Telefoon'
                    type='tel'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <SingleInput
                    field='street'
                    title='Straat'
                    type='text'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <SingleInput
                    field='housenumber'
                    title='Huisnummer'
                    type='text'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <SingleInput
                    field='housenumber_addition'
                    title='Huisnummer toevoeging'
                    type='text'
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <div>
                    <label htmlFor="postal_code_id">Postcode & gemeente</label>
                    <select
                        id="postal_code_id"
                        value={data.postal_code_id}
                        onChange={e => {
                            setError('postal_code_id', '')
                            setData('postal_code_id', e.target.value)
                        }}
                    >
                        <option value="-1" disabled>-- kies een postcode/gemeente --</option>
                        {postal_codes.map(pc => (
                            <option
                                key={pc.id}
                                value={pc.id}
                            >{`${pc.postal_code} ${pc.municipality}`}</option>
                        ))}
                    </select>
                    {errors.postal_code_id && <div>{errors.postal_code_id}</div>}
                </div>
                <InputsPassword
                    data={data}
                    errors={errors}
                    setData={setData}
                    setError={setError}
                />
                <div>
                    <input disabled={processing} type="submit" value="Verzenden" />
                </div>
            </form>
        </div>
    )
}
