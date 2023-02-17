import 'dotenv/config';
import  { WebSocketServer } from 'ws';

import { handleConnection } from './controllers';
import { logEvt } from './services';

const WSS_PORT = process.env.PORT || 8080;

export const wsServer = new WebSocketServer({ port: WSS_PORT });
logEvt('WebSocket server is running.');

wsServer.on('connection', handleConnection);
