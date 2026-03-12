import { useEffect, useState } from "react";

/* 
Build: Interactive Timeline Component (Like GitHub Activity Timeline)
A component that visually shows events along a timeline.
✅ Core Requirements
You will receive data like:
[
  { id: 1, time: "10:00", title: "Meeting Started" },
  { id: 2, time: "10:30", title: "Design Discussion" },
  { id: 3, time: "11:15", title: "Code Review" }
]
Features
1️⃣ Render a vertical timeline
Example:
10:00 ● Meeting Started
      │
10:30 ● Design Discussion
      │
11:15 ● Code Review
2️⃣ Each event should display
Time
Title
Indicator dot
3️⃣ Events should appear in correct chronological order
*/
const initialData = [
    { id: 1, time: "10:00", title: "Meeting Started", details: "minutes of meeting" },
    { id: 2, time: "10:30", title: "Design Discussion", details: "designed the discussion" },
    { id: 3, time: "11:15", title: "Code Review", details: "code reviewed" }
]

export default function GithubActivityTimeline() {
    const sortedData = [...initialData].sort((a, b) => a.time.localeCompare(b.time));
    const [expanded, setExpanded] = useState(() => {
        const saved = localStorage.getItem("expandedEvents");
        return saved ? JSON.parse(saved) : [];
    })
    const [activeEvent, setActiveEvent] = useState(null);
    useEffect(() => {
        localStorage.setItem("expandedEvents", JSON.stringify(expanded));
    }, [expanded])
    function toggleExpandedEvent(id) {
        setExpanded((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])
    }
    return (
        <div className="timeline" style={{margin: "20px"}}>
            {sortedData.map((event, index) => {
                const isExpanded = expanded.includes(event.id);
                const isLast = index === sortedData.length - 1;
                return (
                    <div key={event.id} className={`timeline-item ${activeEvent === event.id ? "active" : ""}`} onMouseEnter={() => setActiveEvent(event.id)}>
                        <div className="time">{event.time}</div>
                        <div className="separator">
                            <div className="dot"></div>
                            {!isLast && <div className="line"></div>}
                        </div>
                        <div className="content">
                            <div
                                className="title"
                                onClick={() => toggleExpandedEvent(event.id)}
                            >
                                {event.title}
                            </div>

                            {isExpanded && (
                                <div className="details">
                                    {event.details}
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}