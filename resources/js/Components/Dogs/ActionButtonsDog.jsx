import { Link, router } from "@inertiajs/react"
// Inertia importeren: The requested module '/node_modules/.vite/deps/@inertiajs_react.js?v=90f9f2ae' does not provide an export named 'Inertia'
// Dependencies zouden moeten geïnstalleerd zijn

export default function ActionButtonsDog ({dog}) {

    // const handleDelete = (id) => {
    //     if (confirm('Weet u zeker dat u deze hond wilt verwijderen?')) {
    //         Inertia.delete(`/dogs/${id}`)
    //     }
    // }

    const handleDelete = (id) => {
        router.delete(`/dogs/${id}`, {
            onBefore: () => confirm('Weet u zeker dat u deze hond wilt verwijderen?'), //doet niets!
        })
    }

    return (
        <div>
            <Link href={`/dogs/${dog.id}`} as="button">Bewerken</Link>
            <button onClick={() => handleDelete(dog.id)}>DELETE</button> {/* Link ondersteunt geen delete */}
        </div>
    )
}
