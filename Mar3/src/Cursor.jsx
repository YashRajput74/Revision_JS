export default function Cursor({user}){
    return (
        <div  style={{position: 'absolute', transform: `translate(${user.x}px,${user.y}px)`, pointerEvents: 'none'}}>
            <div style={{width: 10, height: 10, backgroundColor: user.color, borderRadius: '50%'}} />
            <div style={{fontSize: 12, color: user.color}}>
                {user.name}
            </div>
        </div>
    )
}