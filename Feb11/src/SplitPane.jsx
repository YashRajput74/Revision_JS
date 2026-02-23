import { useState } from 'react'
import './SplitPane.css'

export default function SplitPane() {
    const [leftWidth, setLeftWidth] = useState(300);
    const [dragging, setDragging] = useState(false);
    const minWidth = 100;
    const handleMouseMove=(e)=>{
        if(!dragging)return;
        if(e.clientX<minWidth) return;
        setLeftWidth(e.clientX);
    }
    return (
        <>
            <h2>Resizable Split Pane</h2>
            <div
                style={{ display: 'flex', padding: '10px', border: '2px solid black' }} onMouseMove={handleMouseMove} onMouseUp={()=>setDragging(false)}
            >
                <div
                    style={{
                        display: 'flex',
                        padding: '10px',
                        border: '2px solid black',
                        minWidth: minWidth,
                        width: `${leftWidth}px`,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "200px"
                    }}
                >
                    Pane 1
                </div>
                <div className="split-line" onMouseDown={()=>setDragging(true)}></div>
                <div
                    style={{
                        display: 'flex',
                        padding: '10px',
                        border: '2px solid black',
                        flex:1,
                        minWidth: "100px",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "200px"
                    }}
                >
                    Pane 2
                </div>
            </div>
        </>
    )
}