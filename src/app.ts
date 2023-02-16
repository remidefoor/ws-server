import 'dotenv/config';
import  { WebSocketServer } from 'ws';

import { handleConnection } from './controllers';

const WSS_PORT = process.env.PORT || 8080;

export const wsServer = new WebSocketServer({ port: WSS_PORT });
console.info('WebSocket server is running.');

wsServer.on('connection', handleConnection);
