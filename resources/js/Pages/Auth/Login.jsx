import { useForm } from "@inertiajs/react"

export default function Login ({}) {
    const { data, setData, post, processing, errors, setError } = useForm({
        email: '',
        password: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/login')
    }

    //TO DO: SimpleInput component maken

    return (
        <div>
            <h1>Inloggen</h1>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="password">Wachtwoord</label>
                    <input
                        value={data.password}
                        onChange={e => {
                            setError('password', '')
                            setData('password', e.target.value)
                        }}
                        type="password"
                        name="password"
                        id="password"
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>
                <div>
                    <input disabled={processing} type="submit" value="Verzenden" />
                </div>
            </form>
        </div>
    )
}
