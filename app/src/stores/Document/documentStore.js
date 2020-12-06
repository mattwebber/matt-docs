import { action, makeObservable, observable } from 'mobx';
import ioClient from 'socket.io-client';

export class DocumentStore {
    @observable documentBody = '';
    @observable activeUsers = [];

    socket = ioClient('http://127.0.0.1:3001'); // Establish a socket connection with the server.

    constructor() {
        makeObservable(this);
        this.initSocket();
    }

    @action initSocket = () => {
        this.socket.on('document-updated', value => {
            this.updateDocumentBodyRaw(value);
        });

        this.socket.on('user-list-updated', value => {
            this.updateUserListRaw(value);
        });
    }

    @action updateDocumentBody = value => {
        this.updateDocumentBodyRaw(value);
        this.socket.emit('update-document', this.documentBody);
    }

    @action updateDocumentBodyRaw = value => {
        this.documentBody = value;
    }

    @action updateUserListRaw = value => {
        this.activeUsers = value;
    }
}