import SingleInput from "../SingleInput";


export default function PasswordInputs ({data, errors, setData, setError}) {
    return (
        <>
            <SingleInput
                field='password'
                title='Wachtwoord'
                subtitle='minstens 8 tekens, 1 hoofdletter, 1 kleine letter, 1 cijfer'
                type='password'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
            <SingleInput
                field='password_confirmation'
                title='Wachtwoord confirmatie'
                type='password'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
        </>
    )
}
