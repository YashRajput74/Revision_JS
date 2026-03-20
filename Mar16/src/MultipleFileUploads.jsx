import { useEffect, useState } from "react"

export default function MultipleFileUploads() {
    const [files, setFiles] = useState([]);
    const handleSelect = (e) => {
        const selected = Array.from(e.target.files);
        const mapped = selected.map((file) => ({
            id: crypto.randomUUID(),
            file,
            progress: 0,
            status: "queued"
        }))
        setFiles((prev) => [...prev, ...mapped])
    }
    useEffect(() => {
        files.forEach((file) => {
            if (file.status === "queued") {
                startUpload(file.id);
            }
        })
    }, [files]);
    const startUpload = (id) => {
        setFiles((prev) => prev.map((f) => f.id === id ? { ...f, status: "uploading" } : f));
        const interval = setInterval(() => {
            setFiles((prev) => prev.map((f) => {
                if (f.id !== id) return f;
                if (f.progress >= 100) {
                    clearInterval(interval);
                    return { ...f, status: "success" };
                }
                return {
                    ...f,
                    progress: f.progress + 10
                }
            }))
        }, 1000)
    }
    return (
        <div>
            <input type="file" multiple onChange={handleSelect} />
            {files.map((f) => (
                <div key={f.id}>
                    <p>{f.file.name}</p>
                    <p>Status: {f.status}</p>
                    <p>{Math.round(f.progress)}%</p>
                </div>
            ))}
        </div>
    )
}