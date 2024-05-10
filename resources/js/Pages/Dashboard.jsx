import { usePage, router } from "@inertiajs/react"
import IndexDogs from "../Components/Dogs/IndexDogs"
import Modal from "../Components/Modal"
import { useState } from "react"
import IndexMemberships from "../Components/Memberships/IndexMemberships"
export default function Dashboard ({dogs, memberships}) {
    const { flash } = usePage().props

    const [showDogDeleteModal, setShowDogDeleteModal] = useState(false)
    const [deleteModalDog, setDeleteModalDog] = useState({})

    const [showShareModal, setShowShareModal] = useState(false)
    const [shareModalDog, setShareModalDog] = useState({})

    const [showMsDeleteModal, setShowMsDeleteModal] = useState(false)
    const [deleteModalMs, setDeleteModalMs] = useState({})

    const handleShareEvent = (dog) => {
        setShareModalDog(dog)
        setShowShareModal(true)
    }

    const handledogDeleteEvent = (dog) => {
        setDeleteModalDog(dog)
        setShowDogDeleteModal(true)
    }

    const handleDogDelete = (id) => {
        router.delete(`/dogs/${id}`, {})
        setShowDogDeleteModal(false)
    }

    const handleMsDeleteEvent = (ms) => {
        setDeleteModalMs(ms)
        setShowMsDeleteModal(true)
    }

    const handleMsDelete = (id) => {
        router.delete(`/memberships/${id}`, {})
        setShowMsDeleteModal(false)
    }

    return (
        <div>
            <h1>Mijn dashboard</h1>
            <p>{flash.message}</p>
            <IndexDogs
                dogs={dogs}
                dogDeleteEvent={handledogDeleteEvent}
                shareEvent={handleShareEvent}
            />
            <IndexMemberships
                memberships={memberships}
                msDeleteEvent={handleMsDeleteEvent}
            />
            {showDogDeleteModal &&
                <Modal
                    close={() => setShowDogDeleteModal(false)}
                >
                    <p>Weet u zeker dat u {deleteModalDog.name} wilt verwijderen?</p>
                    <button
                        onClick={() => handleDogDelete(deleteModalDog.id)}
                    >
                        Verwijderen
                    </button>
                    <button
                        onClick={() => setShowDogDeleteModal(false)}
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
            {showMsDeleteModal &&
                <Modal
                    close={() => setShowMsDeleteModal(false)}
                >
                    <p>
                        Weet u zeker dat u uw lidmaatschap met {deleteModalMs.dog_name} van {deleteModalMs.start_date} wilt annuleren?
                    </p>
                    <button
                        onClick={() => handleMsDelete(deleteModalMs.id)}
                    >
                        Verwijderen
                    </button>
                    <button
                        onClick={() => setShowMsDeleteModal(false)}
                    >
                        Annuleren
                    </button>
                </Modal>
            }
        </div>
    )
}
