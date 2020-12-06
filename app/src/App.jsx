import * as React from 'react';
import { Provider } from 'mobx-react';
import { DocumentStore } from './stores';
import { Home } from './components/';

const documentStore = new DocumentStore();

const stores = {
    documentStore
};

export class App extends React.Component {
    render() {
        return (
            <Provider stores={stores}>
                <div className="App">
                    <Home />
                </div>
            </Provider>
        );
    }
}
