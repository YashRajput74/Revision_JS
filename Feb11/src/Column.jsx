export default function Column({column,tasks}){
    return (
        <div>
            <h2>{column.title}</h2>
            {tasks.map((task)=>(
                <div key={task.id}>
                    {task.title}
                </div>
            ))}
        </div>
    )
}