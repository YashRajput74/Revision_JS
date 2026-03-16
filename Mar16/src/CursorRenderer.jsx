export default function CursorRenderer({ users }) {
    return (
        <>
            {Object.entries(users).map(([id, user]) => (
                <div
                    key={id}
                    style={{
                        position: "absolute",
                        left: user.cursor * 8,
                        top: 0,
                        color: user.color,
                        fontWeight: "bold",
                        pointerEvents: "none",
                    }}
                >
                    |
                    <span style={{ marginLeft: 2 }}>{id}</span>
                </div>
            ))}
        </>
    );
}