import React, {useEffect} from 'react';

import {UserCard} from "./UserCard/UserCard";
import {AddUserModal} from "../../components/Modals/AddUserModal/AddUserModal";

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import {deleteUsersAC} from "../../store/reducers/action-creators";

export const Users = () => {

    const dispatch = useAppDispatch()

    const [addUserModalShow, setAddUserModalShow] = React.useState(false);

    const usersData = useAppSelector(state => state.usersReducer.users)
    const selectedUsers = useAppSelector(state => state.usersReducer.selectedUsers)

    const deleteUsersHandler = () => {
        dispatch(deleteUsersAC(selectedUsers))
    }

    return (
        <Container>
            <Button
                onClick={() => setAddUserModalShow(true)}
                className={'mt-4'}
                variant='info'
                style={{color: 'white', marginRight: '20px'}}
            >
                add new User
            </Button>
            {selectedUsers.length !== 0
                ?
                <Button
                    onClick={deleteUsersHandler}
                    variant="danger"
                    className={'mt-4'}
                >
                    delete selected users
                </Button>
                :
                <></>
            }
            <Row className={'py-5'}>
                {usersData.map((user) => {
                    return <UserCard
                        key={user.id}
                        userInfo={user}
                    />
                })}
            </Row>
            <AddUserModal
                show={addUserModalShow}
                onHide={() => setAddUserModalShow(false)}
            />
        </Container>
    );
};