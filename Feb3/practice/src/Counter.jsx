import { useEffect, useState } from "react"

export default function Counter() {
	const [currentTime, setCurrentTime] = useState(0);//countdown value
	const [timer, setTimer] = useState(0);// controlled input
	const [isCompleted, setIsCompleted] = useState(false);// state that shows after timer raches zero

	const handleClick = () => {
		setCurrentTime(timer);
	}
	
	useEffect(() => {
		if (currentTime <= 0) return;
		const interval = setInterval(() => {
			setCurrentTime((prev) => prev - 1);
		}, 1000)
		return () => clearInterval(interval);
	}, [currentTime]);

	useEffect(()=>{
		if(currentTime!==0) return;
			setIsCompleted(true);
			const timeout = setTimeout(() => {
				setIsCompleted(false);
			}, 3000);
		return ()=>clearTimeout(timeout);
	},[currentTime]);

	return (
		<div>
			<p>{currentTime}</p>
			<input type="number" value={timer} onChange={(e) => setTimer(Number(e.target.value))} />
			<button onClick={handleClick}>start</button>
			{currentTime>0 && <div>running</div>}
			{isCompleted && <div>completed </div>}
		</div>
	)
}