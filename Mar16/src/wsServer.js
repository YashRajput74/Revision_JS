const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 4000 });

console.log("WebSocket server running on port 4000");

wss.on("connection", (socket) => {

    console.log("Client connected");

    socket.on("message", (message) => {

        // broadcast to all other clients
        wss.clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });

    });

});