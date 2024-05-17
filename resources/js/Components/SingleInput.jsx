export default function SingleInput ({
    field,
    title='',
    subtitle='',
    type='text',
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
                className={`${required? 'label-required' : 'label-nullable'}`}
            >{title}</label>
            <p className="fs-90 fs-ita">{subtitle}</p>
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
                className={required? 'input-required' : 'input-nullable'}
            />
            {errors[field] &&
                <p className="error">{errors[field]}</p>
            }
        </div>
    )
}


