import { User } from './user.mjs';

export class UserManager {
    constructor() {
        this._users = [];
    }

    addNewUser = () => {
        const user = new User();
        this._users.push(user);
        return user;
    }

    getUsers = () => {
        return this._users;
    }

    getUserIds = () => {
        return this._users.map(user => user.id);
    }

    removeUserWithId = id => {
        this._users = this._users.filter(user => user.id !== id);
    }
}