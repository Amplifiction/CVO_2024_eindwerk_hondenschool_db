import { useState, useRef, useEffect } from "react"

// TO DO, eventueel: on key down 'enter' in input: if filteredArray.length > 0, select filteredArray[0]
// TO DO, eventueel: autocomplete van browser triggert geen update van inputRef/setInputState.

export default function EigenCombobox ({
    field,
    title,
    placeholder='',
    array, // moet een name en id bevatten.
    data,
    errors,
    setData,
    setError,
    required=true,
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

    useEffect(() => {
        if (data[field] !== undefined) {
            const found = array.find(item => item.id === data[field])
            if (found) {
                setInputState(found.name)
            }
        }
    }, []) // Doel: velden repopulaten. Loopt enkel on mount.

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
            if (inputRef.current ==='') {
                setData(field, '')
            }
            if (!optionSelectedRef.current && inputRef.current!=='') { // wat als gebruiker niet in ul klikt, maar de gewenste waarde integraal typt?
                const found = array.find(item => item.name === inputRef.current)
                if (found) {
                    setData(field, found.id)
                } else {
                    alert(`${title}: ${inputRef.current} niet gevonden.`) // TO DO, eventueel: elegantere manier vinden om dan alert. Modal in default Layout + event emitten om een of andere global state aan te passen?
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
                className={`fw-bold ${required? 'fc1' : 'fc2'}`}
            >{title}</label>
            <input
                id={`${field}_input`}
                type="text"
                placeholder={placeholder}
                value={inputState}
                onChange={e => handleChange(e) }
                onFocus={() => setShowUl(true)}
                className={required? 'required' : 'nullable'}
            />
            {/* TO DO: scroll knop toevoegen */}
            <input
                id={field}
                type="hidden"
                value={data[field]}
            />
            {errors[field] &&
                <div className="error">{errors[field]}</div>
            }
            {showUl &&
                <div className="comboboxDropdown">
                    <div>
                        {filteredArray.map(item => (
                            <div
                                key={item.id}
                                onClick={() => handleSelect(item.name, item.id)}
                                className="table-row"
                            >{item.name}</div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
