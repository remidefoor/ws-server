import 'dotenv/config';
import  { WebSocketServer } from 'ws';

import { handleConnection, simulateEvtFeed } from './controllers';
import { logEvt } from './services';

const PORT = process.env.PORT || 8080;

export const wsServer = new WebSocketServer({ port: PORT });
logEvt(`WebSocket server is running on port ${PORT}.`);

wsServer.on('connection', handleConnection);

simulateEvtFeed();
