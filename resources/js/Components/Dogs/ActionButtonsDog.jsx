import { Link, usePage } from "@inertiajs/react"

export default function ActionButtonsDog ({dog, dogDeleteEvent, shareEvent}) {

    const { basePath } = usePage().props

    // const handleDelete = (id) => {
    //     router.delete(`/dogs/${id}`, { // basePath toe te voegen
    //         onBefore: () => confirm(`Weet u zeker dat u ${dog.name} wilt verwijderen?`)
    //     })
    // }

    return (
        <div>
            <Link
                href={`${basePath}/dogs/${dog.id}`}
                as="button"
                className="btn-accent"
            ><i className="fa-solid fa-pen-to-square"></i></Link>
            <button
                onClick={() => shareEvent(dog)}
                className="btn-accent"
            ><i className="fa-solid fa-square-share-nodes"></i></button>
                        <button
                onClick={() => dogDeleteEvent(dog)}
                className="btn-red"
            ><i className="fa-solid fa-trash-can"></i></button>
            {/* Deze buttons emitten een event naar parent */} {/* Link ondersteunt geen delete, vandaar buttons */}
        </div>
    )
}
