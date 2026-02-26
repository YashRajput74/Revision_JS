import { generateCalendarGrid } from "./CustomDateRangePicker";

export default function CalendarMonth({ year, month, startDate, endDate, onDateClick }) {
    const grid = generateCalendarGrid(year, month);
    const monthName = new Date(year, month).toLocaleString("default", { month: "long" });

    const isInRange = (day) => {
        if (!day || !startDate) return false;

        const current = new Date(year, month, day);

        if (startDate && !endDate) {
            // only start selected → highlight start
            return current.getTime() === startDate.getTime();
        }

        if (startDate && endDate) {
            return current >= startDate && current <= endDate;
        }

        return false;
    };

    const isStart = (day) =>
        startDate &&
        day &&
        startDate.getFullYear() === year &&
        startDate.getMonth() === month &&
        startDate.getDate() === day;

    const isEnd = (day) =>
        endDate &&
        day &&
        endDate.getFullYear() === year &&
        endDate.getMonth() === month &&
        endDate.getDate() === day;

    const handleClick = (day) => {
        if (!day) return;
        const fullDate = new Date(year, month, day);
        onDateClick(fullDate);
    };

    return (
        <div style={{ width: 300 }}>
            <h3>{monthName} {year}</h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                    <div key={day}><strong>{day}</strong></div>
                ))}

                {grid.map((date, index) => {
                    const inRange = isInRange(date);
                    const start = isStart(date);
                    const end = isEnd(date);

                    let background = "#f5f5f5";
                    let color = "black";

                    if (inRange) {
                        background = "#90caf9"; 
                        color = "black";
                    }

                    if (start || end) {
                        background = "#1976d2";
                        color = "white";
                    }

                    return (
                        <div
                            key={index}
                            onClick={() => handleClick(date)}
                            style={{
                                height: 35,
                                textAlign: "center",
                                lineHeight: "35px",
                                cursor: date ? "pointer" : "default",
                                background,
                                color,
                                borderRadius: start || end ? 6 : 0
                            }}
                        >
                            {date}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}