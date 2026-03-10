import { useRef, useState } from "react";

const initialEditorState = {
    lines: [
        "const a=10;",
        "function test(){",
        "return a",
        "}"
    ],
    cursor: {
        line: 0,
        column: 0
    },
    selection: null
}

export default function RichCodeEditor() {
    const [editorState, setEditorState] = useState(initialEditorState);
    const editorRef = useRef(null);
    function handleKeyDown(e) {
        if (e.key === "Tab") {
            e.preventDefault();
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);
            const tabNode = document.createTextNode("    ");
            range.insertNode(tabNode);
            range.setStartAfter(tabNode);
            range.setEndAfter(tabNode);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    function handleInput(e) {
        const text = e.currentTarget.innerText;
        const lines = text.split('\n');
        if(JSON.stringify(lines)===JSON.stringify(editorState.lines)) return;
        setEditorState(prev => ({
            ...prev,
            lines
        }))
    }
    return (
        <div>
            <div className="editor">
                <div className="line-numbers">
                    {editorState.lines.map((_, index) => (
                        <div key={index} className="line-number">{index + 1}</div>
                    ))}
                </div>
                <div className="code-area" ref={editorRef} contentEditable suppressContentEditableWarning onKeyDown={handleKeyDown} onInput={handleInput}>
                    {editorState.lines.map((line, index) => (
                        <div key={index} className={`code-line ${editorState.cursor.line === index ? "active-line" : ""}`} >{line}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}