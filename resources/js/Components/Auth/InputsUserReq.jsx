import SingleInput from "../SingleInput"

export default function InputsUserReq ({
    data,
    errors,
    setData,
    setError
}) {

    return (
        <>
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
        </>
    )
}
