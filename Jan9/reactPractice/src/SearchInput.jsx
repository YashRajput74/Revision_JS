import { useEffect, useState } from "react";

export default function SearchInput() {

    const [input, setInput] = useState("");
    const [debouncedInput, setDebouncedInput] = useState("");

    useEffect(()=>{
        if(!debouncedInput) return;
        fetch(`https://something.com/search?q=${debouncedInput}`)
            .then((res)=>res.json())
            .then((data)=>console.log(data));
        
    },[debouncedInput])

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedInput(input);//when we get debounced input we call the api... but the catch of cancelling the api let us code that later...
        }, 300);

        return () => clearTimeout(timer);
    }, [input]);

    return (
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search Input" />
    )
}