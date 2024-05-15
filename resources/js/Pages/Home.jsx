import { useState } from "react"
import Login from "../Components/Auth/Login"
import Register from "../Components/Auth/Register"
import TabButton from "../Components/TabButton"

export default function Home ({postal_codes, sexes}) {
    const [activeTab, setActiveTab] = useState ('login')

    return (
        <div className="m-y-3 min-width-450p">
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
            {/* TO DO production: alle referenties naar demoversie schrappen. */}
            <div  className="bg6 m-y-3 padding-20px fc11">
                <h3 className="m-y-1">Demoversie</h3>
                <p>Je kan een eigen account aanmaken, of één van de volgende accounts gebruiken:</p>
                <p>Eigen accounts zullen steeds de gebruikersrol hebben.</p>
                <ul className="m-xy-2">
                    <li><span className="fw-bold">bart-stevens@outlook.com</span> (Jerom, gebruiker, incl honden en lidmaatschappen)</li>
                    <li><span className="fw-bold">bart_stevens9@hotmail.com</span> (Josefien, gebruiker, incl honden en lidmaatschappen)</li>
                    <li><span className="fw-bold">bart.stevens9@gmail.com</span> (Bart, beheerder, incl honden en lidmaatschappen)</li>
                    <li><span className="fw-bold">superadmin@test.be</span> (Jean, superbeheerder)</li>
                </ul>
                <p>Wachtwoord van deze accounts is steeds 123456789.</p>
            </div>
        </div>
    )
}
