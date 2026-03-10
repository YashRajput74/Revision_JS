import { useEffect } from "react";
import { getQuery, setQueryData, subscribe } from "./QueryCache"


export default function useQuery(key, queryFn) {
    const query = getQuery(key);
    const [_, forceRerender] = useState(0);
    const rerender = () => {
        forceRerender(x => x + 1);
    }
    useEffect(() => {
        const unsubscribe = subscribe(key, rerender);
        return unsubscribe;
    }, [])
    async function fetchData() {
        try {
            setQueryData(key, { status: "loading" });
            const data = await queryFn();
            setQueryData(key, {
                data,
                status: "success",
                error: null,
                lastFetched: Date.now()
            })
        }
        catch (error) {
            setQueryData(key, {
                error,
                status: "error"
            });
        }
    }
    useEffect(() => {
        if (query.status == "idle") {
            fetchData();
        }
    }, []);
    return {
        data:query.data,
        error:query.error,
        status: query.status
    }
}