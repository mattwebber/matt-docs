import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 20px;
    align-items: center;
    justify-content: center;
`;

const UserListLabel = styled.div`
    font-size: 16px;
    max-width: 500px;
`;

@inject('stores')
@observer
export class UserList extends React.Component {
    get activeUsers() {
        return this.store.activeUsers.join(', ');
    }

    get store() {
        return this.props.stores.documentStore;
    }

    render() {
        return (
            <Wrapper>
                <UserListLabel>Active users: {this.activeUsers}</UserListLabel>
            </Wrapper>
        );
    }
}
