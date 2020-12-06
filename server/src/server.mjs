import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { DocumentManager } from './documentManager.mjs';
import { UserManager } from './userManager.mjs';

const port = 3001;
const app = express();
const http = createServer(app);
const io = new Server(http, {
    cors: { origin: 'http://localhost:3000' }
});

const documentManager = new DocumentManager();
const userManager = new UserManager();

io.on('connection', socket => {
    const newUser = userManager.addNewUser();
    socket.userId = newUser.id;
    console.log(`A new user has connected with id: ${socket.userId}`);
    io.emit('user-list-updated', userManager.getUserIds());
    
    socket.on('update-document', documentBody => {
        documentManager.updateDocumentBody(documentBody);
        socket.broadcast.emit('document-updated', documentBody);
    });

    socket.on('disconnect', () => {
        userManager.removeUserWithId(socket.userId);
        console.log(`A user disconnected with id: ${socket.userId}`);
        io.emit('user-list-updated', userManager.getUserIds());
    });
});

http.listen(port, () => {
    console.log(`Listening on *:${port}`);
});