export default function Modal({onClose}){
    return (
        <div className="modal container">
            <div className="modal-content">
                This is a modal
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}