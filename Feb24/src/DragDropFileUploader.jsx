/* 
Build: Drag-and-Drop File Upload (Like Gmail / Drive)
✅ Core Requirements
Drag files into drop zone
Click to open file picker
Show file list after selection
Show file size
Remove file
Accept only specific file types (prop based)

⚡ Advanced Requirements
Show upload progress (mocked with interval)
Allow multiple files
Cancel upload
Retry failed upload
Limit max file count
Limit max file size

🚀 UX Expectations
Highlight drop zone on drag over
Prevent default browser behavior
Show error messages (invalid type / size)
Smooth progress animation
*/

import { useState } from "react";

export default function DragDropFileUploader() {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const handleDragOver=(e)=>{
        e.preventDefault();
        setIsDragging(true);
    }
    const handleDragLeave=(e)=>{
        e.preventDefault();
        setIsDragging(false);
    }
    const handleDrop=(e)=>{
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles=Array.from(e.dataTransfer.files);
        setFiles((prev)=>[...prev,...droppedFiles]);
    }
    return (
        <div>
            <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
                {isDragging ? 'drop files here...':'drag and drop files and click to upload'}
                <input type="file" multiple onChange={(e)=>setFiles((prev)=>[...prev,...Array.from(e.target.files)])}/>
            </div>
            <ul>
                {files.map((file,index)=>(
                    <li key={index}>{file.name}</li>
                ))}
            </ul>
        </div>
    )
}