import { useState } from "react";

function getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getFirstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

export default function Calender() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const daysInMonth = getDaysInMonth(currentDate);
    const daysArray = Array.from(
        { length: daysInMonth },
        (_, index) => index + 1
    );
    return (
        <div>
            {daysArray.map((day)=>(
                <div key={day}>{day}</div>
            ))}
        </div>
    )
}