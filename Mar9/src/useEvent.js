import { useEffect } from "react";
import eventBus from "./EventBus";

export default function useEvent(eventName, handler) {
    useEffect(() => {
        eventBus.on(eventName, handler);
        return ()=>{
            eventBus.off(eventName,handler)
        }
    }, [eventName, handler])
}
