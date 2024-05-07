import { useState, useRef } from "react"

// TO DO: dit werkt voor geslachten, omdat hier enkel name moet worden weergegeven. Voor postcodes is dit echter postcode+' '+gemeente.
// Oplossing: aangepaste array doorgeven. Of prop voorzien.

export default function EigenCombobox ({
    field,
    title,
    placeholder='',
    array,
    data,
    errors,
    setData,
    setError,
}) {
    const [showUl, setShowUl] = useState(false)
    const [inputState, setInputState] = useState('') // state is nodig voor de two way binding van <input>
    const inputRef = useRef('') // ref is nodig omdat handleSelect variabelen aanpast die handleBlur vlak daarna nodig heeft. Owv asynchrone werking React krijgt handleBlur verouderde waarden door indien er wordt gebruik gemaakt van state.
    const optionSelectedRef = useRef(false)

    const filteredArray = (
        inputState
        ? array.filter(item => item.name.toLowerCase().includes(inputState.toLowerCase()))
        : array
    )

    const handleSelect = (name, id) => {
        inputRef.current = name
        setInputState(name)
        setData(field, id)
        setShowUl(false)
        optionSelectedRef.current = true
    }

    const handleBlur = () => {
        setTimeout(() => {
            setShowUl(false)
            if (!optionSelectedRef.current) { // wat als gebruiker niet in ul klikt, maar de gewenste waarde integraal typt?
                const found = array.find(item => item.name === inputRef.current)
                if (found) {
                    setData(field, found.id)
                } else {
                    alert(`${title}: ${inputRef.current} niet gevonden.`)
                    setData(field, '')
                    setInputState('')
                    inputRef.current = ''
                }
            }
            optionSelectedRef.current = false;
        }, 300) //Timeout is nodig om te voorkomen dat ul verdwijnt voor erop wordt geklikt.
    }

    const handleChange = (e) => {
        setError(field, '')
        setInputState(e.target.value)
        inputRef.current=e.target.value
    }

    return (
        <div
            className="flex-col m-y-1"
            onBlur={handleBlur}
        > {/* React ondersteunt geen onfocusout. */}
            <label
                htmlFor={`${field}_input`}
                className="fw-bold"
            >{title}</label>
            <input
                id={`${field}_input`}
                type="text"
                placeholder={placeholder}
                value={inputState}
                onChange={e => handleChange(e) }
                onFocus={() => setShowUl(true)}
            />
            <input
                id={field} //$request->{title}_id will be used in a Laravel controller.
                type="hidden"
                value={data[field]}
            />
            {errors[field] &&
                <div className="error">{errors[field]}</div>
            }
            {showUl &&
                <ul style={{ listStyleType: 'none'}}>
                    {filteredArray.map(item => (
                        <li
                            key={item.id}
                            onClick={() => handleSelect(item.name, item.id)}
                        >{item.name}</li>
                    ))}
                </ul>
            }
        </div>
    )
}
