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
            >E</Link>
            <button
                onClick={() => shareEvent(dog)}
                className="btn-gray"
            >S</button>
                        <button
                onClick={() => dogDeleteEvent(dog)}
                className="btn-red"
            >X</button>
            {/* Deze buttons emitten een event naar parent */} {/* Link ondersteunt geen delete, vandaar buttons */}
        </div>
    )
}
