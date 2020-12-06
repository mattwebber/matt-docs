import { v4 as uuidv4 } from 'uuid';

export class Document {
    constructor() {
        this._id = uuidv4();
        this._body = '';
    }

    get body() {
        return this._body;
    }

    get id() {
        return this._id;
    }

    set body(value) {
        this._body = value;
    }
}