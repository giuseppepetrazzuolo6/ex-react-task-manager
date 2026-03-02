import ReactDOM from "react-dom"

export default function Modal({
    title,
    content,
    show = false,
    onClose = () => { },
    onConfirm = () => { }
}) {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal">
                <p className="fs-3">{title}</p>
                {content}
                <button className="btn btn-dark" onClick={onClose}>Annulla</button>
                <button className="btn btn-success" onClick={onConfirm}>Conferma</button>
            </div>
        </div>,
        document.body
    )
}
