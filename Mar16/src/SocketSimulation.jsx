/* 
it will simulate the socket so it will be a class which has subscribe, unsubscribe, listeners
*/

class SocketSimulation {
    constructor() {
        this.listeners = [];
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
    unsubscribe(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }
    broadcast(event){
        this.listeners.forEach(listener=>listener(event));
    }
}

export const newSocket = new SocketSimulation();