import { useState } from "react"
import Login from "../Components/Auth/Login"
import Register from "../Components/Auth/Register"
import TabButton from "../Components/TabButton"

export default function Home ({postal_codes, sexes}) {
    const [activeTab, setActiveTab] = useState ('login')

    return (
        <div className="m-y-3 min-width-425px">
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
            <div className="bg6 m-y-3 padding-20px fc11 max-width-770p">
                <h1 className="m-y-05 fc8 fs-shadow-fc12">Demoversie</h1>
                <h2 className="m-tb fc12">Welkom</h2>
                    <p>Met deze beperkte versie van Hondenschool Database kunnen <span className="fw-bold">gebruikers</span> onder meer:</p>
                    <ul className="m-y-1 m-l-2">
                        <li>zichzelf aanmelden en hun gegevens bewerken,</li>
                        <li>hun honden aanmelden, beheren en delen met andere gebruikers,</li>
                        <li>en zich met een (gedeelde)  hond inschrijven voor één of meerdere disciplines.</li>
                    </ul>
                    <p><span className="fw-bold">Beheerders</span> kunnen bovendien aanvragen goed- of afkeuren en een filterbaar overzicht van alle lidmaatschappen raadplegen.</p>
                    <p className="m-y-05">Gebruikers worden via email op de hoogte gehouden van belangrijke gebeurtenissen.</p>
                <h2 className="m-tb fc12">Inloggen</h2>
                <p>Je kan registreren, of één van de volgende accounts gebruiken.</p>
                <p>Zelf aangemaakte accounts zullen steeds de gebruikersrol hebben.</p>
                <ul className="m-y-1 m-l-2">
                    <li><span className="fw-bold">bart-stevens@outlook.com</span> (Jerom, gebruiker, incl honden en lidmaatschappen)</li>
                    <li><span className="fw-bold">bart_stevens9@hotmail.com</span> (Josefien, gebruiker, incl honden en lidmaatschappen)</li>
                    <li><span className="fw-bold">bart.stevens9@gmail.com</span> (Bart, beheerder, incl honden en lidmaatschappen)</li>
                    <li><span className="fw-bold">superadmin@test.be</span> (Jean, superbeheerder)</li>
                </ul>
                <p>Wachtwoord van deze accounts is steeds 123456789.</p>
                <h2 className="m-tb fc12">Under the hood</h2>
                <p className="m-y-05">
                    Benieuwd naar de uitdagingen die deze database tackelt, de gebruikte technologie en andere weetjes? Lees erover in&nbsp;
                    <a
                        href= "https://www.canva.com/design/DAGFUjzk2HM/q9qb1Llloskm9wKOAh0H0Q/view?utm_content=DAGFUjzk2HM&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                        target="_blank"
                    >deze korte presentatie</a>!
                </p>
                <p  className="m-y-05">
                    In het kader van deze demoversie werden bepaalde restricties opgeheven, zoals die mbt email verificatie.
                </p>
                <div className="flex-row just-center">
                    <div className="flex-row just-between fc8 fs-300 min-width-330px">
                        <i class="fa-brands fa-laravel"></i>
                        <i class="fa-brands fa-react"></i>
                        <i class="fa-brands fa-sass"></i>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
