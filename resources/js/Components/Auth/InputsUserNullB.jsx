import EigenCombobox from "../EigenCombobox"
import SingleInput from "../SingleInput"

export default function InputsUserNullB ({
    postal_codes,
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
                field='cellphone'
                title='GSM'
                type='tel'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
                required={false}
            />
            <SingleInput
                field='phone'
                title='Telefoon'
                type='tel'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
                required={false}
            />
            <SingleInput
                field='street'
                title='Straat'
                type='text'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
                required={false}
            />
            <SingleInput
                field='housenumber'
                title='Huisnummer'
                type='text'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
                required={false}
            />
            <SingleInput
                field='housenumber_addition'
                title='Huisnummer toevoeging'
                type='text'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
                required={false}
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
                required={false}
            />
        </>
    )
}
