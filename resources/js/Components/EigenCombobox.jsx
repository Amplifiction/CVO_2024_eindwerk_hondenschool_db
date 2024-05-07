import { useState, useEffect } from "react"

// TO DO: dit werkt voor geslachten, omdat hier enkel name moet worden weergegeven. Voor postcodes is dit echter postcode+' '+gemeente.
// Oplossing: aangepaste array doorgeven. Of prop voorzien.

// TO DO: wat als gebruiker niet in ul klikt, maar de gewenste waarde integraal typt?
// Bij onBlur van input en input!='' : find in array, setReturnValue, foutmelding indien niet gevonden

export default function EigenCombobox ({}) {
    const [input, setInput] = useState('')
    const [returnValue, setReturnValue] = useState ('')
    const [showUl, setShowUl] = useState(false)
    const [optionSelected, setOptionSelected] = useState(false)

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
        setOptionSelected(true)
        console.log(`HS: optionSelected=${optionSelected}`)
    }

    const handleFocusOut = () => {
        setTimeout(() => {
            setShowUl(false)
            console.log(`HFO: optionSelected=${optionSelected}`)
            console.log(`HFO: input=${input}`)
            if (!optionSelected) {
                const found = array.find(item => item.name === input)
                console.log(`HFO: found=${found}`)
                if (found) {
                    setReturnValue(found.id)
                } else {
                    alert('No matches found.')
                    setReturnValue('')
                    setInput('')
                }
            }
            setOptionSelected(false)
        }, 1000) //Timeout is nodig om te voorkomen dat ul verdwijnt voor erop wordt geklikt.
    }

    return (
        <div>
            <input
                id={`${title}_input`}
                type="text"
                placeholder='klik of typ om te kiezen'
                value={input}
                onChange={e => {setInput(e.target.value)}}
                onFocus={() => setShowUl(true)}
                onBlur={handleFocusOut} // React ondersteunt geen onfocusout.
            />
            <input
                id={`${title}_id`} //$request->{title}_id will be used in a Laravel controller.
                type="text" //make hidden
                value={returnValue}
            />
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
