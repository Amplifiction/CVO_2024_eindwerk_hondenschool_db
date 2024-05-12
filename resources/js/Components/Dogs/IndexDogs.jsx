import { Link } from "@inertiajs/react";
import ActionButtonsDog from "./ActionButtonsDog";
import TableRow from "../TableRow";

export default function IndexDogs ({dogs, dogDeleteEvent, shareEvent}) {
    return (
        <div className="m-y-3">
            <h2>Mijn honden</h2>
            <Link
                href="/dogs/add"
                as="button"
                className="btn-green m-y-1"
            >Hond toevoegen</Link>
            <div>
                {dogs.length<1
                ? <p>Geen honden gevonden.</p>
                : <>
                    <TableRow>
                        <div className="xs-col-3">Naam</div>
                        <div className="xs-col-3">Acties</div>
                        <div className="xs-col-6">Mede-eigenaars</div>
                    </TableRow>
                    {dogs.map(dog => (
                        <TableRow
                            key={dog.id}
                            className="flex-row align-center"
                        >
                            <div className="xs-col-3">{dog.name}</div>
                            <div className="xs-col-3">
                                <ActionButtonsDog
                                    dog={dog}
                                    dogDeleteEvent={dogDeleteEvent}
                                    shareEvent={shareEvent}
                                />
                            </div>
                            {dog.other_owners.length>0
                            ? <div className="xs-col-6">
                                {dog.other_owners.map((oo, index) =>
                                    <span key={oo.id}>
                                        {`${oo.first_name} ${oo.last_name}`}
                                        {index < dog.other_owners.length - 1 ? ', ' : ''}
                                    </span>
                                )}
                            </div>
                            : null
                            }
                        </TableRow>
                    ))}
                </>}
            </div>
        </div>
    )
}
