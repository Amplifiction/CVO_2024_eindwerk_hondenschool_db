import { usePage, router } from "@inertiajs/react"
import IndexDogs from "../Components/Dogs/IndexDogs"
import Modal from "../Components/Modal"
import { useState } from "react"
export default function Dashboard ({dogs}) {
    const { flash } = usePage().props

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [deleteModalDog, setDeleteModalDog] = useState({})

    const [showShareModal, setShowShareModal] = useState(false)
    const [shareModalDog, setShareModalDog] = useState({})

    const handleShareEvent = (dog) => {
        setShareModalDog(dog)
        setShowShareModal(true)
    }

    const handleDeleteEvent = (dog) => {
        setDeleteModalDog(dog)
        setShowDeleteModal(true)
    }

    const handleDelete = (id) => {
        router.delete(`/dogs/${id}`, {})
        setShowDeleteModal(false)
    }

    return (
        <div>
            <h1>Mijn dashboard</h1>
            <p>{flash.message}</p>
            <IndexDogs
                dogs={dogs}
                deleteEvent={handleDeleteEvent}
                shareEvent={handleShareEvent}
            />
            {showDeleteModal &&
                <Modal
                    close={() => setShowDeleteModal(false)}
                >
                    <p>Weet u zeker dat u {deleteModalDog.name} wilt verwijderen?</p>
                    <button
                        onClick={() => handleDelete(deleteModalDog.id)}
                    >
                        Verwijderen
                    </button>
                    <button
                        onClick={() => setShowDeleteModal(false)}
                    >
                        Annuleren
                    </button>
                </Modal>
            }
            {showShareModal &&
                <Modal
                    close={() => setShowShareModal(false)}
                >
                    <p>Om {shareModalDog.name} te delen, bezorgt u de volgende code aan de persoon die met uw hond gaat trainen:</p>
                    <p>{shareModalDog.uuid}</p> {/* TO DO: copy to clipboard-knop */}
                    <button
                        onClick={() => setShowShareModal(false)}
                    >
                        Sluiten
                    </button>
                </Modal>
            }
        </div>
    )
}
