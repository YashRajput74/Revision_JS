import { useState } from "react";
import TreeNode from "./TreeNode";
import { initialTreeData } from "./initialTreeData";


export default function FolderStructure() {
    const [treeData, setTreeData] = useState(initialTreeData);
    const [selectedId,setSelectedId]=useState(null);
    const [expandedNodes, setExpandedNodes] = useState({});
    function toggleNode(id){
        setExpandedNodes(prev=>({
            ...prev,
            [id]:!prev[id]
        }))
    }
    return (
        <div>
            <TreeNode node={treeData} expandedNodes={expandedNodes} toggleNode={toggleNode} selectedId={selectedId}/>
        </div>
    )
}