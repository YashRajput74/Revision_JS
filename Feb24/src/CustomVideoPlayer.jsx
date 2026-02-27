import { useEffect, useRef, useState } from "react"

export default function CustomVideoPlayer() {
    const [videoSrc, setVideoSec] = useState('./pizza.mp4');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        const video = videoRef.current;
        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime);
        };
        const handleLoaded = () => {
            setDuration(video.duration);
        };
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('loadedmetadata', handleLoaded);
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadedmetadata', handleLoaded);
        }
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        }
        else {
            video.pause();
            setIsPlaying(false);
        }
    }

    const formatTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    const handleMute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    const handleFullScreen = () => {
        if(!document.fullscreenElement){
            containerRef.current.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
    }

    return (
        <div ref={containerRef}>
            <video src={videoSrc} style={{ width: "300px", border: "1px solid black", display: "block" }} ref={videoRef}></video>
            <button onClick={togglePlay} style={{ margin: "2px" }}>{isPlaying ? 'pause' : 'play'}</button>
            <div>
                {formatTime(currentTime)}/{formatTime(duration)}
            </div>
            <div>
                <label htmlFor="progressBar">Time</label>
                <input type="range" id="progressBar" min="0" max="100" value={(currentTime / duration) * 100 || 0} onChange={(e) => {
                    const video = videoRef.current;
                    const newTime = (e.target.value / 100) * duration;
                    video.currentTime = newTime;
                    setCurrentTime(newTime);
                }} />
            </div>
            <button onClick={handleMute}>{isMuted ? "Unmute" : "Mute"}</button>
            <div>
                <label htmlFor="volumeBar">Volume</label>
                <input type="range" id="volumeBae" min="0" max="1" step="0.1" value={volume} onChange={(e) => {
                    const video = videoRef.current;
                    video.volume = e.target.value;
                    setVolume(e.target.value);
                }} />
            </div>
            <button onClick={handleFullScreen}>FullScreen</button>
        </div>
    )
}