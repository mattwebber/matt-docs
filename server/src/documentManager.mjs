import { Document } from './document.mjs';

export class DocumentManager {
    constructor() {
        this._document = new Document();
    }

    getDocument = () => {
        return this._document;
    }

    updateDocumentBody = value => {
        this._document.body = value;
    }
}