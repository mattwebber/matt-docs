import * as React from 'react';
import { Provider } from 'mobx-react';
import { DocumentStore } from './stores';
import { Document } from './components/';

const documentStore = new DocumentStore();

const stores = {
    documentStore
};

export class App extends React.Component {
    render() {
        return (
            <Provider stores={stores}>
                <div className="App">
                    <Document />
                </div>
            </Provider>
        );
    }
}
