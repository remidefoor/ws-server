import WebSocket from 'ws';

import { getEvt } from '../data';

function sendEvt(client: WebSocket, evt: string): void {
    client.send(evt);
}

export function broadcastEvt(clients: Set<WebSocket>, evt: string): void {
    clients.forEach((client: WebSocket) => sendEvt(client, evt));
}

export async function broadcastSoccerEvt(clients: Set<WebSocket>): Promise<void> {
    const evt = await getEvt();
    broadcastEvt(clients, JSON.stringify(evt));
}
