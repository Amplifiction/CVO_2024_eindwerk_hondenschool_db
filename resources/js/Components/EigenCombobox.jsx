import { useState, useEffect } from "react"

// TO DO: dit werkt voor geslachten, omdat hier enkel name moet worden weergegeven. Voor postcodes is dit echter postcode+' '+gemeente.
// Oplossing: aangepaste array doorgeven. Of prop voorzien.

// TO DO: user geef focus aan input > ul opent. User klikt buiten input > ul blijft open.
// onBlur={() => {setShowUl(false)}} op input of parent div verhindert click event op ul!

// TO DO: wat als gebruiker niet in ul klikt, maar de gewenste waarde integraal typt?
// Bij onBlur van input en input!='' : find in array, setReturnValue, foutmelding indien niet gevonden

export default function EigenCombobox ({}) {
    const [input, setInput] = useState('')
    const [returnValue, setReturnValue] = useState ('')
    const [showUl, setShowUl] = useState(false)
    const [mouseOnDiv, setMouseOnDiv] = useState(false)
    const [inputHasFocus, setInputHasFocus] = useState(false)


    //TURN INTO PROPS
        const title = 'test'
        const array = [
            { id: 1, name: 'eins' },
            { id: 2, name: 'zwei' },
            { id: 3, name: 'polizei' },
        ]
    //end of props

    const filteredArray = (
        input
        ? array.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
        : array
    )

    const handleSelect = (name, id) => {
        setInput(name)
        setReturnValue(id)
        setShowUl(false)
        console.log(`input is now ${input}`)
    }

    // const handleBlur = () => {
    //     setShowUl(false)
    //     const found = array.find(input)
    //     if (found) {
    //         setReturnValue(found.id)
    //         setInput(found.name)
    //     } else {
    //         alert('No matches found.')
    //         setReturnValue('')
    //     }
    // }

    const handleMouseEnter = () => {
        setMouseOnDiv(true)
    }

    const handleMouseLeave = () => {
        setMouseOnDiv(false)
        if (!inputHasFocus) {
            setShowUl(false)
        }
    }

    const handleInputFocus = () => {
        setInputHasFocus(true)
        setShowUl(true)
    }
    const handleInputFocusOut = () => {
        setInputHasFocus(false)
        if (!mouseOnDiv) {
            setShowUl(false)
        }
    }

    useEffect(() => {
        if (!mouseOnDiv && ! inputHasFocus) {
            setShowUl(false)
        }
    }, [mouseOnDiv, inputHasFocus])

    return (
        <div
            className="dark"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p value={mouseOnDiv}></p>
            <input
                id={`${title}_input`}
                type="text"
                placeholder='klik of typ om te kiezen'
                value={input}
                onChange={e => {setInput(e.target.value)}}
                onFocus={handleInputFocus}
                onFocusOut={handleInputFocusOut}
            />
            <input
                id={`${title}_id`} //$request->{title}_id will be used in a Laravel controller.
                type="text" //make hidden
                value={returnValue}
            />
            {showUl &&
                <ul>
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
