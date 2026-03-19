import { useState } from "react";

export function useUndoRedo(initialState) {
    const [history, setHistory] = useState({
        past: [],
        present: initialState,
        future: []
    });
    const set = (newState) => {
        setHistory((prev) => {
            if (newState === prev.present) return prev;
            return {
                past: [...prev.past, prev.present],
                present: newState,
                future: []
            }
        })
    }
    const undo = () => {
        setHistory((prev) => {
            if (prev.past.length === 0) return prev;
            const previous = prev.past[prev.past.length - 1];
            const newPast = prev.past.slice(0, -1);
            return {
                past: newPast,
                present: previous,
                future: [prev.present, ...prev.future],
            }
        })
    }
    const redo = () => {
        setHistory((prev) => {
            if (prev.future.length === 0) return prev;
            const next = prev.future[0];
            const newFuture = prev.future.slice(1);
            return {
                past: [...prev.past, prev.present],
                present: next,
                future: newFuture
            }
        })
    }
    const reset = (newState) => {
        setHistory({
            past: [],
            present: newState,
            future: []
        })
    }
    return {
        state: history.present,
        set,
        undo,
        redo,
        reset
    }
}