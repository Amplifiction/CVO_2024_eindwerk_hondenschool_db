import EigenCombobox from "../EigenCombobox"
import SingleInput from "../SingleInput"

export default function InputsDog ({
    breeds,
    data,
    errors,
    setData,
    setError
}) {
    return (
        <>
            <EigenCombobox
                field='breed_id'
                title='Ras'
                placeholder='kies een ras'
                array={breeds}
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
                field='name'
                title='Naam'
                type='text'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
            <EigenCombobox
                field='sex'
                title='Geslacht'
                placeholder='kies een geslacht'
                array={[{id: 0, name: 'reu'}, {id: 1, name: 'teef'}]}
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
        </>
    )
}
