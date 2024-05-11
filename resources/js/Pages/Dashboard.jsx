import { usePage, router } from "@inertiajs/react"
import IndexDogs from "../Components/Dogs/IndexDogs"
import Modal from "../Components/Modal"
import { useState } from "react"
import IndexMemberships from "../Components/Memberships/IndexMemberships"
export default function Dashboard ({dogs, memberships}) {
    const { flash } = usePage().props

    const [showShareModal, setShowShareModal] = useState(false)
    const [shareModalDog, setShareModalDog] = useState({})
    const handleShareEvent = (dog) => {
        setShareModalDog(dog)
        setShowShareModal(true)
    }

    const [showDogDeleteModal, setShowDogDeleteModal] = useState(false)
    const [deleteModalDog, setDeleteModalDog] = useState({})
    const handledogDeleteEvent = (dog) => {
        setDeleteModalDog(dog)
        setShowDogDeleteModal(true)
    }
    const handleDogDelete = (id) => {
        router.delete(`/dogs/${id}`, {})
        setShowDogDeleteModal(false)
    }

    const [showMsDeleteModal, setShowMsDeleteModal] = useState(false)
    const [deleteModalMs, setDeleteModalMs] = useState({})
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
                    <p>Deze actie verwijdert ook alle lidmaatschappen die u met de hond heeft.</p>
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
                        Weet u zeker dat u het lidmaatschap met {deleteModalMs.dog_name} voor {deleteModalMs.disc_name} wilt annuleren?
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
