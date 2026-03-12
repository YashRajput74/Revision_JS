import { useRef, useState } from "react"

export default function Modal({ title, children }) {
    const [position, setPosition] = useState({ x: 200, y: 200 });
    const [size, setSize] = useState({ width: 400, height: 300 });
    const modalRef = useRef(null);
    const startRef = useRef(null);
    const resizeRef = useRef(null);
    function handleMouseDown(e) {
        startRef.current = {
            mouseX: e.clientX,
            mouseY: e.clientY,
            startX: position.x,
            startY: position.y,
        }
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    }
    function handleMouseMove(e) {
        const dx = e.clientX - startRef.current.mouseX;
        const dy = e.clientY - startRef.current.mouseY;
        setPosition({
            x: startRef.current.startX + dx,
            y: startRef.current.startY + dy
        })
    }
    function handleMouseUp() {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    }
    function handleResize(e) {
        e.stopPropagation();
        resizeRef.current = {
            mouseX: e.clientX,
            mouseY: e.clientY,
            startWidth: size.width,
            startHeight: size.height
        }
        window.addEventListener("mousemove", handleResizeMove);
        window.addEventListener("mouseup", handleResizeUp);
    }
    function handleResizeUp() {
        window.removeEventListener("mousemove", handleResizeMove);
        window.removeEventListener("mouseup", handleResizeUp);
    }
    function handleResizeMove(e) {
        const dx = e.clientX - resizeRef.current.mouseX;
        const dy = e.clientY - resizeRef.current.mouseY;
        const newWidth = Math.max(300, resizeRef.current.startWidth + dx);
        const newHeight = Math.max(200, resizeRef.current.startHeight + dy);
        setSize({
            width: newWidth,
            height: newHeight
        })
    }
    return (
        <div ref={modalRef} className="modal" style={{ position: "absolute", left: position.x, top: position.y, width: size.width, height: size.height }}>
            <div className="modal-header" onMouseDown={handleMouseDown}>
                {title}
            </div>
            <div className="modal-content">
                {children}
            </div>
            <div className="resize-handle" onMouseDown={handleResize}></div>
        </div>
    )
}