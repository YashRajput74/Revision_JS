export default function Comment({comment}){
    return (
        <div>
            <p>{comment.text}</p>
            {!comment.isCollapsed && comment.children.map((child)=>(
                <Comment key={child.id} comment={child}/>
            ))}
        </div>
    )
}