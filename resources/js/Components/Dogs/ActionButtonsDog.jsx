import { Link } from "@inertiajs/react"

export default function ActionButtonsDog ({dog, deleteEvent, shareEvent}) {

    // const handleDelete = (id) => {
    //     router.delete(`/dogs/${id}`, {
    //         onBefore: () => confirm(`Weet u zeker dat u ${dog.name} wilt verwijderen?`)
    //         //TO DO, eventueel: standaardconfirm vervangen door eigen modal.
    //     })
    // }

    return (
        <div>
            <Link href={`/dogs/${dog.id}`} as="button">Bewerken</Link>

            {/* Deze buttons emitten een event naar parent */} {/* Link ondersteunt geen delete, vandaar buttons */}
            <button onClick={() => deleteEvent(dog)}>Verwijderen</button>
            <button onClick={() => shareEvent(dog)}>Delen</button>
        </div>
    )
}
