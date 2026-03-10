export default function TreeNode({ node, expandedNodes, toggleNode }) {
    const isExpanded = expandedNodes[node.id];
    return (
        <div style={{ marginLeft: "16px", cursor: "pointer" }}>
            <div onClick={() => node.type === "folder" && toggleNode(node.id)}>
                <span>{node.type === "folder" ? (isExpanded?"📂":"📁") : "📄"}</span>
                {node.name}
            </div>
            {isExpanded && node.children?.map(child => (
                <TreeNode key={child.id} node={child} expandedNodes={expandedNodes} toggleNode={toggleNode} />
            ))}
        </div>
    )
}