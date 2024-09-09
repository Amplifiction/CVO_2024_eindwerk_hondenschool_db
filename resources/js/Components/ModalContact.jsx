import Modal from "./Modal";

export default function ModalContact ({user, close}) {
    return (
        <Modal
            close={close}
        >
            <div className="flex-row just-end width-100pc">
                <button
                    onClick={close}
                    className="btn-accent"
                ><i className="fa-solid fa-xmark"></i></button>
            </div>
            <h3 className="m-y-05">
                {user.first_name} {user.last_name}
            </h3>
            <div>
                <i className="fa-solid fa-envelope"></i>{' '}
                <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
            {user.cellphone &&
                <div>
                    <i className="fa-solid fa-mobile-screen-button"></i>{' '}
                    <a href={`tel:${user.cellphone}`}>{user.cellphone}</a>
                </div>
            }
            {user.phone &&
                <div>
                    <i className="fa-solid fa-square-phone"></i>{' '}
                    <a href={`tel:${user.phone}`}>{user.phone}</a>
                </div>
            }
        </Modal>
    )
}
