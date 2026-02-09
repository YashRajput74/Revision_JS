import { useEffect, useState } from "react"

export default function Timer() {
    const [currentTime, setCurrentTime] = useState(10);
    const [inputTime, setInputTime] = useState(20);
    function startTimer() {

    }

    useEffect(() => {
        const Interval = setInterval(() => setCurrentTime((prev) => prev - 1), 1000);
        return () => clearInterval(Interval);
    }, [currentTime]);

    return (
        <div>
            <h3>Timer</h3>
            <div>
                <label htmlFor="Input Time">Input the time: </label>
                <input type="number" id="Input Time" placeholder="input the time" value={inputTime} />
                <button onClick={() => startTimer()}>Start</button>
            </div>
            <p>{currentTime}</p>
            <button>Stop</button>
            <button onClick={() => setInputTime(10)}>Reset</button>
        </div>
    )
}