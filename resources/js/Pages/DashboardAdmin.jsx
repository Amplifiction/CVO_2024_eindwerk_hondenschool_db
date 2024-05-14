import { usePage, Link } from "@inertiajs/react";
import { useState } from "react"
import IndexRequestedMs from "../Components/Memberships/IndexRequestedMs";
import Modal from "../Components/Modal"

export default function DashboardAdmin ({requestedMs, statuses}) {
    const { auth } = usePage().props

    const [showContactModal, setShowContactModal] = useState(false)
    const [contactModalUser, setContactModalUser] = useState({})
    const handleShowContactModal = (user) => {
        setShowContactModal(true)
        setContactModalUser(user)
    }

    return (
        <div className="m-y-3">
            <div className="grid-row">
                <div className="xs-col-12 m-col-6">
                    <h1>Admin dashboard</h1>
                </div>
                <div className="xs-col-12 m-col-6 flex-row just-end-m">
                    <Link
                        href="/dashboard"
                        as="button"
                        className="btn-accent"
                    >Persoonlijk dashboard</Link>
                </div>
            </div>
            <div className="m-y-1">{`Welkom, ${auth.user.first_name}.`}</div>
            <IndexRequestedMs
                requestedMs={requestedMs}
                statuses={statuses}
                contactModalEvent={handleShowContactModal}
            />
            {showContactModal &&
                <Modal
                    close={() => setShowContactModal(false)}
                >
                    <div className="flex-row just-end width-100pc">
                        <button
                            onClick={() => setShowContactModal(false)}
                            className="btn-accent"
                        ><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <h3 className="m-y-1">
                        {contactModalUser.first_name} {contactModalUser.last_name}
                    </h3>
                    <p>Email: <a href={`mailto:${contactModalUser.email}`}>{contactModalUser.email}</a></p>
                    {contactModalUser.cellphone &&
                        <p>GSM: <a href={`tel:${contactModalUser.cellphone}`}>{contactModalUser.cellphone}</a></p>
                    }
                    {contactModalUser.phone &&
                        <p>Telefoon: <a href={`tel:${contactModalUser.phone}`}>{contactModalUser.phone}</a></p>
                    }
                </Modal>
            }
        </div>
    )
}
