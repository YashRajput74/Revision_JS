import { useRef, useState } from "react"

export default function Carousel({ data }) {
    let [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = data[currentIndex];
    const [isHovering, setIsHovering] = useState(false);
    const timer = useRef(null);
    return (
        <div>
            <button onClick={() => {
                setCurrentIndex((index) => index == 0 ? data.length - 1 : index - 1)
            }}>&lt;</button>
            <div>
                <img src={currentImage.src} alt={currentImage.alt} />
                {currentImage.caption && <h3>{currentImage.caption}</h3>}
            </div>
            <button onClick={() => {
                setCurrentIndex((index) => index == data.length - 1 ? 0 : index + 1)
            }}>&gt;</button>
        </div>
    )
}