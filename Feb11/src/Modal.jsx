export default function Modal({isOpen,onClose,children}){
    if(!isOpen) return null;
    return (
        <div onClick={onClose} className="overlay">
            <div className="modal">
                {children}
            </div>
        </div>
    )
}