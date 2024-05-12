import { Link } from "@inertiajs/react";
import TableRow from "../TableRow";

export default function IndexMemberships ({memberships, msDeleteEvent}) {
    return (
        <div className="m-y-3">
            <h2>Mijn lidmaatschappen</h2>
            <Link
                href="/memberships/create"
                as="button"
                className="btn-green"
            >Lidmaatschap aanvragen</Link>
            <div>
                {memberships.length<1
                ? <p>Geen lidmaatschappen gevonden.</p>
                :<>
                    <TableRow>
                        <div className="xs-col-3">Naam</div>
                        <div className="xs-col-3">Start</div>
                        <div className="xs-col-3">Discipline</div>
                        <div className="xs-col-2">Status</div>
                        <div className="xs-col-1"></div>
                    </TableRow>
                    {memberships.map(ms => (
                        <TableRow
                            key={ms.id}
                        >
                            <div className="xs-col-3">{ms.dog_name}</div>
                            <div className="xs-col-3">{ms.start_date}</div>
                            <div className="xs-col-3">{ms.disc_name}</div>
                            <div className="xs-col-2">{ms.status_name}</div>
                            <div className="xs-col-1">
                                <button
                                    onClick={() => msDeleteEvent(ms)}
                                    className="btn-red"
                                >X</button>
                            </div>
                        </TableRow>
                    ))}
                </>}
            </div>
        </div>
    )
}
