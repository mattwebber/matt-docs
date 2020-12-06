import { Document } from '../../../src/document.mjs';

describe('Document', () => {
    let document;

    beforeEach(() => {
        document = new Document();
    });

    it('Default document should be blank', () => {
        expect(document.id).toBeDefined();
        expect(document.body).toBe('');
    });

    it('Setting document body should update the document body', () => {
        expect(document.body).toBe('');
        document.body = 'test';
        expect(document.body).toBe('test');
    });
});