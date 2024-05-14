import Modal from "./Modal";

export default function ModalContact ({user, close}) {
    <Modal
        close={close}
    >
        <div className="flex-row just-end width-100pc">
            <button
                onClick={close}
                className="btn-accent"
            ><i className="fa-solid fa-xmark"></i></button>
        </div>
        <h3 className="m-y-1">
            {user.first_name} {user.last_name}
        </h3>
        <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
        {user.cellphone &&
            <p>GSM: <a href={`tel:${user.cellphone}`}>{user.cellphone}</a></p>
        }
        {user.phone &&
            <p>Telefoon: <a href={`tel:${user.phone}`}>{user.phone}</a></p>
        }
    </Modal>

}
