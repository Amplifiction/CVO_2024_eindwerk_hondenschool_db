import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

//TURN INTO PROPS
    const array = [
        { id: 1, name: 'Wade Cooper' },
        { id: 2, name: 'Arlene Mccoy' },
        { id: 3, name: 'Devon Webb' },
        { id: 4, name: 'Tom Cook' },
        { id: 5, name: 'Tanya Fox' },
        { id: 6, name: 'Hellen Schmidt' },
    ]
    const title='test'
    const errors = []
export default function Example() {
const [selected, setSelected] = useState('')
const [query, setQuery] = useState('')

const filteredArray =
    query === ''
    ? array
    : array.filter((item) =>
        item.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

return (
    <div>
        <Combobox value={selected} onChange={setSelected}>
            <div>
                <div>
                    <Combobox.Input
                        displayValue={(item) => item.name}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button>
                    <ChevronUpDownIcon
                        aria-hidden="true"
                    />
                    </Combobox.Button>
                </div>
                <Combobox.Options>
                    {filteredArray.length === 0 && query !== '' ? (
                        <div>
                            Niets gevonden.
                        </div>
                    ) : (
                        filteredArray.map((item) => (
                        <Combobox.Option
                            key={item.id}
                            value={item} //item.id geeft hier een lege input na selectie.
                        >
                            {item.name}
                        </Combobox.Option>
                        ))
                    )}
                </Combobox.Options>
            </div>
        </Combobox>
    </div>
)
}
