import React from 'react';
import renderer from 'react-test-renderer';
import { Document } from './';
import { DocumentStore } from '../stores';

describe('Document component', () => {
    let documentStore;
    let stores;

    beforeEach(() => {
        documentStore = new DocumentStore();
        stores = { documentStore };
    });

    it('It should pass document body changes to the store and re-render appropriately', () => {
        const component = renderer.create(
            <Document stores={stores} />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        const root = component.root;
        const documentInput = root.find(element => element.props.className === 'document-input');
        expect(stores.documentStore.documentBody).toBe('');
        documentInput.props.onChange({ target: { value: 'hello' }});
        expect(stores.documentStore.documentBody).toBe('hello');

        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});