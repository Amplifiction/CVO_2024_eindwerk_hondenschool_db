import { usePage, Link } from "@inertiajs/react";
import { useState } from "react"
import IndexRequestedMs from "../Components/Memberships/IndexRequestedMs";
import ModalContact from "../Components/ModalContact"

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
                <ModalContact
                    user={contactModalUser}
                    close={() => setShowContactModal(false)}
                />
            }
        </div>
    )
}
