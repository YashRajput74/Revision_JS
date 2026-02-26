import { useRef, useState } from "react";

const initialNumber = 10000;
const dataArray = Array.from({ length: initialNumber }, (_, i) => i);

export default function VirtualizedList() {
    const [scrollTop, setScrollTop] = useState(0); //kitna scroll kiya hai abhi top se
    const containerRef = useRef(null);
    const rowHeight = 40;
    const containerHeight = 400;
    const onScroll = (e) => {
        setScrollTop(e.target.scrollTop);
    };
    const startIndex = Math.floor(scrollTop / rowHeight);
    const visibleCount = Math.ceil(containerHeight / rowHeight)+2;
    const endIndex =  Math.min(startIndex + visibleCount, dataArray.length);;
    const paddingTop = startIndex * rowHeight;
    const visibleItems = dataArray.slice(startIndex, endIndex);
    return (
        <div style={{ height: 400, overflowY: "auto", border: "1px solid black" }} ref={containerRef} onScroll={onScroll}>
            <div style={{ height: initialNumber * rowHeight}}>
                <div style={{  transform: `translateY(${paddingTop}px)` }}>

                    {visibleItems.map((value) => (
                        <div key={value} style={{ height: `${rowHeight}` }}>{value}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

/* 
Machine Coding Challenge
Build: Virtualized List Component (Like React Window – From Scratch)
This is a VERY strong interview question.

✅ Core Requirements
Render 10,000+ rows
Only render visible rows in viewport
Fixed row height
Scroll container based virtualization
Smooth scrolling (no flicker)

⚡ Advanced Requirements
Dynamic row height (bonus)
Scroll to index method
Maintain scroll position on data update
Overscan rows (buffer)
Support keyboard navigation

🚀 Edge Cases
Fast scrolling
Window resize
Data length change
Prevent blank space glitch
Avoid re-rendering entire list on scroll

🏗 Architecture Expectations
Separate:
Scroll logic
Visible calculation logic
Use refs properly
Avoid state updates on every pixel scroll
Efficient calculations (O(1) math)

*/