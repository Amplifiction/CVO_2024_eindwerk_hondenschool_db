export default function FilterInput ({
    type,
    value,
    onChange,
    placeholder}) {

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="filter-input height-40px"
        ></input>
    )
}
