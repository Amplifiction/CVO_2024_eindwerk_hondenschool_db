import { Link } from "@inertiajs/react";
import ActionButtonsDog from "./ActionButtonsDog";
import TableRow from "../TableRow";
import TableHeader from "../TableHeader";

export default function IndexDogs ({dogs, dogDeleteEvent, shareEvent}) {
    return (
        <div className="m-y-3">
            <div className="grid-row">
                <div className="xs-col-12 m-col-6">
                    <h2>Mijn honden</h2>
                </div>
                <div className="xs-col-12 m-col-6 flex-row just-end-m">
                    <Link
                        href="/dogs/add"
                        as="button"
                        className="btn-green"
                    ><i className="fa-regular fa-square-plus"></i> Hond toevoegen</Link>
                </div>
            </div>
            <div>
                {dogs.length<1
                ? <p>Geen honden gevonden.</p>
                : <>
                    <TableHeader>
                        <div className="xs-col-3">Naam</div>
                        <div className="xs-col-1"></div>
                        <div className="xs-col-3">Acties</div>
                        <div className="xs-col-5">Mede-eigenaars</div>
                    </TableHeader>
                    {dogs.map(dog => (
                        <TableRow
                            key={dog.id}
                            className="flex-row align-center"
                        >
                            <div className="xs-col-3">{dog.name}</div>
                            <div className="xs-col-1">
                                {dog.sex === 0 ? <i className="fa-solid fa-mars"></i> : <i className="fa-solid fa-venus"></i>}
                            </div>
                            <div className="xs-col-3">
                                <ActionButtonsDog
                                    dog={dog}
                                    dogDeleteEvent={dogDeleteEvent}
                                    shareEvent={shareEvent}
                                />
                            </div>
                            {dog.other_owners.length>0
                            ? <div className="xs-col-5">
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
