import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    display: flex;
    text-align: center;
    padding: 20px;
    font-size: 24px;
`;

const DocumentInput = styled.textarea`
    height: 700px;
    width: 400px;
`;

@inject('stores')
@observer
export class Document extends React.Component {
    get documentBody() {
        return this.store.documentBody;
    }

    get store() {
        return this.props.stores.documentStore;
    }

    updateDocumentBody = value => {
        this.store.updateDocumentBody(value);
    }

    render() {
        return (
            <Wrapper>
                <Title>My Document!</Title>
                <DocumentInput
                    className='document-input'
                    onChange={e => this.updateDocumentBody(e.target.value)}
                    placeholder='Document body...'
                    value={this.documentBody}
                />
            </Wrapper>
        );
    }
}
