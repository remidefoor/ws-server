import 'dotenv/config';
import WebSocket from 'ws';

import { wsServer } from '../app';
import { broadcastEvt, logErr, logEvt } from '../services';

const EVT_FEED_INTERVAL = process.env.EVT_FEED_INTERVAL || 5000;

function handleConnectionErr(err: any): void {
    logErr(err);
}

function handleConnectionMsg(msg: any): void {
    console.log(msg.toString());
}

function handleConnectionClose(): void {
    logEvt('Client has disconnected.');
    logEvt(`Connected clients: ${wsServer.clients.size}.`);
}

export function handleConnection(ws: WebSocket): void {
    logEvt('Client has connected.');
    logEvt(`Connected clients: ${wsServer.clients.size}.`)

    ws.on('error', handleConnectionErr);
    ws.on('message', handleConnectionMsg);
    ws.on('close', handleConnectionClose);
}

export function simulateEvtFeed(): void {
    const evt = 'Hello, World!';
    setInterval(broadcastEvt.bind(null, wsServer.clients, evt), EVT_FEED_INTERVAL);
}
