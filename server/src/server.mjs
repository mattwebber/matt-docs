import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { DocumentManager } from './documentManager.mjs';

const port = 3001;
const app = express();
const http = createServer(app);
const io = new Server(http, {
    cors: { origin: 'http://localhost:3000' }
});
const documentManager = new DocumentManager();

io.on('connection', socket => {
    console.log('A user connected');
    socket.send(documentManager.getDocument());
    
    socket.on('update-document', documentBody => {
        documentManager.updateDocumentBody(documentBody);
        socket.broadcast.emit('document-updated', documentBody);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(port, () => {
    console.log(`Listening on *:${port}`);
});