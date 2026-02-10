/* 
// 🟢 7. Input Mirror Component 📌 Problem Statement Input me jo type karo, woh niche live display ho. ✅ Requirements Controlled input Live preview text 🧠 Concepts Tested two-way binding thinking
*/

import { useState } from "react";

export default function InputMirrorComponent() {
    const [text, setText] = useState('');
    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <p>{text}</p>
        </div>
    )
}

/* import React, { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Mango" },
  { id: 3, name: "Banana" },
  { id: 4, name: "Orange" },
  { id: 5, name: "Grapes" },
  { id: 6, name: "Papaya" },
  { id: 7, name: "Watermelon" },
  { id: 8, name: "Melon" },
  { id: 9, name: "Kiwi" },
  { id: 10, name: "Pomegranate" },
  { id: 11, name: "Strawberry" },
  { id: 12, name: "Berry" },
  { id: 13, name: "Blueberry" },
  { id: 14, name: "Blackberry" },
  { id: 15, name: "Raspberry" },
  { id: 16, name: "Pineapple" },
  { id: 17, name: "Green Apple" },
  { id: 18, name: "Guava" },
  { id: 19, name: "Tomato" },
  { id: 20, name: "Dragonfruit" }
];

export default function InfiniteScrollList() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const visibleItems = products.slice(0, page * itemsPerPage);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;

      if (bottom && page * itemsPerPage < products.length) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <div>
      <ul>
        {visibleItems.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
} */

/* import React, { useState, useRef, useEffect } from "react";

const products = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Orange" },
    { id: 5, name: "Grapes" },
    { id: 6, name: "Papaya" },
    { id: 7, name: "Watermelon" },
    { id: 8, name: "Melon" },
    { id: 9, name: "Kiwi" },
    { id: 10, name: "Pomegranate" },
    { id: 11, name: "Strawberry" },
    { id: 12, name: "Berry" },
    { id: 13, name: "Blueberry" },
    { id: 14, name: "Blackberry" },
    { id: 15, name: "Raspberry" },
    { id: 16, name: "Apple" },
    { id: 17, name: "Mango" },
    { id: 18, name: "Banana" },
    { id: 19, name: "Orange" },
    { id: 20, name: "Grapes" }
];

export default function InfiniteScrollList() {
    const [visibleItems, setVisibleItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null);

    const ITEMS_PER_PAGE = 5;

    // 🔥 fake fetch function
    const loadMore = async () => {
        if (loading) return; // duplicate call avoid

        setLoading(true);

        // fake API delay
        await new Promise((res) => setTimeout(res, 800));

        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;

        const newItems = products.slice(start, end);

        setVisibleItems((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);
        setLoading(false);
    };

    // first load
    useEffect(() => {
        loadMore();
    }, []);

    // 🔥 scroll logic
    const handleScroll = () => {
        const el = containerRef.current;
        if (!el || loading) return;

        const bottom =
            el.scrollTop + el.clientHeight >= el.scrollHeight - 50;

        if (bottom) {
            loadMore();
        }
    };

    return (
        <div
            ref={containerRef}
            onScroll={handleScroll}
            style={{
                height: "200px",
                overflowY: "auto",
                border: "1px solid black",
                padding: "10px"
            }}
        >
            <ul>
                {visibleItems.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

            {loading && <p>Loading...</p>}
        </div>
    );
} */