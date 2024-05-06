import { useState } from "react"

// TO DO: dit werkt voor geslachten, omdat hier enkel name moet worden weergegeven. Voor postcodes is dit echter postcode+' '+gemeente.
// Oplossing: aangepaste array doorgeven. Of prop voorzien.

// TO DO: zie regels met "lijkt niet te gebeuren".

// TO DO: wat als gebruiker niet in ul klikt, maar de gewenste waarde integraal typt?
// Bij onBlur van input en input!='' : find in array, setReturnValue, foutmelding indien niet gevonden

export default function EigenCombobox ({}) {
    const [input, setInput] = useState('')
    const [returnValue, setReturnValue] = useState ('')
    const [showUl, setShowUl] = useState(false)

    const title = 'test' //moet prop worden

    const array = [ //moet prop worden
        { id: 1, name: 'eins' },
        { id: 2, name: 'zwei' },
        { id: 3, name: 'polizei' },
    ]

    const filteredArray = (
        input
        ? array.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
        : array
    )

    const handleSelect = (name, id) => {
        setInput(name) // lijkt niet te gebeuren.
        setReturnValue(id) // lijkt niet te gebeuren.
        setShowUl(false)
        console.log(`input is nu ${input}`) // lijkt niet te gebeuren.
    }

    return (
        <>
            <input
                id={`${title}_input`}
                type="text"
                placeholder='klik of typ om te kiezen'
                value={input}
                onChange={e => {setInput(e.target.value)}}
                onFocus={() => {setShowUl(true)}}
                onBlur={() => {setShowUl(false)}}
            />
            <input
                id={`${title}_id`} //Deze ID moet worden opgevraagd door de controller, terwijl de zichtbare input wordt genegeerd door de controller.
                type="text" //hidden maken
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
        </>
    )
}
