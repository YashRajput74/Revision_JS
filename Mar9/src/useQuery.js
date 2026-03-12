import { useEffect, useState } from "react";
import { queryClient } from "./QueryClient";

export default function useQuery(queryKey, queryFn, options = {}) {
    const { staleTime = 0 } = options;
    const query = queryClient.getQuery(queryKey);
    const [, forceUpdate] = useState();
    useEffect(() => {
        const unsubscribe = queryClient.subscribe(queryKey, () => forceUpdate({}));
        const isStale = Date.now() - query.lastFetched > staleTime;
        if (query.status == "idle"||isStale) {
            queryClient.fetchQuery(queryKey, queryFn)
        }
        return unsubscribe;
    }, [JSON.stringify(queryKey)])
    const refetch = () => {
        queryClient.fetchQuery(queryKey, queryFn)
    }
    return {
        data: query.data,
        loading: query.status === "loading",
        error: query.error,
        refetch
    }
}