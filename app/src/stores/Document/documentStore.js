import { action, makeObservable, observable } from 'mobx';
import { toast } from 'react-toastify';
import ioClient from 'socket.io-client';

export class DocumentStore {
    @observable documentBody = '';
    @observable activeUsers = [];
    @observable documentBodyReceived = false;
    @observable activeUserListReceived = false;

    socket = ioClient('http://127.0.0.1:3001'); // Establish a socket connection with the server.

    constructor() {
        makeObservable(this);
        this.initSocket();
    }

    @action initSocket = () => {
        this.socket.on('document-updated', value => {
            this.updateDocumentBodyRaw(value);
            this.documentBodyReceived = true;
        });

        this.socket.on('user-list-updated', value => {
            this.updateUserList(value);
        });
    }

    @action updateDocumentBody = value => {
        this.updateDocumentBodyRaw(value);
        this.socket.emit('update-document', this.documentBody);
    }

    @action updateDocumentBodyRaw = value => {
        this.documentBody = value;
    }

    @action updateUserList = value => {
        if(this.activeUserListReceived && value.length > this.activeUsers.length) {
            toast('Another user has appeared', { position: toast.POSITION.BOTTOM_CENTER});
        }

        this.updateUserListRaw(value);
        this.activeUserListReceived = true;
    }

    @action updateUserListRaw = value => {
        this.activeUsers = value;
    }
}