import TableHeader from "../TableHeader";
import TableRow from "../TableRow";

export default function IndexAllMs ({allMs, contactModalEvent}) {


    return (
        <div className="m-y-3">
            <h2>Alle lidmaatschappen</h2>
            <div>
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
                {allMs.length<1
                ? <p>Geen lidmaatschappen gevonden.</p>
                : <>
                    {allMs.map(ms => (
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
                        </TableRow>
                    ))}
                </>}
            </div>
        </div>
    )
}