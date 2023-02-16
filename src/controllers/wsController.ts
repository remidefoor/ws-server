import WebSocket from 'ws';

function handleConnectionErr(err: any): void {
    console.error(err);
}

function handleConnectionMsg(msg: any): void {
    console.log(msg.toString());
}

function handleConnectionClose(): void {
    console.info('Client has disconnected.');
}

export function handleConnection(ws: WebSocket): void {
    console.info('Client has connected.');

    ws.on('error', handleConnectionErr);
    ws.on('message', handleConnectionMsg);
    ws.on('close', handleConnectionClose);
}
