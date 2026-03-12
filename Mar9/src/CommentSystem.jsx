import { useState } from "react";

const initialComments = [
    { id: 1, text: "Nice work!", status: "sent" },
    { id: 2, text: "Testing comment...", status: "sending" },
    { id: 3, text: "Another one", status: "failed" },
    { id: 4, text: "This component is amazing!", status: "sent" },
    { id: 5, text: "Really helpful example", status: "sent" },
    { id: 6, text: "Trying optimistic UI", status: "sending" },
    { id: 7, text: "UI looks clean", status: "sent" },
    { id: 8, text: "Retry feature needed", status: "failed" },
    { id: 9, text: "Works perfectly", status: "sent" },
    { id: 10, text: "Learning React step by step", status: "sent" },
    { id: 11, text: "Good explanation", status: "sent" },
    { id: 12, text: "Testing retry logic", status: "failed" },
    { id: 13, text: "Comment system practice", status: "sending" },
    { id: 14, text: "Frontend interview prep", status: "sent" },
    { id: 15, text: "UI feels fast with optimistic update", status: "sent" },
    { id: 16, text: "Server still responding...", status: "sending" },
    { id: 17, text: "Another comment example", status: "sent" },
    { id: 18, text: "Retry button should appear", status: "failed" },
    { id: 19, text: "Scrolling test comment", status: "sent" },
    { id: 20, text: "Last comment for demo", status: "sent" }
];

export default function CommentSystem() {
    const [comments, setComments] = useState(initialComments);
    const [text, setText] = useState("");
    const handleAddComment = () => {
        const newComment = {
            id: Date.now(),
            text: text,
            status: "sending"
        }
        setComments([newComment, ...comments]);
        setText("");
        fakeAPISendComment(newComment)
            .then(() => {
                setComments((prev) => prev.map((c) => (c.id === newComment.id ? { ...c, status: "sent" } : c)))
            })
            .catch(() => {
                setComments((prev) => prev.map((c) => (c.id === newComment.id ? { ...c, status: "failed" } : c)))
            })
    }
    function fakeAPISendComment() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() < 0.7 ? resolve() : reject();
            },1000+Math.random()*1000)
        })
    }
    return (
        <div>
            <h1>Commments</h1>
            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={handleAddComment}>Send</button>
            </div>
            <div>
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <strong>You: </strong>{comment.text}
                        {comment.status === "sending" && <span style={{ color: "gray" }}>(sending...)</span>}
                        {comment.status === "sent" && <span style={{ color: "green" }}>✔</span>}
                        {comment.status === "failed" && <span style={{ color: "red" }}>❌ Retry</span>}
                    </div>
                ))}
            </div>
        </div>
    )
}