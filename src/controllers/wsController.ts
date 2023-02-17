import WebSocket from 'ws';

import { logErr, logEvt } from '../services';

function handleConnectionErr(err: any): void {
    logErr(err);
}

function handleConnectionMsg(msg: any): void {
    console.log(msg.toString());
}

function handleConnectionClose(): void {
    logEvt('Client has disconnected.');
}

export function handleConnection(ws: WebSocket): void {
    logEvt('Client has connected.');

    ws.on('error', handleConnectionErr);
    ws.on('message', handleConnectionMsg);
    ws.on('close', handleConnectionClose);
}
