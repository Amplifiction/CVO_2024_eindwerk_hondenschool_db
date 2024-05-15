export default function FilterInput ({value, onChange, placeholder}) {

    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="filter-input"
        ></input>
    )
}
