export default function Modal({
    children,
    close,
}) {

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={close}></div>
            <div className="modal-content flex-col align-center">
                {children}
            </div>
        </div>
    )
}
