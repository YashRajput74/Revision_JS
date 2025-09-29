function Toast({ content, onClose }) {
    return (
        <div className="toast">
            <span>{content}</span>
            <button onClick={onClose}>x</button>
        </div>
    );
}

export default Toast;