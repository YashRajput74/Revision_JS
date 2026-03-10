import { useEffect, useState } from "react"

const dataset = [
    "JavaScript",
    "Java",
    "Python",
    "React",
    "NodeJS",
    "NextJS",
    "TypeScript"
]

export default function DebouncedSearch() {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 300);
        return () => clearTimeout(timeout);
    }, [inputValue]);

    const debouncedResult = dataset.filter(value => value.toLowerCase().includes(debouncedValue.toLowerCase()));
    const highlightMatch = (originalText, searchedText) => {
        if (!searchedText) return;
        const index = originalText.toLowerCase().indexOf(searchedText.toLowerCase());
        if (index === -1) return originalText;
        const beforeIndex = originalText.slice(0, index);
        const matchIndex = originalText.slice(index, index + searchedText.length);
        const afterIndex = originalText.slice(index + searchedText.length);
        return (
            <>
                {beforeIndex}
                <mark>{matchIndex}</mark>
                {afterIndex}
            </>
        )

    }
    return (
        <div>
            <label htmlFor="inputSearch">Enter the input</label>
            <input type="text" id="inputSearch" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {debouncedResult.map((value) => (
                <p key={value}>{highlightMatch(value,debouncedValue)}</p>
            ))}
        </div>
    )
}