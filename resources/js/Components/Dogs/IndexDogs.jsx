import { Link } from "@inertiajs/react";
import ActionButtonsDog from "./ActionButtonsDog";

export default function IndexDogs ({dogs, dogDeleteEvent, shareEvent}) {
    return (
        <div>
            <h2>Mijn honden</h2>
            <Link href="/dogs/add">Hond toevoegen</Link>
            <div>
                {dogs.length<1
                ? <p>Geen honden gevonden.</p>
                : dogs.map(dog => (
                    <div
                        key={dog.id}
                        className="flex-row"
                    >
                        {dog.name}
                        <ActionButtonsDog
                            dog={dog}
                            dogDeleteEvent={dogDeleteEvent}
                            shareEvent={shareEvent}
                        />
                        {dog.other_owners.length>0
                        ? <div>
                            {dog.other_owners.map(oo =>
                                <span key={oo.id}>
                                    {`${oo.first_name} ${oo.last_name}`}
                                    {/* TO DO: komma's voorzien, behalve bij laatste */}
                                </span>
                            )}
                        </div>
                        : null
                        }
                    </div>
                ))
                }
            </div>
        </div>
    )
}
