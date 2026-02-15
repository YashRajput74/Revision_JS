/* 
Build a simple autocomplete component in React that:
    Has an input field
    Filters a local array of fruits
    Shows matching results as the user types
    Hides results when input is empty
    Matching should be case-insensitive
*/

/* 
part 2:
Clicking a suggestion fills the input
Suggestions disappear after clicking
*/

/* 
part3:
Make it so arrow keys (↑ ↓) navigate suggestions
Pressing Enter selects highlighted suggestion
*/

import { useEffect, useState } from "react";

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

export default function BasicComponent() {
    const [searchInput, setSearchInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    useEffect(() => {
        setHighlightedIndex(-1);
    }, [searchInput]);

    const handleSelect = (fruit) => {
        setSearchInput(fruit);
        setIsOpen(false);
        setHighlightedIndex(-1);
    };

    const handleKeyDown = (e) => {
        if (!isOpen || result.length === 0) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlightedIndex((prev) =>
                prev < result.length - 1 ? prev + 1 : 0
            );
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlightedIndex((prev) =>
                prev > 0 ? prev - 1 : result.length - 1
            );
        }

        if (e.key === "Enter" && highlightedIndex >= 0) {
            e.preventDefault();
            handleSelect(result[highlightedIndex]);
        }
    };
    const result = searchInput === "" ? [] : data.filter((fruit) => fruit.toLowerCase().includes(searchInput.toLowerCase()))
    return (
        <div>
            <label htmlFor="Fruits">Fruits</label>
            <input id="Fruits" value={searchInput} onChange={(e) => {
                setSearchInput(e.target.value)
                setIsOpen(true);
            }} placeholder="Search for fruits" onKeyDown={handleKeyDown} />
            {
                isOpen && result.length > 0 && <ul>
                    {result.map((fruit,index) => <li key={fruit} onClick={() => handleSelect(fruit)} style={{ backgroundColor: index == highlightedIndex ? "#eee" : 'white' }}>{fruit}</li>)}
                </ul>
            }
        </div>
    )
}