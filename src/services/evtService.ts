import WebSocket from 'ws';

function sendEvt(client: WebSocket, evt: string): void {
    client.send(evt);
}

export function broadcastEvt(clients: Set<WebSocket>, evt: string): void {
    clients.forEach((client: WebSocket) => sendEvt(client, evt));
}
