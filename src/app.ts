import WebSocket, { WebSocketServer } from 'ws';

const WSS_PORT = 8080;

const wss = new WebSocketServer({ port: WSS_PORT });
console.info('WebSocket server is running.');

wss.on('connection', (ws: WebSocket) => {
    console.info('Client has connected.');
    ws.on('error', console.error);

    ws.on('message', (data: any) => {
        console.log(data.toString());
    });

    ws.on('close', () => {
        console.info('Client has disconnected.');
    })
});
