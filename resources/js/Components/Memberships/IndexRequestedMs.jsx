import { usePage } from "@inertiajs/react";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import EditStatus from "./EditStatus";

export default function IndexRequestedMs ({requestedMs, statuses, contactModalEvent}) {
    const { website } = usePage().props

    return (
        <div className="m-y-3">
            <h2>Aangevraagde lidmaatschappen</h2>
            <p className="m-y-05 fs-90">Enkel super-beheerders mogen hun eigen lidmaatschappen bewerken.</p>
            <div>
                {requestedMs.length<1
                ? <p>Geen aangevraagde lidmaatschappen.</p>
                : <>
                    <TableHeader>
                        <div className="xs-col-4">
                            Geleider<br/>
                            Hond
                        </div>
                        <div className="xs-col-4">
                            Discipline<br/>
                            Startdatum
                        </div>
                        <div className="xs-col-4">Status</div>
                    </TableHeader>
                    {requestedMs.map(ms => (
                        <TableRow
                            key={ms.id}
                        >
                            <div className="xs-col-4">
                                <button
                                    onClick={() => contactModalEvent(ms.user)}
                                    className="btn-as-link"
                                >{`${ms.user.first_name} ${ms.user.last_name}`}</button><br/>
                                {ms.dog.name}
                            </div>
                            <div className="xs-col-4">
                                <a href= {`${website}${ms.discipline.url_name}`} target="_blank">{ms.discipline.name}</a><br/>
                                {ms.start_date}
                            </div>
                            <div className="xs-col-4">
                                <EditStatus
                                    membership={ms}
                                    statuses={statuses}
                                />
                            </div>
                        </TableRow>
                    ))}
                </>}
            </div>
        </div>
    )

}
