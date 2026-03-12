class QueryClient {
    constructor() {
        this.cache = {}
    }
    getQuery(key) {
        const queryKey = JSON.stringify(key);
        if (!this.cache[queryKey]) {
            this.cache[queryKey] = {
                data: undefined,
                error: null,
                status: "idle",
                subscribers: new Set(),
                lastFetched: 0,
                promise: null
            }
        }
        return this.cache[queryKey];
    }
    async fetchQuery(key, queryFn) {
        const query = this.getQuery(key);
        if (query.promise) {
            return query.promise;
        }
        query.status = "loading";
        query.promise = queryFn()
            .then((data) => {
                query.data = data;
                query.status = "success"
                query.lastFetched = Date.now();
                query.promise = null;
                this.notify(key);
                return data;
            })
            .catch((err) => {
                query.error = err;
                query.status = "error";
                query.promise = null;
                this.notify(key)
            })
        return query.promise;
    }
    subscribe(key, callback) {
        const query = this.getQuery(key);
        query.subscribers.add(callback);
        return () => {
            query.subscribers.delete(callback);
        }
    }
    notify(key) {
        const query = this.getQuery(key);
        query.subscribers.forEach((cb) => cb());
    }
    invalidateQueries(key) {
        const queryKey = JSON.stringify(key);
        const query = this.cache[queryKey];

        if (!query) return;

        query.lastFetched = 0;

        if (query.subscribers.size > 0 && query.queryFn) {
            this.fetchQuery(key, query.queryFn);
        }
    }
}
export const queryClient = new QueryClient();
