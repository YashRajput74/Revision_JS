import { useState } from "react";

export default function ImageUploader() {
    const [preview, setPreview] = useState(null);
    const handleFiles=(e)=>{
        const file = e.target.files[0];
        if(!file) return 
        const url = URL.createObjectURL(file);
        setPreview(url);
    }
    return (
        <div>
            <label htmlFor="imageUploading">
                Upload Images
            </label>
                <input type="file" accept="image/*" name="imageUploading" id="imageUploading" onChange={handleFiles}/>
            <div>
                {preview && (
                    <img src={preview} alt="preview" width="1000px"/>
                )}
            </div>
        </div>
    )
}