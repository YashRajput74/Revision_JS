/* 
 Machine Coding Challenge
Build: Advanced Image Gallery with Lightbox (Like Unsplash / Google Photos)
✅ Core Requirements
Display a grid of images
Responsive layout (auto-fit grid)
Click image → open lightbox modal
Show:
Next / Previous navigation
Image title
Close button

⚡ Advanced Requirements
Keyboard support:
← → for navigation
Esc to close
Preload next/previous image for smooth navigation
Smooth open/close animation
Prevent background scroll when modal open

🚀 Edge Cases
Rapid navigation clicks
Very large image list (100+)
Broken image fallback
Window resize
Clicking outside modal
*/
import { useState } from 'react'
import { initialImages } from './data.js'

export default function ImageGallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const handleClick = (index) => {
        setSelectedIndex(index)
    }
    const handleClose = () => {
        setSelectedIndex(null);
    }
    const handleNavigation=(newIndex)=>{
        if(newIndex<0||newIndex>=initialImages.length) return;
        setSelectedIndex(newIndex);
    }
    return (
        <>
            <div className="gallery">
                {initialImages.map((img, index) => (
                    <div className="image-card" key={img.id} onClick={(e) => handleClick(index)}>
                        <img src={img.thumbnail} alt={img.title} loading='lazy' />
                    </div>
                ))}
            </div>
            {selectedIndex !== null && (
                <div className='modal-overlay'>
                    <div className='modal'>
                        <button className='close-btn' onClick={handleClose}>
                            X
                        </button>
                        <img src={initialImages[selectedIndex].url} alt={initialImages[selectedIndex].title} />

                        <div className='button-panel'>
                            <button className='btn prev' onClick={()=>handleNavigation(selectedIndex-1)}>
                                {`<`}
                            </button>
                            <p>{initialImages[selectedIndex].title}</p>
                            <button className='btn next' onClick={()=>handleNavigation(selectedIndex+1)}>
                                {`>`}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}