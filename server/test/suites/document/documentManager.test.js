import { DocumentManager } from '../../../src/documentManager.mjs';

describe('Document Manager', () => {
    let documentManager;

    beforeEach(() => {
        documentManager = new DocumentManager();
    });

    it('getDocument should return the document', () => {
        const document = documentManager.getDocument();
        expect(document.id).toBeDefined();
        expect(document.body).toBe('');
    });

    it('updateDocumentBody should update the body of the document', () => {
        const document = documentManager.getDocument();
        expect(document.id).toBeDefined();
        expect(document.body).toBe('');
        documentManager.updateDocumentBody('test');
        expect(document.body).toBe('test');
    });
});