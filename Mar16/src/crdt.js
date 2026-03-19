export class CRDT {
    constructor(clientId) {
        this.clientId = clientId;
        this.counter = 0;
        this.chars = [];
    }
    insert(value, index) {
        const id = `${++this.counter}@${this.clientId}`
        const char = {
            id, value, deleted: false
        }
        this.chars.splice(index, 0, char);
        return {
            type: "insert",
            char,
            index
        }
    }
    delete(index) {
        const char = this.chars[index];
        if (!char) return;
        char.deleted = true;
        return {
            type: "delete",
            id: char.id
        }
    }
    applyInsert(op) {
        const { char, index } = op;
        this.chars.splice(index, 0, char);
    }
    applyDelete(op) {
        const char = this.chars.find(c => c.id === op.id);
        if (char) {
            char.deleted = true;
        }
    }
    getText() {
        return this.chars.filter(c => !c.deleted).map(c => c.value).join("")
    }
}

const socket=new WebSocket("ws://localhost:4000");
socket.onopen=()=>{
    console.log("Connected to the webSocket server");
}
socket.onclose=()=>{
    console.log("Disconnected from the server");
}
socket.onerror=(error)=>{
    console.error("Websocket error:", error)
}
export default socket;