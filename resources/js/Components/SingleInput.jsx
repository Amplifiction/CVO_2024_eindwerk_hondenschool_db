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
        <div className="flex-col m-y-1">
            <label
                htmlFor={field}
                className="fw-bold"
            >{title}</label>
            <input
                value={data[field]}
                onChange={e => {
                    setError(field, '')
                    setData(field, e.target.value)
                }}
                type={type}
                name={field}
                id={field}
                placeholder={placeholder}
            />
            {errors[field] &&
                <div className="error">{errors[field]}</div>
            }
        </div>
    )
}


