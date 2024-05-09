import { Link } from "@inertiajs/react";
import ActionButtonsDog from "./ActionButtonsDog";

export default function IndexDogs ({dogs, deleteEvent, shareEvent}) {
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
                            deleteEvent={deleteEvent}
                            shareEvent={shareEvent}
                        />
                    </div>
                ))
                }
            </div>
        </div>
    )
}
