import { usePage, router, Link } from "@inertiajs/react"
import IndexDogs from "../Components/Dogs/IndexDogs"
import Modal from "../Components/Modal"
import { useState } from "react"
import IndexMemberships from "../Components/Memberships/IndexMemberships"
import copy from "copy-to-clipboard";
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
            <div className="m-y-3">
                <h1>Mijn dashboard</h1>
                <p>{flash.message}</p>
                <div>
                    <Link
                        href="/editProfile"
                        as="button"
                        className="btn-accent"
                    >Profiel bewerken</Link>
                    <Link
                        href="/editPassword"
                        as="button"
                        className="btn-accent"
                    >Wachtwoord wijzigen</Link>
                </div>
            </div>
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
                    <p className="m-y-1 fw-bold">
                        Weet u zeker dat u {deleteModalDog.name} wilt verwijderen?
                    </p>
                    <p className="m-y-1">
                        Deze actie verwijdert ook alle lidmaatschappen die u met de hond heeft.
                    </p>
                    <div className="flex-row just-center m-y-1">
                        <button
                            onClick={() => handleDogDelete(deleteModalDog.id)}
                            className="btn-red"
                        >Verwijderen</button>
                        <button
                            onClick={() => setShowDogDeleteModal(false)}
                            className="btn-gray"
                        >Annuleren</button>
                    </div>
                </Modal>
            }
            {showShareModal &&
                <Modal
                    close={() => setShowShareModal(false)}
                >
                    <p className="m-y-1 fw-bold">Om {shareModalDog.name} te delen, deel je de volgende code:</p>
                    <div className="grid-row m-y-1">
                        <input
                            type="text"
                            value={shareModalDog.uuid}
                            readOnly
                            className="xs-col-10 fs-90 txt-center ff-code width-350p"
                        />
                        <button
                            onClick={() => copy(shareModalDog.uuid)}
                            className="btn-accent xs-col-2"
                        ><i class="fa-regular fa-copy"></i></button>
                    </div>
                    <p className="m-y-1 fs-90">
                        In te voeren door andere gebruikers onder <br/>
                        Dashboard &gt; 'Hond toevoegen' &gt; 'Gedeelde hond toevoegen'
                    </p>
                    <button
                        onClick={() => setShowShareModal(false)}
                        className="btn-gray"
                    >Sluiten</button>
                </Modal>
            }
            {showMsDeleteModal &&
                <Modal
                    close={() => setShowMsDeleteModal(false)}
                >
                    <p className="m-y-1 fw-bold">
                        Weet je zeker dat je het lidmaatschap met {deleteModalMs.dog_name} voor {deleteModalMs.disc_name} wil verwijderen?
                    </p>
                    <div className="flex-row just-center">
                        <button
                            onClick={() => handleMsDelete(deleteModalMs.id)}
                            className="btn-red"
                        >Verwijderen</button>
                        <button
                            onClick={() => setShowMsDeleteModal(false)}
                            className="btn-gray"
                        >Annuleren</button>
                    </div>
                </Modal>
            }
        </div>
    )
}
