import { usePage, Link } from "@inertiajs/react";
import { useState } from "react"
import IndexRequestedMs from "../Components/Memberships/IndexRequestedMs";
import ModalContact from "../Components/ModalContact"
import IndexAllMs from "../Components/Memberships/IndexAllMs";

export default function DashboardAdmin ({requestedMs, allMs, statuses}) {
    const { auth, basePath } = usePage().props

    let role = '';
    switch(auth.user.role_id) {
        case 2: role='(beheerder)'; break;
        case 3: role='(super-beheerder)'; break;
        // default: role='';
    }

    const [showContactModal, setShowContactModal] = useState(false)
    const [contactModalUser, setContactModalUser] = useState({})
    const handleShowContactModal = (user) => {
        setShowContactModal(true)
        setContactModalUser(user)
    }

    return (
        <div className="m-y-3">
            <div className="grid-row">
                <div className="xs-col-12 m-col-9">
                    <h1>Admin dashboard</h1>
                </div>
                <div className="xs-col-12 m-col-3 flex-row just-end-m">
                    <Link
                        href={`${basePath}/dashboard`}
                        as="button"
                        className="btn-accent m-y-05"
                    >Persoonlijk dashboard</Link>
                </div>
            </div>
            <div className="m-y-05 fc6">{`Welkom, ${auth.user.first_name}! ${role}`}</div>
            <IndexRequestedMs
                requestedMs={requestedMs}
                statuses={statuses}
                contactModalEvent={handleShowContactModal}
            />
            <IndexAllMs
                allMs={allMs}
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
