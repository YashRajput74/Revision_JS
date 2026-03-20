import { useState } from "react";

const cache = {};

export default function RequestManager() {
    const [data, setData] = useState(null);
    const fetchWithRetry = (url, retries) => {
        return new Promise((resolve, reject) => {
            const attempt = (count) => {
                fetch(url)
                    .then((res) => res.json())
                    .then(resolve)
                    .catch((err) => {
                        if (count > 0) {
                            console.log("retrying ...", count)
                            setTimeout(() => attempt(count - 1), 1000);
                        }
                        else {
                            reject(err)
                        }
                    })
            }
            attempt(retries);
        })
    }
    const fetchWithDedup = (url) => {
        if (cache[url]) {
            console.log("Using cache in flight request");
            return cache[url];
        }
        const promise = fetchWithRetry(url, 3);
        cache[url] = promise;
        return promise.then((res) => {
            cache[url] = Promise.resolve(res);
            return res;
        }).catch((err) => {
            delete cache[url];
            throw err
        })
    }
    const handleClick = async () => {
        const res = await fetchWithDedup("https://jsonplaceholder.typicode.com/users")
        setData(res);
    }
    return (
        <div>
            <h2>API Dedup + Retry Demo</h2>

            <button onClick={handleClick}>Fetch Users</button>
            <button onClick={handleClick}>Fetch Again</button>
            <button onClick={handleClick}>Fetch Again 2</button>

            {/* UI */}
            {data &&
                data.map((user) => (
                    <div key={user.id} style={{ marginTop: "10px" }}>
                        <p><b>{user.name}</b></p>
                        <p>{user.email}</p>
                    </div>
                ))}
        </div>
    );
}