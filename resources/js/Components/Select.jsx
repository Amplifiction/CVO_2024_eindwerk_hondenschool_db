// NOG NIET GEBRUIKT/GETEST

export default function Select ({
    field_id,
    field_array,
    title='',
    data,
    errors,
    setData,
    setError,
}) {
    return(
        <div className="flex-col m-y-05">
            <label htmlFor={field_id}>{title}</label>
            <select
                id={field_id}
                defaultValue={data[field_id]}
                onChange={e => {
                    setError(field_id, '')
                    setData(field_id, e.target.value)
                }}
            >
                {field_array.map (item =>
                    <option
                        key={item.id}
                        value={item.id}
                    >{item.name}</option>
                )}
            </select>
            {errors[field_id] &&
                <div className="error">{errors[field_id]}</div>
            }
        </div>
    )
}
