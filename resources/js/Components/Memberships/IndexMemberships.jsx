import { Link } from "@inertiajs/react";

export default function IndexMemberships ({memberships}) {
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
                        <div>Hond:{ms.dog_name}</div>
                        <div>Startdatum: {ms.start_date}</div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
