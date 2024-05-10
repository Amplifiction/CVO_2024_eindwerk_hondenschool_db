import EigenCombobox from "../EigenCombobox"
import SingleInput from "../SingleInput"

export default function InputsDog ({
    dogs,
    disciplines,
    data,
    errors,
    setData,
    setError
}) {
    return (
        <>
            <EigenCombobox
                field='dog_id'
                title='Hond'
                placeholder='kies een hond'
                array={dogs}
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
            <EigenCombobox
                field='discipline_id'
                title='Discipline'
                placeholder='kies een discipline'
                array={disciplines}
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
            <SingleInput
                field='start_date'
                title='Startdatum'
                type='date'
                data={data}
                errors={errors}
                setData={setData}
                setError={setError}
            />
        </>
    )
}
