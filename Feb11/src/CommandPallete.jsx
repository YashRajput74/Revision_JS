import { useState } from "react"

const commands = [
    {
        id: "dashboard",
        label: "Go to Dashboard",
        action: () => console.log("Dashboard"),
    },
    {
        id: "settings",
        label: "Open Settings",
        action: () => console.log("Settings"),
    },
    {
        id: "logout",
        label: "Logout",
        action: () => console.log("Logout"),
    },
    {
        id: "theme",
        label: "Toggle Theme",
        action: () => console.log("Theme"),
    },
];
export default function CommandPallete({ isOpen, onClose }) {
    const [query, setQuery] = useState("");

    const filteredCommands = commands.filter((cmd) => cmd.label.toLowerCase().includes(query.toLowerCase()));

    return (
        <div style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", inset: 0,
            background: "rgba(0,0,0,0.4)",
        }}>
            <div style={{
                width: "500px",
                background: "white",
                borderRadius: "8px",
                padding: "20px"
            }}
                onClick={(e) => e.stopPropagation()}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <div>
                    {filteredCommands.map((cmd) => (
                        <div
                            key={cmd.id}
                            style={{
                                padding: "8px",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                cmd.action();
                                onClose();
                            }}
                        >
                            {cmd.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}