import { useUndoRedo } from "./undoRedo"

export default function UndoRedoFunc() {
    const { state, set, undo, redo, reset } = useUndoRedo("");
    return (
        <div>
            <h2>Undo/Redo Demo</h2>
            <input value={state} onChange={(e) => set(e.target.value)} />
            <button onClick={undo}>Undo</button>
            <button onClick={redo}>Redo</button>
            <button onClick={() => reset("")}>Reset</button>
        </div>
    )
}