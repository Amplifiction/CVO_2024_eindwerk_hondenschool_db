import EigenCombobox from "./EigenCombobox"
import SingleInput from "./SingleInput"


export default function InputsUser ({
    postal_codes,
    sexes,
    data,
    errors,
    setData,
    setError
}) {
    const postal_codes_with_names = postal_codes.map(postal_code => {
        return {id: postal_code.id, name: `${postal_code.postal_code} ${postal_code.municipality}`}
    })

    return (
        <>
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
            <EigenCombobox
                field='sex_id'
                title='Geslacht'
                placeholder='kies een geslacht'
                array={sexes}
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
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
            <EigenCombobox
                field='postal_code_id'
                title='Postcode & gemeente'
                placeholder='kies een postcode/gemeente'
                array={postal_codes_with_names}
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
        </>
    )
}
