import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Document, UserList } from './';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

@observer
export class Home extends React.Component {
    render() {
        return (
            <Wrapper>
                <Document />
                <UserList />
            </Wrapper>
        );
    }
}
