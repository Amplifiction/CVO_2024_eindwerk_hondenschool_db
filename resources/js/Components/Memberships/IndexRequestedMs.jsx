import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import EditStatus from "./EditStatus";

export default function IndexRequestedMs ({requestedMs, statuses}) {

    return (
        <div className="m-y-3">
            <h2>Aangevraagde lidmaatschappen</h2>
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
                                {`${ms.user.first_name} ${ms.user.last_name}`}<br/>
                                {ms.dog.name}
                            </div>
                            <div className="xs-col-4">
                                {ms.discipline.name}<br/>
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
