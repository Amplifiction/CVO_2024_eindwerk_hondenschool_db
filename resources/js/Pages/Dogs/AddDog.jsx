import TabButton from "../../Components/TabButton"
import CreateDog from "../../Components/Dogs/CreateDog"
import { useState } from "react"
import AddSharedDog from "../../Components/Dogs/AddSharedDog"

export default function AddDog ({breeds}) {
    const [activeTab, setActiveTab] = useState ('nieuw')

    return (
        <div className="m-y-3 min-width-425px">
            <TabButton
                onClick={() => setActiveTab('nieuw')}
                active={activeTab === 'nieuw'}
            >
                Nieuwe hond
            </TabButton>
            <TabButton
                onClick={() => setActiveTab('gedeeld')}
                active={activeTab === 'gedeeld'}
            >
                Gedeelde hond
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
