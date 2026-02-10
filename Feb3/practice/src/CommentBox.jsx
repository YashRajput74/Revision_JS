/* Build a Comment Box with Replies & Collapse
Build a comment system where users can:

Add top-level comments
Reply to a comment
Collapse / expand a comment thread
No backend, no API calls, no editing.
*/

import { useState } from "react";

const initialComments = [
    {
        id: 1,
        text: "This is the first comment",
        isCollapsed: false,
        children: [
            {
                id: 2,
                text: "This is a reply",
                isCollapsed: false,
                children: [
                    {
                        id: 3,
                        text: "Reply to reply",
                        isCollapsed: false,
                        children: []
                    }
                ]
            }
        ]
    }
];

export default function CommentBox() {
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState("");
    
    function handleAddComment(){
        if(!newComment.trim()) return;
        const comment = {
            id: Date.now(),
            text: newComment,
            isCollapsed: false,
            children: []
        }
        setComments([comment,...comments]);
        setNewComment('');
    }
    return (
        <div>
            
            <input value={newComment} placeholder="Add a comment" onChange={(e)=>setNewComment(e.target.value)} />
            <button onClick={handleAddComment}>Add</button>
            {comments.map((comment)=>(
                <Comment key={comment.id} comment={comment}/>
            ))}
        </div>
    )
}