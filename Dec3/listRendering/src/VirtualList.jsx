import { useEffect, useState } from "react";

function useVirtual({ itemCount, itemHeight, containerHeight, scrollTop }) {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
        itemCount - 1,
        Math.floor((scrollTop + containerHeight) / itemHeight)
    );
    const items = [];
    for (let i = startIndex; i <= endIndex; i++) {
        items.push({
            index: i,
            top: i * itemHeight,
        });
    }
    return {
        items,
        totalHeight: itemCount * itemHeight,
    };
}
export default function VirtualList({ data }) {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        console.timeEnd("virtual-render");
    }, [])

    const { items, totalHeight } = useVirtual({
        itemCount: data.length,
        itemHeight: 30,
        containerHeight: 400,
        scrollTop,
    });

    return (
        <div
            style={{ height: 400, overflow: "auto", border: "1px solid black", position: "relative" }}
            onScroll={(e) => setScrollTop(e.target.scrollTop)}>
            <div style={{ height: totalHeight, position: "relative" }}>
                {items.map((item) => (
                    <div key={item.index} style={{
                        position: "absolute",
                        top: item.top,
                        left: 0,
                        right: 0,
                        height: 30,
                        borderBottom: "1px solid #eee",
                        padding: "0 4px",
                    }}>
                        {data[item.index]}
                    </div>
                ))}
            </div>
        </div>
    )
}