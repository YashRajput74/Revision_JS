const queryCache = {};

function getCacheKey(key) {
    return JSON.stringify(key);
}

export function getQuery(key) {
    const cacheKey = getCacheKey(key);
    if (!queryCache[cacheKey]) {
        queryCache[cacheKey] = {
            data: null,
            error: null,
            status: "idle",
            lastFetched: 0,
            subscribers: []
        }
    }
    return queryCache[cacheKey];
}

export function subscribe(key, callback) {
    const query = getQuery(key);
    query.subscribers.push(callback);
    return () => {
        query.subscribers = query.subscribers.filter(cb => cb !== callback);
    }
}

export function notify(key) {
    const query = getQuery(key);
    query.subscribers.forEach(cb => cb(query));
}

export function setQueryData(key, newState) {
    const query = getQuery(key);
    Object.assign(query, newState);
    notify(key);
}