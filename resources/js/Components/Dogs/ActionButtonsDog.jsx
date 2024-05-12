import { Link } from "@inertiajs/react"

export default function ActionButtonsDog ({dog, dogDeleteEvent, shareEvent}) {

    // const handleDelete = (id) => {
    //     router.delete(`/dogs/${id}`, {
    //         onBefore: () => confirm(`Weet u zeker dat u ${dog.name} wilt verwijderen?`)
    //     })
    // }

    return (
        <div>
            <Link
                href={`/dogs/${dog.id}`}
                as="button"
                className="btn-gray"
            >Bewerken</Link>
            <button
                onClick={() => dogDeleteEvent(dog)}
                className="btn-red"
            >Verwijderen</button>
            <button
                onClick={() => shareEvent(dog)}
                className="btn-gray"
            >Delen</button>
            {/* Deze buttons emitten een event naar parent */} {/* Link ondersteunt geen delete, vandaar buttons */}
        </div>
    )
}
