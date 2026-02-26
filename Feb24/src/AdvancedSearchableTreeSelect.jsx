import { useState } from "react"
import {initialData} from './data.js'
import Tree from "./Tree.jsx";

export default function AdvancedSearchableTreeSelect() {
    const [data, setData] = useState(initialData);
    const [isOpen, setIsOpen]=useState(false);

    return (
        <div>
            <Tree data={data}/>
        </div>
    )
}