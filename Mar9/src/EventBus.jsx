class EventBus {
    constructor() {
        this.events = {};//store event listeners
    }
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);//callback ke andar kuch function honge jo ek function ek component ke pass hoga
    }
    off(event, callback) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter((listener) => listener !== callback);//listener ko remove karne ke liye
    }
    emit(event, payload) {
        if (!this.events[event]) return;
        this.events[event].forEach((listener) => { listener(payload); });//listener ko payload dene ke liye as in jo current callback function ke arguments type honge ya data hoga
    }
}

const eventBus = new EventBus();
export default eventBus;