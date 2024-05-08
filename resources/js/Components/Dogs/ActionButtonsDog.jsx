import { Link, router } from "@inertiajs/react"

export default function ActionButtonsDog ({dog}) {

    const handleDelete = (id) => {
        router.delete(`/dogs/${id}`, {
            onBefore: () => confirm(`Weet u zeker dat u ${dog.name} wilt verwijderen?`)
            //TO DO, eventueel: standaardconfirm vervangen door eigen modal.
        })
    }

    return (
        <div>
            <Link href={`/dogs/${dog.id}`} as="button">Bewerken</Link>
            <button onClick={() => handleDelete(dog.id)}>Verwijderen</button> {/* Link ondersteunt geen delete */}
        </div>
    )
}
