export function Pane({ children, style }) {
    return (
        <div className="pane" style={style}>
            {children}
        </div>
    );
}