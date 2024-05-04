export default function SingleInput ({
    field,
    title,
    type,
    data,
    errors,
    setData,
    setError,
    placeholder=''
}) {
    return (
        <div>
            <label htmlFor={field}>{title}</label>
            <input
                value={data.field}
                onChange={e => {
                    setError(field, '')
                    setData(field, e.target.value)
                }}
                type={type}
                name={field}
                id={field}
                placeholder={placeholder}
            />
            {errors.field && <div>{errors.field}</div>}
        </div>
    )
}


