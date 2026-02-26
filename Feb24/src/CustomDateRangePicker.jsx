import { useState } from "react";
import CalendarMonth from "./CalenderMonth";

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
}
export function generateCalendarGrid(year, month) {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const totalCells = 42;
    const grid = [];
    for (let i = 0; i < totalCells; i++) {
        if (i < firstDay) grid.push(null);
        else if (i >= firstDay + daysInMonth) grid.push(null);
        else {
            grid.push(i - firstDay + 1);
        }
    }
    return grid;
}

export default function CustomDateRangePicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const year = 2026;
    const month = 2;
    const handleDateClick = (date) => {
        if (!startDate || (startDate && endDate)) {
            setStartDate(date);
            setEndDate(null);
        } else if (startDate && !endDate) {
            if (date >= startDate) {
                setEndDate(date);
            } else {
                setStartDate(date);
                setEndDate(null);
            }
        }
    };
    return (
        <div style={{ display: "flex", gap: 40 }}>
            <CalendarMonth year={year} month={month} startDate={startDate} endDate={endDate}
                onDateClick={handleDateClick} />
            <CalendarMonth year={year} month={month + 1} startDate={startDate} endDate={endDate}
                onDateClick={handleDateClick} />
        </div>
    );
}