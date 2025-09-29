import { useEffect } from "react";
import { useToast } from "./ToastProvider";
import Toast from "./Toast";

function ToastContainer() {
    const { currentToasts, removeToast } = useToast();

    useEffect(() => {
        const timers = currentToasts.map(toast => {
            let duration;

            switch (toast.priority) {
                case "high":
                    duration = 7000;
                    break;
                case "medium":
                    duration = 5000;
                    break;
                case "low":
                default:
                    duration = 3000;
                    break;
            }

            const timeElapsed = Date.now() - toast.startTime;
            const timeRemaining = Math.max(duration - timeElapsed, 0);

            const timeout = setTimeout(() => {
                removeToast(toast.id);
            }, timeRemaining);

            return timeout;
        });

        return () => timers.forEach(clearTimeout);
    }, [currentToasts]);

    const grouped = currentToasts.reduce((acc, toast) => {
        acc[toast.position] = acc[toast.position] || [];
        acc[toast.position].push(toast);
        return acc;
    }, {});

    return (
        <>
            {Object.entries(grouped).map(([position, toasts]) => (
                <div key={position} className={`toast-group ${position}`}>
                    {toasts.map(toast => (
                        <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
                    ))}
                </div>
            ))}
        </>
    );
}

export default ToastContainer;
