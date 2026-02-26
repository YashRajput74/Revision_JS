import { useState } from "react";

const initialtabData = [
    { id: 1, label: "Overview", content: "This is overview tab" },
    { id: 2, label: "Settings", content: "This is settings tab" },
    { id: 3, label: "Home", content: "This is Home tab" },
];

export default function TabsSystem() {
    const [tabsData, setTabsData] = useState(initialtabData);
    const [activeTabId, setActiveTabId] = useState(1);

    return (
        <div>
            <div style={{ display: "flex" }}>
                {tabsData.map((tab) => (
                    <div key={tab.id}>
                        <button onClick={() => setActiveTabId(tab.id)}>
                            {tab.label}
                        </button>
                        <button onClick={() => closeTab(tab.id)}>X</button>
                    </div>
                ))}
            </div>

            <div>
                {tabsData.find((tab) => tab.id === activeTabId)?.content || "No tabs open"}
            </div>
        </div>
    );
}