/* 
CRDT‑based Collaborative Editor Engine (Google Docs Core Logic)
Not UI-heavy. This is pure frontend systems design + data structures.

🎯 Goal
Multiple users editing the same document:

User A types → "Hello"
User B types → "World"
Final result should be:
Hello World
WITHOUT overwriting each other.

✅ Core Requirements
1️⃣ Shared Document Model
Maintain document as:
[
  { id: "a1", char: "H" },
  { id: "a2", char: "e" }
]
Each character has a unique ID.

2️⃣ Insert Operation
insert(char, position, userId)
Instead of index-based → use position IDs.

3️⃣ Delete Operation
delete(charId)
Mark character as deleted (don’t remove directly).

4️⃣ Operation Broadcasting
Simulate:
User A → insert
User B → insert
Apply operations in any order → result should be same.

⚡ Advanced Requirements
5️⃣ Conflict Resolution
If two users insert at same position:
A inserts "H"
B inserts "W"
Resolve deterministically using:
timestamp + userId

6️⃣ Ordering Algorithm
You’ll need something like:
position = [0.1, 0.2, 0.3]
(Fractional indexing / CRDT ordering)

7️⃣ Offline Support
User goes offline:
makes edits
comes back online
merge changes correctly
*/

import { useRef, useState } from "react"
import { CRDT } from "./crdt";
import { useState, useRef, useEffect } from "react";
import { CRDT } from "./crdt/engine";
import socket from "./socket";

export default function Editor() {

    const crdtRef = useRef(new CRDT("clientA"));
    const [text, setText] = useState("");

    function handleInput(e) {

        const crdt = crdtRef.current;

        const value = e.target.value;
        const index = e.target.selectionStart - 1;

        let op;

        // Detect insert
        if (value.length > text.length) {
            const insertedChar = value[index];
            op = crdt.insert(insertedChar, index);
        }

        // Detect delete
        else {
            op = crdt.delete(index + 1);
        }

        // Send operation to server
        if (op) {
            socket.send(JSON.stringify(op));
        }

        setText(crdt.getText());
    }

    // Listen for remote operations
    useEffect(() => {

        socket.onmessage = (event) => {

            const op = JSON.parse(event.data);

            const crdt = crdtRef.current;

            if (op.type === "insert") {
                crdt.applyInsert(op);
            }

            if (op.type === "delete") {
                crdt.applyDelete(op);
            }

            setText(crdt.getText());
        };

    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Collaborative Editor</h2>

            <textarea
                value={text}
                onChange={handleInput}
                style={{
                    width: "100%",
                    height: "300px",
                    fontSize: "18px",
                    padding: "10px"
                }}
            />
        </div>
    );
}