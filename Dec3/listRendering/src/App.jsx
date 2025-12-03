import { useEffect, useState } from "react";
import VirtualList from "./VirtualList";

const data = Array.from({ length: 20000 }, (_, i) => `Item ${i + 1}`);

export default function App() {
    const [showList, setShowList] = useState(false);
    const [showVirtual,setShowVirtual]=useState(false);
    const handleOptimizedClick = ()=>{
        console.time("virtual-render");
        setShowVirtual(true);
    }
    const handleClick = ()=>{
        console.time("naive-render");
        setShowList(true);
    }
    useEffect(()=>{
        if(showList){
            console.timeEnd("naive-render")
        }
    },[showList]);
    return (
        <>
            <button onClick={handleClick}>Render 20k Items</button>
            <button onClick={handleOptimizedClick}>Render 20k Items(optimized)</button>
            {showList && (
            <div>
                {data.map((item,i) => <div key={i}>{item}</div>)}
            </div>
            )}
            {showVirtual && <VirtualList data={data}/>}
        </>
    )
}