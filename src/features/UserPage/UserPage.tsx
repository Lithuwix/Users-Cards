import React from 'react';

import {ConfirmDeleteUserModal} from "../../components/Modals/ConfirmDeleteUserModal/ConfirmDeleteUserModal";

import {NavLink, useLocation} from "react-router-dom";

import {useAppSelector} from "../../hooks/hooks";

import {Card, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const UserPage = () => {

    const [confirmDeleteModalShow, setConfirmDeleteModalShow] = React.useState(false);

    const location = useLocation()
    const id = +location.pathname.slice(8)

    const userInfo = useAppSelector(state => state.usersReducer.users.find((el) => el.id === id))

    const openModalHandler = () => {
        setConfirmDeleteModalShow(true)
    }

    return (
        <Container>
            {userInfo &&
                <>
                    <NavLink to={"/"}>
                        <Button
                            style={{margin: '15px 0 10px'}}
                            variant={"outline-primary"}
                        >
                            Back to Users
                        </Button>
                    </NavLink>
                    <div className="d-flex mt-3">
                        <Button style={{marginRight: '10px'}} variant={"success"}>Edit user information</Button>
                        <Button
                            variant={"danger"}
                            onClick={openModalHandler}
                        >
                            Delete user
                        </Button>
                    </div>
                    <Card style={{marginTop: '15px', padding: "10px", backgroundColor: "#b0e2d80a"}}>
                        <div className="d-flex mt-3">
                            <div
                                style={{
                                    background: `url(${userInfo.avatar}) center`,
                                    backgroundSize: "cover",
                                    height: "300px",
                                    width: "300px",
                                    marginRight: "30px"
                                }}
                            />
                            <div>
                                <div>{userInfo.lastName}</div>
                                <div>{userInfo.firstName}</div>
                                <div>{userInfo.patronymic}</div>
                                <div className="mt-5">{userInfo.email}</div>
                            </div>
                        </div>
                        <div className="mt-5">{userInfo.about}</div>
                    </Card>
                </>
            }
            <ConfirmDeleteUserModal
                show={confirmDeleteModalShow}
                onHide={() => setConfirmDeleteModalShow(false)}
            />
        </Container>
    );
};

