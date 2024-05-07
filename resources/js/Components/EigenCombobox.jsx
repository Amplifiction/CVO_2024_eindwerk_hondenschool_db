import { useState, useRef } from "react"

// TO DO: dit werkt voor geslachten, omdat hier enkel name moet worden weergegeven. Voor postcodes is dit echter postcode+' '+gemeente.
// Oplossing: aangepaste array doorgeven. Of prop voorzien.

export default function EigenCombobox ({
    // title,
    // array,
    // field,
    // data,
    // errors,
    // setData,
    // setError,
    // placeholder=''
}) {
    const [returnValue, setReturnValue] = useState ('')
    const [showUl, setShowUl] = useState(false)
    const optionSelectedRef = useRef(false)
    const [inputState, setInputState] = useState('') // state is nodig voor de two way binding van <input>
    const inputRef = useRef('') // ref is nodig omdat handleSelect variabelen aanpast die handleBlur vlak daarna nodig heeft. Owv asynchrone werking React krijgt handleBlur verouderde waarden door indien er wordt gebruik gemaakt van state.

    //TURN INTO PROPS
        const title = 'test'
        const array = [
            { id: 1, name: 'eins' },
            { id: 2, name: 'zwei' },
            { id: 3, name: 'polizei' },
        ]
    //end of props

    const filteredArray = (
        inputState
        ? array.filter(item => item.name.toLowerCase().includes(inputState.toLowerCase()))
        : array
    )

    const handleSelect = (name, id) => {
        inputRef.current = name
        setInputState(name)
        setReturnValue(id)
        setShowUl(false)
        optionSelectedRef.current = true
    }

    const handleBlur = () => {
        setTimeout(() => {
            setShowUl(false)
            if (!optionSelectedRef.current) { // wat als gebruiker niet in ul klikt, maar de gewenste waarde integraal typt?
                const found = array.find(item => item.name === inputRef.current)
                if (found) {
                    setReturnValue(found.id)
                } else {
                    alert('No matches found.')
                    setReturnValue('')
                    setInputState('')
                    inputRef.current = ''
                }
            }
            optionSelectedRef.current = false;
        }, 300) //Timeout is nodig om te voorkomen dat ul verdwijnt voor erop wordt geklikt.
    }

    const handleChange = (e) => {
        setInputState(e.target.value)
        inputRef.current=e.target.value
    }

    return (
        <div
            className="flex-col m-y-1"
            onBlur={handleBlur}
        > {/* React ondersteunt geen onfocusout. */}
            <label
                htmlFor={`${title}_input`}
                className="fw-bold"
            >{title}</label>
            <input
                id={`${title}_input`}
                type="text"
                placeholder='klik of typ om te kiezen'
                value={inputState}
                onChange={e => handleChange(e) }
                onFocus={() => setShowUl(true)}
            />
            <input
                id={`${title}_id`} //$request->{title}_id will be used in a Laravel controller.
                type="text"
                value={returnValue}
            />
            {/* {errors[field] &&
                <div className="error">{errors[field]}</div>
            } */}
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
