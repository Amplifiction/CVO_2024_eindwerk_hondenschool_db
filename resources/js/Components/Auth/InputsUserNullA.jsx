import EigenCombobox from "../EigenCombobox"
import SingleInput from "../SingleInput"

// TO DO: Representatievere namen geven dan A en B.

export default function InputsUserNullA ({
    sexes,
    data,
    errors,
    setData,
    setError
}) {

    return (
        <>
            <EigenCombobox
                field='sex_id'
                title='Geslacht'
                placeholder='kies een geslacht'
                array={sexes}
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
                required={false}
            />
            <SingleInput
                field='date_of_birth'
                title='Geboortedatum'
                type='date'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
                required={false}
            />
        </>
    )
}
