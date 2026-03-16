import { useMemo, useEffect } from "react";
import CursorRenderer from "./CursorRenderer";
import usePresenceManager from "./PresenceManager";
import { newSocket } from "./SocketSimulation";

const USER_ID = "you";

export default function RealTimeTextEditor() {

    const users = usePresenceManager();

    function getCursorPosition() {
        const selection = window.getSelection();
        if (!selection.rangeCount) return 0;

        const range = selection.getRangeAt(0);
        return range.startOffset;
    }

    function debounce(fn, delay) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    }

    const sendCursor = useMemo(() =>
        debounce((position) => {
            newSocket.broadcast({
                type: "CURSOR_MOVE",
                userId: USER_ID,
                position
            });
        }, 100)
        , []);

    function handleCursorMove() {
        const position = getCursorPosition();
        sendCursor(position);
    }

    // simulate other users typing
    useEffect(() => {

        const otherUsers = ["yash", "kritika", "abhishek"];

        const interval = setInterval(() => {

            const randomUser = otherUsers[Math.floor(Math.random() * otherUsers.length)];

            newSocket.broadcast({
                type: "CURSOR_MOVE",
                userId: randomUser,
                position: Math.floor(Math.random() * 40)
            });

        }, 1500);

        return () => clearInterval(interval);

    }, []);

    return (
        <div style={{ position: "relative", width: "500px" }}>

            <div
                contentEditable
                onKeyUp={handleCursorMove}
                onMouseUp={handleCursorMove}
                style={{
                    width: "500px",
                    height: "400px",
                    border: "1px solid black",
                    padding: "15px",
                    outline: "none"
                }}
            ></div>

            <CursorRenderer users={users} />

        </div>
    );
}