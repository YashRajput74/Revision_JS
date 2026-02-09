import { useEffect, useState } from "react";

export default function StopWatch() {
    const [currentTime, setCurrentTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(()=>setCurrentTime((prev)=>prev+1),1000);
        }
        return ()=>clearInterval(interval);
    })
    return (
        <div>
            <div>{currentTime}</div>
            <button onClick={()=>setIsRunning(true)}>Start</button>
            <button onClick={()=>setIsRunning(false)}>Stop</button>
            <button onClick={()=>setCurrentTime(0)}>Reset</button>
        </div>
    )
}