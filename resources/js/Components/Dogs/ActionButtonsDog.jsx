import { Link, Inertia } from "@inertiajs/react"

export default function ActionButtonsDog ({dog}) {

    const handleDelete = (id) => {
        if (confirm('Weet u zeker dat u deze hond wil verwijderen?')) {
            Inertia.delete(`/dogs/${id}`)
        }
    }

    return (
        <div>
            <Link href={`/dogs/${dog.id}`} method="get" data={{dog: dog}} as="button">Bewerken</Link>
            <button onClick={() => handleDelete(dog.id)}>DELETE</button> {/* Link ondersteunt geen delete */}
        </div>
    )
}
