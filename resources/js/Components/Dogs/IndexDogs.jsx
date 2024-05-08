import { Link } from "@inertiajs/react";
import ActionButtonsDog from "./ActionButtonsDog";

export default function IndexDogs ({dogs}) {
    return (
        <div>
            <h2>Mijn honden</h2>
            <Link href="/dogs/create">Hond toevoegen</Link>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.id}>
                        {dog.name}
                        <ActionButtonsDog dog={dog}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
