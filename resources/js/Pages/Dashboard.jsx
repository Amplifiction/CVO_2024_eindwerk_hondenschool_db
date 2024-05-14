import { usePage, router, Link } from "@inertiajs/react"
import IndexDogs from "../Components/Dogs/IndexDogs"
import Modal from "../Components/Modal"
import { useState } from "react"
import IndexMemberships from "../Components/Memberships/IndexMemberships"
import copy from "copy-to-clipboard";
import ModalContact from "../Components/ModalContact"

export default function Dashboard ({dogs, memberships}) {
    const { flash, auth } = usePage().props

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

    const [showContactModal, setShowContactModal] = useState(false)
    const [contactModalUser, setContactModalUser] = useState({})
    const handleShowContactModal = (user) => {
        setShowContactModal(true)
        setContactModalUser(user)
    }

    return (
        <div>
            <div className="m-y-3">
                {flash.message &&
                    <div className="bg4 padding-20px m-y-1">
                        <i className="fa-solid fa-circle-info fs-150 fc3"></i>
                        <p className="fs-ita">{flash.message}</p>
                    </div>
                }
                <div className="grid-row">
                    <div className="xs-col-12 m-col-6">
                        <h1>Mijn dashboard</h1>
                    </div>
                    {auth.user.role_id > 1 &&
                        <div className="xs-col-12 m-col-6 flex-row just-end-m">
                            <Link
                                href="/dashboardadmin"
                                as="button"
                                className="btn-accent m-y-1"
                            >Admin dashboard</Link>
                        </div>
                    }
                </div>
                <div className="m-y-1">{`Welkom, ${auth.user.first_name}!`}</div>
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
                contactModalEvent={handleShowContactModal}
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
                    <div className="flex-row just-end width-100pc">
                        <button
                            onClick={() => setShowShareModal(false)}
                            className="btn-accent"
                        ><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <p className="m-y-1 fw-bold">Om {shareModalDog.name} te delen, deel je de volgende code:</p>
                    <div className="grid-row m-y-1">
                        <input
                            type="text"
                            value={shareModalDog.uuid}
                            readOnly
                            className="xs-col-10 fs-90 txt-center ff-code width-350px"
                        />
                        <button
                            onClick={() => copy(shareModalDog.uuid)}
                            className="btn-accent xs-col-2"
                        ><i className="fa-regular fa-copy"></i></button>
                    </div>
                    <p className="m-y-1 fs-90">
                        In te voeren door andere gebruikers onder <br/>
                        Dashboard &gt; 'Hond toevoegen' &gt; 'Gedeelde hond toevoegen'
                    </p>
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
            {showContactModal &&
                <ModalContact
                    user={contactModalUser}
                    close={() => setShowContactModal(false)}
                />
            }
        </div>
    )
}
