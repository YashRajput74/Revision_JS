export default function Toast({ toast, onClose }) {
    return (
        <div>
            {toast.map(t => (
                <div key={t.id}>
                    <span>{t.message}</span>
                    <button onClick={()=>onClose(t.id)}>✖</button>
                </div>
            ))}
        </div>
    );
}