import { ToastProvider, useToast } from './ToastProvider';
import ToastContainer from './ToastContainer';
import './App.css'

export default function App() {
    return (
        <ToastProvider>
            <MainComponent />
            <ToastContainer />
        </ToastProvider>
    );
}

function MainComponent() {
    const { addToast } = useToast();

    return (
        <button onClick={() => addToast({ content: "Hello World!", position: "bottom-right" })}>
            Show Toast
        </button>
    );
}
