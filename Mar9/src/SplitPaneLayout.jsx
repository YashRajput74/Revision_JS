import { useRef, useState } from "react"

export default function SplitPaneLayout({ children, direction = "horizontal" }) {
    const [sizes, setSizes] = useState(
        Array(children.length).fill(100)
    );
    const containerRef = useRef(null);
    const dragRef = useRef(null);
    const Min_size = 10;
    const handleMouseDown = (e, index) => {
        e.preventDefault();
        const containerRect = containerRef.current.getBoundingClientRect();
        dragRef.current = {
            index,
            startX: e.clientX,
            startY: e.clientY,
            startSizes: [...sizes],
            containerWidth: containerRect.width,
            containerHeight: containerRect.height
        }
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    }
    function handleMouseUp() {
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mousemove", handleMouseMove);
    }
    function handleMouseMove(e) {
        if (!dragRef.current) return;

        const { index, startX, startY, startSizes, containerWidth, containerHeight } = dragRef.current;

        let delta;
        if (direction === "horizontal") {
            delta = ((e.clientX - startX) / containerWidth) * 100;
        } else {
            delta = ((e.clientY - startY) / containerHeight) * 100;
        }

        let s1 = startSizes[index] + delta;
        let s2 = startSizes[index + 1] - delta;

        if (s1 < Min_size || s2 < Min_size) return;

        const newSizes = [...startSizes];
        newSizes[index] = s1;
        newSizes[index + 1] = s2;

        setSizes(newSizes);
    }
    return (
        <div ref={containerRef} className={`split-container ${direction}`} style={{
            display: "flex",
            flexDirection: direction === "horizontal" ? "row" : "column",
            width: "100%",
            height: "100vh"
        }}>
            {children.map((pane, index) => (
                <div key={index} style={{
                    flexBasis: `${sizes[index]}%`,
                    flexGrow: 0,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "auto"
                }}>
                    {pane}
                    {index < children.length - 1 && (
                        <div className="divider" onMouseDown={(e) => handleMouseDown(e, index)} style={{
                            cursor: direction === "horizontal" ? "col-resize" : "row-resize",
                            background: "#ddd",
                            width: direction === "horizontal" ? "6px" : "100%",
                            height: direction === "horizontal" ? "100%" : "6px"
                        }} />
                    )}
                </div>
            ))}
        </div>
    )
}