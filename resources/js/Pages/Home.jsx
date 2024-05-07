import { useState } from "react"
import Login from "../Components/Auth/Login"
import Register from "../Components/Auth/Register"

export default function Home ({postal_codes, sexes}) {
    const [activeTab, setActiveTab] = useState ('login')

    return (
        <div>
            <button onClick={() => setActiveTab('login')}>Inloggen</button>
            <button onClick={() => setActiveTab('register')}>Registreren</button>
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
