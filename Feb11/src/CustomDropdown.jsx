import React, { useState, useEffect, useRef } from 'react';
/* 
Custom dropdown
Custom Dropdown (Outside Click Close)
Tests: useRef, event listeners
*/
/* 
multiple buttons, each button... that will be put in the top div
*/
const options = [
    { id: 1, name: 'India' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'England' },
    { id: 4, name: 'China' },
];
export default function CustomDropdown() {
    const [isShown, setIsShown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const placeholder = 'click to select';
    const ref = useRef(null);
    useEffect(() => {
        /* logic if clicked outside then isShown false it will use Ref */
        function handleClickOutside() {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsShown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });
    function handleSelect(option) {
        setSelectedOption(option.name);
        setIsShown(false);
    }
    return (
        <div ref={ref}>
            {!isShown && (
                <button onClick={() => setIsShown(true)} style={{ width: '100%' }}>
                    {!selectedOption ? placeholder : selectedOption}
                </button>
            )}
            {isShown && (
                <div>
                    <div style={{ border: '1px solid black', padding: '0px 5px' }}>
                        options...
                    </div>
                    {options.map((option) => (
                        <button
                            onClick={() => handleSelect(option)}
                            style={{ display: 'block', width: '100%' }}
                        >
                            {option.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
