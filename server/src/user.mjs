import { v4 as uuidv4 } from 'uuid';

export class User {
    constructor() {
        this._id = uuidv4();
    }

    get id() {
        return this._id;
    }
}