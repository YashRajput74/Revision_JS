import AdvancedSearchableTreeSelect from "./AdvancedSearchableTreeSelect";
import Calender from "./Calender";
import CustomDateRangePicker from "./CustomDateRangePicker";
import DragDropFileUploader from "./DragDropFileUploader";
import TabsSystem from "./TabsSystem";
import VirtualizedList from "./VirtualizedList";
/* 
1️⃣ Toast Notifications
Appear at top-right
Auto dismiss after X seconds
Manual close
Different types:
success
error
info
Stack properly (no overlap glitch)

2️⃣ Notification Inbox Panel
Bell icon with unread count
Click → open side panel
List all notifications
Mark as read / unread
Clear all

3️⃣ Advanced Requirements
Global notification API:
notify.success("Saved!")
notify.error("Failed!")
Persist notifications in localStorage
Limit max visible toasts (e.g., 3 at a time)
Queue extra toasts
Smooth enter/exit animation

4️⃣ Edge Cases
Rapid fire notifications
Duplicate messages
Component unmount while timeout active
Memory leaks from timers
*/
export default function App(){
    return (
        <div>
            Hello World!
            <VirtualizedList />
            <TabsSystem />
            {/* <Calender />
            <DragDropFileUploader />
            <br />
            <br />
            <br />
            <br />
            <AdvancedSearchableTreeSelect />
            <br /><br /><br /><br /><br />
            <CustomDateRangePicker /> */}
        </div>
    )
}