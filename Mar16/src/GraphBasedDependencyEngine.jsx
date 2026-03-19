import { useEffect, useState } from "react";

/* 
 Goal
You will build a system where nodes depend on each other, and updates propagate automatically.
✅ Core Requirements
1️⃣ Define Nodes
Each node:
{
  id: "A",
  value: 10,
  formula: "B + C"
}
2️⃣ Dependency Graph
Example:
A = B + C
B = D + 2
C = 5
Graph:
D → B → A
C → A
3️⃣ Update Propagation
If:
D = 3 → change to 10
Then:
B updates → A updates
Automatically recompute.

4️⃣ Evaluate Formulas
Support:
+ - * /
Parse formula like:
"A + B * C"
⚡ Advanced Requirements
5️⃣ Cycle Detection
Example:
A → B → C → A ❌
Detect and prevent circular dependency.

6️⃣ Topological Sorting
Compute order of execution:
D → B → A

7️⃣ Efficient Updates
Only recompute affected nodes, not all.

🚀 Edge Cases
Invalid formulas
Missing references
Deep dependency chains
Large graph (1000+ nodes)

Repeated updates
🏗 Architecture Expectations
Graph Manager
   ├── adjacency list
   ├── reverse dependencies
   ├── evaluator
   └── update engine
*/
const initialGraph = {
    nodes: {
        D: { id: "D", value: 3, formula: null, dependencies: [] },
        C: { id: "C", value: 5, formula: null, dependencies: [] },
        B: { id: "B", value: null, formula: "D + 2", dependencies: ["D"] },
        A: { id: "A", value: null, formula: "B + C", dependencies: ["B", "C"] }
    },
    adjList: {
        A: ["B", "C"],
        B: ["D"],
        C: [],
        D: []
    },
    reverseAdjList: {
        B: ["A"],
        C: ["A"],
        D: ["B"]
    }
};

export default function GraphBasedDependencyEngine() {
    // function addNode
    // function buildGraph
    // Evaluate Node
    // update Node
    const [graph, setGraph] = useState(initialGraph);
    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState('D');
    function evaluateNode(node, nodes) {
        if (!node.formula) return node.value;
        let expr = node.formula;
        node.dependencies.forEach((dep) => {
            const val = nodes[dep]?.value ?? 0;
            expr = expr.replace(dep, val);
        })
        try {
            return eval(expr);
        }
        catch {
            return "Error"
        }
    }
    const propagate = (startId, graph) => {
        const queue = [startId];
        const updateNodes = { ...graph.nodes };
        while (queue.length) {
            const current = queue.shift();
            const dependents = graph.reverseAdjList[current] || [];
            dependents.forEach((depId) => {
                const node = updateNodes[depId];
                const newValue = evaluateNode(node, updateNodes);
                node.value = newValue;
                queue.push(depId);
            })
        }
        return updateNodes;
    }
    const updateValue = (id, newValue) => {
        const newGraph = { ...graph };
        newGraph.nodes[id].value = newValue;
        newGraph.nodes = propagate(id, newGraph);
        setGraph({ ...newGraph });
    }
    const computeAll = (graph) => {
        const updatedNodes = { ...graph.nodes };
        Object.values(updatedNodes).forEach((node) => {
            if (node.formula) {
                node.value = evaluateNode(node, updatedNodes);
            }
        })
        return updatedNodes;
    }
    useEffect(() => {
        const updated = computeAll(graph);
        setGraph((prev) => ({ ...prev, nodes: updated }))
    }, []);

    return (
        <div>
            <div>
                <label htmlFor="input">Input value: </label>
                <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <select id="options" onChange={(e) => setSelectValue(e.target.value)} value={selectValue}>
                    {Object.keys(graph.nodes).map((node) => (
                        <option value={node} key={node}>{node}</option>
                    ))}
                </select>
                <button onClick={() => updateValue(selectValue, inputValue)}>Submit</button>
            </div>
            {Object.values(graph.nodes).map((node) => (
                <div key={node.id}>
                    {node.id}: {node?.value}{" "}
                    {node.formula && `(${node.formula})`}
                </div>
            ))}
        </div>
    )
}