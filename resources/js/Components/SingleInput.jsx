export default function SingleInput ({
    field,
    title='',
    type,
    data,
    errors,
    setData,
    setError,
    placeholder='',
    required=true,
}) {
    return (
        <div className="flex-col m-y-1">
            <label
                htmlFor={field}
                className={`fw-bold ${required? 'fc-required' : 'fc-nullable'}`}
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
                className={required? 'required' : 'nullable'}
            />
            {errors[field] &&
                <div className="error">{errors[field]}</div>
            }
        </div>
    )
}


