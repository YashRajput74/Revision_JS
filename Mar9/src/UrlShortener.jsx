/* 
Problem: Build a Simple URL Shortener

Create a small program that works like a mini version of a URL shortener.
Requirements
The user enters a long URL.
Your program generates a short unique code (like abc123).
Store the mapping:
short_code → original_url
When someone enters the short code, the program should return the original URL.
*/
import { useState } from "react"

const data = [
    {
        id: 1,
        longUrl: "https://chatgpt.com/gg/699572b720d88193a0f143e9ac09decd",
        shortUrl: "www.short.ly/aIUv5"
    },
    {
        id: 2,
        longUrl: "https://www.example.com/my-long-page",
        shortUrl: "www.short.ly/aB12x"
    }
]

export default function UrlShortener() {
    const [input, setInput] = useState("")
    const [urlData, setUrlData] = useState(data)
    const [status, setStatus] = useState("")

    const generateCode = () => {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        let code = ""
        for (let i = 0; i < 5; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return code
    }

    const handleSubmit = () => {
        if (!input) return

        // check if input matches a long URL
        const existingLong = urlData.find((item) => item.longUrl === input)

        if (existingLong) {
            setStatus(`Short URL: ${existingLong.shortUrl}`)
            return
        }

        // check if input matches a short URL
        const existingShort = urlData.find((item) => item.shortUrl === input)

        if (existingShort) {
            setStatus(`Original URL: ${existingShort.longUrl}`)
            return
        }

        // otherwise create a new short URL
        const newCode = generateCode()
        const newShortUrl = `www.short.ly/${newCode}`

        const newEntry = {
            id: urlData.length + 1,
            longUrl: input,
            shortUrl: newShortUrl
        }

        setUrlData([...urlData, newEntry])
        setStatus(`Generated Short URL: ${newShortUrl}`)
    }

    return (
        <div>
            <label htmlFor="urlShortnerInput">Enter A URL:</label>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                id="urlShortnerInput"
            />

            <button onClick={handleSubmit}>Generate</button>

            <div>
                <h3>Status:</h3>
                <p>{status}</p>
            </div>
        </div>
    )
}