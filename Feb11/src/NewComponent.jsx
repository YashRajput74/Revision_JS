import { useEffect, useRef, useState } from "react";
const data = [
    "Apple", "Banana", "Orange", "Mango", "Strawberry",
    "Blueberry", "Raspberry", "Blackberry", "Pineapple", "Grapes",
    "Watermelon", "Cantaloupe", "Honeydew", "Peach", "Plum",
    "Cherry", "Pear", "Kiwi", "Papaya", "Guava",
    "Lemon", "Lime", "Apricot", "Pomegranate", "Fig",
    "Date", "Coconut", "Avocado", "Passionfruit", "Dragonfruit",
    "Lychee", "Persimmon", "Cranberry", "Grapefruit", "Tangerine",
    "Clementine", "Nectarine", "Mulberry", "Starfruit", "Jackfruit",
    "Durian", "Kumquat", "Quince", "Gooseberry", "Boysenberry",
    "Currant", "Elderberry", "Soursop", "Rambutan", "Mangosteen"
]

export default function NewComponent() {
    const [searchInput, setSearchInput] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const controllerRef = useRef(null);
    useEffect(() => {
        let timeout;
        if (searchInput) {
            timeout = setTimeout(() => {
                setIsShown(true)
                //we will create a fake api here
            }, 300);
        }
        return () => clearTimeout(timeout)
    }, [searchInput])
    return (
        <div>
            <label htmlFor="Fruits">
                Search Fruits:
            </label>
            <input id="Fruits" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            {loading && <p>Loading...</p>}

            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}