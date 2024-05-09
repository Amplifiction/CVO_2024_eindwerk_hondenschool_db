import TabButton from "../../Components/TabButton"
import CreateDog from "../../Components/Dogs/CreateDog"
import { useState } from "react"
import AddSharedDog from "../../Components/Dogs/AddSharedDog"

export default function AddDog ({breeds}) {
    const [activeTab, setActiveTab] = useState ('nieuw')

    return (
        <div>
            <h1>Hond toevoegen</h1>
            <TabButton
                onClick={() => setActiveTab('nieuw')}
                active={activeTab === 'nieuw'}
            >
                Nieuwe hond toevoegen
            </TabButton>
            <TabButton
                onClick={() => setActiveTab('gedeeld')}
                active={activeTab === 'gedeeld'}
            >
                Gedeelde hond toevoegen
            </TabButton>
            {activeTab === 'nieuw'
                ? <CreateDog
                    breeds={breeds}
                />
                : <AddSharedDog/>
            }
        </div>
    )
}
