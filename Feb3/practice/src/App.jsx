import { useEffect, useState } from "react"
import ToDoApp from "./ToDoApp";
import { ThemeProvider } from "./ThemeContext";
import { useToast } from "./ToastContext";
import ToastProvider from "./ToastProvider";
import CartProvider from "./CartProvider";
import Products from "./Products";
import Cart from "./Cart";
import Modal from "./Modal";
import Timer from "./Timer";
import StopWatch from "./StopWatch";

export default function App() {
	return (
		<ThemeProvider>
			<ToastProvider>
				<AppContent />
			</ToastProvider>
		</ThemeProvider>
	);
}

function AppContent() {
	const { showToast } = useToast(); // ✅ now safe
	const [currentTime, setCurrentTime] = useState(0);
	const [timer, setTimer] = useState(0);
	const [isCompleted, setIsCompleted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => setCurrentTime(timer);

	useEffect(() => {
		if (currentTime <= 0) return;
		const interval = setInterval(() => setCurrentTime(prev => prev - 1), 1000);
		return () => clearInterval(interval);
	}, [currentTime]);

	useEffect(() => {
		if (currentTime !== 0) return;
		setIsCompleted(true);
		const timeout = setTimeout(() => setIsCompleted(false), 3000);
		return () => clearTimeout(timeout);
	}, [currentTime]);

	return (
		<div>
			<p>{currentTime}</p>
			<input type="number" value={timer} onChange={(e) => setTimer(Number(e.target.value))} />
			<button onClick={handleClick}>start</button>
			<ToDoApp />
			{currentTime > 0 && <div>running</div>}
			{isCompleted && <div>completed</div>}
			<button onClick={() => showToast({ message: "Success", type: "success" })}>Success</button>
			<button onClick={() => showToast({ message: "Error", type: "error" })}>Error</button>
			<br /><br /><br /><br /><br /><br />
			<CartProvider >
				<Products />
				<Cart />
			</CartProvider>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>
			{isOpen && <Modal onClose={() => setIsOpen(false)} />}
			{/* <Timer /> */}
			<StopWatch />
		</div>
	);
}
