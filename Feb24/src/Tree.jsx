export default function Tree({data}){
    return (
        <div>
            {data.map((node)=>(
                <div key={node.id} style={{marginLeft: "20px"}}>
                    <input type="checkbox" id={node.id} />
                    {node.label}
                    {node.children && <Tree data={node.children}/>}
                </div>
                
            ))}
        </div>
    )
}