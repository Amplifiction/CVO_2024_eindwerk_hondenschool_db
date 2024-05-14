import { useState } from "react"
import Login from "../Components/Auth/Login"
import Register from "../Components/Auth/Register"
import TabButton from "../Components/TabButton"

export default function Home ({postal_codes, sexes}) {
    const [activeTab, setActiveTab] = useState ('login')

    return (
        <div className="p-y-3 min-width-500p">
            <TabButton
                onClick={() => setActiveTab('login')}
                active={activeTab === 'login'}
            >
                Inloggen
            </TabButton>
            <TabButton
                onClick={() => setActiveTab('register')}
                active={activeTab == 'register'}
            >
                Registreren
            </TabButton>
            {activeTab === 'login'
                ? <Login/>
                : <Register
                    postal_codes={postal_codes}
                    sexes={sexes}
                />
            }
        </div>
    )
}
