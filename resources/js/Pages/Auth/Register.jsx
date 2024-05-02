import { useForm } from "@inertiajs/react"

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

    function handleSubmit(e) {
        e.preventDefault()
        post('/register') // TO DO: form submit niet
    }

    return (
        <div>
            <h1>Registreren</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name">Voornaam</label>
                    <input
                        value={data.first_name}
                        onChange={e => {
                            setError('first_name', '')
                            setData('first_name', e.target.value)
                        }}
                        type="text"
                        name="first_name"
                        id="first_name"
                    />
                    {errors.first_name && <div>{errors.first_name}</div>}
                </div>
                <div>
                    <label htmlFor="last_name">Achternaam</label>
                    <input
                        value={data.last_name}
                        onChange={e => {
                            setError('last_name', '')
                            setData('last_name', e.target.value)
                        }}
                        type="text"
                        name="last_name"
                        id="last_name"
                    />
                    {errors.last_name && <div>{errors.last_name}</div>}
                </div>
                <div>
                    <label htmlFor="sex_id">Geslacht</label>
                    <input
                        value={data.sex_id}
                        onChange={e => {
                            setError('sex_id', '')
                            setData('sex_id', e.target.value)
                        }}
                        type="text"
                        id="sex_id"
                        list="sexlist"
                    />
                    <datalist id="sexlist">
                        {sexes.map(sex => (
                            <option
                                key={sex.id}
                                data-value={sex.id}
                                value={sex.name}
                            ></option>
                        ))}
                    </datalist>
                    {errors.sex_id && <div>{errors.sex_id}</div>}
                </div>
                <div>
                    <label htmlFor="date_of_birth">Geboortedatum</label>
                    <input
                        value={data.date_of_birth}
                        onChange={e => {
                            setError('date_of_birth', '')
                            setData('date_of_birth', e.target.value)
                        }}
                        type="date"
                        name="geboortedatum"
                        id="date_of_birth"
                    /> {/*TO DO: field name in error messages */}
                    {errors.date_of_birth && <div>{errors.date_of_birth}</div>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        value={data.email}
                        onChange={e => {
                            setError('email', '')
                            setData('email', e.target.value)
                        }}
                        type="text"
                        name="email"
                        id="email"
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="cellphone">GSM</label>
                    <input
                        value={data.cellphone}
                        onChange={e => {
                            setError('cellphone', '')
                            setData('cellphone', e.target.value)
                        }}
                        type="text"
                        name="cellphone"
                        id="cellphone"
                    />
                    {errors.cellphone && <div>{errors.cellphone}</div>}
                </div>
                <div>
                    <label htmlFor="phone">Telefoon</label>
                    <input
                        value={data.phone}
                        onChange={e => {
                            setError('phone', '')
                            setData('phone', e.target.value)
                        }}
                        type="text"
                        name="phone"
                        id="phone"
                    />
                    {errors.phone && <div>{errors.phone}</div>}
                </div>
                <div>
                    <label htmlFor="street">Straat</label>
                    <input
                        value={data.street}
                        onChange={e => {
                            setError('street', '')
                            setData('street', e.target.value)
                        }}
                        type="text"
                        name="street"
                        id="street"
                    />
                    {errors.street && <div>{errors.street}</div>}
                </div>
                <div>
                    <label htmlFor="housenumber">Huisnummer</label>
                    <input
                        value={data.housenumber}
                        onChange={e => {
                            setError('housenumber', '')
                            setData('housenumber', e.target.value)
                        }}
                        type="text"
                        name="housenumber"
                        id="housenumber"
                    />
                    {errors.housenumber && <div>{errors.housenumber}</div>}
                </div>
                <div>
                    <label htmlFor="housenumber_addition">Huisnummer toevoeging</label>
                    <input
                        value={data.housenumber_addition}
                        onChange={e => {
                            setError('housenumber_addition', '')
                            setData('housenumber_addition', e.target.value)
                        }}
                        type="text"
                        name="housenumber_addition"
                        id="housenumber_addition"
                    />
                    {errors.housenumber_addition && <div>{errors.housenumber_addition}</div>}
                </div>
                <div>
                <label htmlFor="postal_code_id">Postcode</label>
                    <input
                        value={data.postal_code_id}
                        onChange={e => {
                            setError('postal_code_id', '')
                            setData('postal_code_id', e.target.value)
                        }}
                        type="text"
                        id="postal_code_id"
                        list="pclist"
                    />
                    <datalist id="pclist">
                        {postal_codes.map(pc => (
                            <option
                                key={pc.id}
                                data-value={pc.id}
                                value={`${pc.postal_code} ${pc.municipality}`}
                            ></option>
                        ))}
                    </datalist>
                    {errors.postal_code_id && <div>{errors.postal_code_id}</div>}                </div>
                <div>
                    <label htmlFor="password">Wachtwoord</label>
                    <input
                        value={data.password}
                        onChange={e => {
                            setError('password', '')
                            setData('password', e.target.value)
                        }}
                        type="text"
                        name="password"
                        id="password"
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>
                <div>
                    <label htmlFor="password_confirmation">Wachtwoord confirmatie</label>
                    <input
                        value={data.password_confirmation}
                        onChange={e => {
                            setError('password_confirmation', '')
                            setData('password_confirmation', e.target.value)
                        }}
                        type="text"
                        name="password_confirmation"
                        id="password_confirmation"
                    />
                    {errors.password_confirmation && <div>{errors.password_confirmation}</div>}
                </div>
                <div>
                    <input disabled={processing} type="submit" value="Verzenden" />
                </div>

            </form>
        </div>
    )
}
