import { useState } from "react"

export default function TabsComponent() {
    const [tabs, setTabs] = useState([
        {
            id: "1",
            title: "Tab1",
            content: "Some Content"
        }
    ]);
    const [activeTabId, setActiveTabId] = useState("1");
    const activeTab = tabs.find((t) => t.id === activeTabId);
    const addTab = () => {
        const newId = Date.now().toString();
        const newTab={
            id: newId,
            title: `Tab ${tabs.length+1}`,
            content: `Tab Content ${tabs.length+1}`
        }
        setTabs((prev)=>[...prev,newTab]);
        setActiveTabId(newId);
    }
    const switchTab = (id) => {
        setActiveTabId(id)
    };
    const closetab = (id) => {
        const index=tabs.findIndex((t)=>t.id===id);
        const newTabs=tabs.filter((t)=>t.id!==id);
        setTabs(newTabs);
        if(activeTabId===id && newTabs.length>0){
            const newTab=newTabs[index-1]||newTabs[0];
            setActiveTabId(newTab.id)
        }
    }
    return (
        <div>
            <h2>Dynamic Tabs</h2>
            <div style={{ display: "flex", gap: 10 }}>
                {tabs.map((tab) => (
                    <div key={tab.id} onClick={() => switchTab(tab.id)}>
                        {tab.title}
               {/*         { <span onClick={(e) => {
                            e.stopPropagation();
                            closetab(tab.id)
                        }}>X</span>} */}
                    </div>
                ))}
                <button onClick={addTab}>+</button>
            </div>
            <div>
                <h3>{activeTab?.title}</h3>
                <p>{activeTab?.content}</p>
            </div>
        </div>
    )
}