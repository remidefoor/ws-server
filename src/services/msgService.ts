import WebSocket from 'ws';

export function sendMsg(client: WebSocket): void {
    client.send('Hi');
}
