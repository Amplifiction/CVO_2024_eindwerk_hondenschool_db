import { Link } from "@inertiajs/react";

export default function IndexMemberships ({memberships, msDeleteEvent}) {
    return (
        <div>
            <h2>Mijn lidmaatschappen</h2>
            <Link href="/memberships/create">Lidmaatschap aanvragen</Link>
            <div>
                {memberships.length<1
                ? <p>Geen lidmaatschappen gevonden.</p>
                : memberships.map(ms => (
                    <div
                        key={ms.id}
                        className="flex-row"
                    >
                        <div>{ms.dog_name}</div>
                        <div>{ms.start_date}</div>
                        <div>{ms.disc_name}</div>
                        <div>{ms.status_name}</div>
                        <button onClick={() => msDeleteEvent(ms.id)}>Verwijderen</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
