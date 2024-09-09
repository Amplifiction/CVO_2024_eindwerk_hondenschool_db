import { Link, usePage } from "@inertiajs/react";
import TableRow from "../TableRow";
import TableHeader from "../TableHeader";

export default function IndexMemberships ({memberships, msDeleteEvent}) {
    const { website, basePath } = usePage().props

    return (
        <div className="m-y-3">
            <div className="grid-row">
                <div className="xs-col-12 m-col-6">
                    <h2>Mijn lidmaatschappen</h2>
                </div>
                <div className="xs-col-12 m-col-6 flex-row just-end-m">
                    <Link
                        href={`${basePath}/memberships/create`}
                        as="button"
                        className="btn-accent m-y-1"
                    ><i className="fa-regular fa-square-plus"></i> Lidmaatschap aanvragen</Link>
                </div>
            </div>
            <div>
                {memberships.length<1
                ? <p>Geen lidmaatschappen gevonden.</p>
                :<>
                    <TableHeader>
                        <div className="xs-col-3">Naam</div>
                        <div className="xs-col-3">Start</div>
                        <div className="xs-col-3">Discipline</div>
                        <div className="xs-col-2">Status</div>
                        <div className="xs-col-1"></div>
                    </TableHeader>
                    {memberships.map(ms => (
                        <TableRow
                            key={ms.id}
                        >
                            <div className="xs-col-3">{ms.dog_name}</div>
                            <div className="xs-col-3">{ms.start_date}</div>
                            <div className="xs-col-3">
                                <a href= {`${website}${ms.disc_url}`} target="_blank">{ms.disc_name}</a>
                            </div>
                            <div className="xs-col-2">{ms.status_name}</div>
                            <div className="xs-col-1">
                                <button
                                    onClick={() => msDeleteEvent(ms)}
                                    className="btn-red"
                                ><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </TableRow>
                    ))}
                </>}
            </div>
        </div>
    )
}
