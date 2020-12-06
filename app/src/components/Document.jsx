import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { SyncLoader } from 'react-spinners';

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

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 400px;
`;

const DocumentInput = styled.textarea`
    height: 100%;
    width: 100%;
    resize: none;
`;

@inject('stores')
@observer
export class Document extends React.Component {
    get spinnerVisible() {
        return !this.store.documentBodyReceived;
    }

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
                <Title>Matt Docs</Title>
                <InputWrapper>
                    {
                        this.spinnerVisible ? (
                            <SyncLoader
                                size={14}
                                color={'#000'}
                                loading
                            /> 
                        ) : (
                            <DocumentInput
                                className='document-input'
                                onChange={e => this.updateDocumentBody(e.target.value)}
                                placeholder='Document body...'
                                value={this.documentBody}
                            />
                        )
                    }
                </InputWrapper>
            </Wrapper>
        );
    }
}
