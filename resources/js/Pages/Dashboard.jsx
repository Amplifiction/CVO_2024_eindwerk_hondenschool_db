import { usePage, router, Link } from "@inertiajs/react"
import IndexDogs from "../Components/Dogs/IndexDogs"
import Modal from "../Components/Modal"
import { useState } from "react"
import IndexMemberships from "../Components/Memberships/IndexMemberships"
import copy from "copy-to-clipboard";
import ModalContact from "../Components/ModalContact"

export default function Dashboard ({dogs, memberships}) {
    const { flash, auth, basePath } = usePage().props

    let role = '';
    switch(auth.user.role_id) {
        case 2: role='(beheerder)'; break;
        case 3: role='(super-beheerder)'; break;
        // default: role='';
    }

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
        router.delete(`${basePath}/dogs/${id}`, {})
        setShowDogDeleteModal(false)
    }

    const [showMsDeleteModal, setShowMsDeleteModal] = useState(false)
    const [deleteModalMs, setDeleteModalMs] = useState({})
    const handleMsDeleteEvent = (ms) => {
        setDeleteModalMs(ms)
        setShowMsDeleteModal(true)
    }
    const handleMsDelete = (id) => {
        router.delete(`${basePath}/memberships/${id}`, {})
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
                    <div className="bg6 fc12 padding-20px m-y-05">
                        <i className="fa-solid fa-circle-info fs-150 fc10"></i>
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
                                href={`${basePath}/dashboardadmin`}
                                as="button"
                                className="btn-accent m-y-05"
                            >Admin dashboard</Link>
                        </div>
                    }
                </div>
                <div className="m-y-05 fc6">{`Welkom, ${auth.user.first_name}! ${role}`}</div>
                <div>
                    <Link
                        href={`${basePath}/editProfile`}
                        as="button"
                        className="btn-accent"
                    >Profiel bewerken</Link>
                    <Link
                        href={`${basePath}/editPassword`}
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
                    <p className="m-y-05 fw-bold">
                        Weet u zeker dat u {deleteModalDog.name} wilt verwijderen?
                    </p>
                    <p className="m-y-05">
                        Deze actie verwijdert ook alle lidmaatschappen die u met de hond heeft.
                    </p>
                    <div className="flex-row just-center m-y-05">
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
                    <p className="m-y-05 fw-bold">Om {shareModalDog.name} te delen, deel je de volgende code:</p>
                    <div className="grid-row m-y-05">
                        <input
                            type="text"
                            value={shareModalDog.uuid}
                            readOnly
                            className="xs-col-10 fs-90 txt-center ff-code fc6 width-350px"
                        />
                        <button
                            onClick={() => copy(shareModalDog.uuid)}
                            className="btn-accent xs-col-2"
                        ><i className="fa-regular fa-copy"></i></button>
                    </div>
                    <p className="m-y-05 fs-90">
                        In te voeren door andere gebruikers onder <br/>
                        Dashboard &gt; 'Hond toevoegen' &gt; 'Gedeelde hond toevoegen'
                    </p>
                </Modal>
            }
            {showMsDeleteModal &&
                <Modal
                    close={() => setShowMsDeleteModal(false)}
                >
                    <p className="m-y-05 fw-bold">
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
