import React from 'react';

import {useAppDispatch} from "../../../hooks/hooks";

import {deleteCurrentUserAC} from "../../../store/reducers/action-creators";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useLocation, useNavigate} from "react-router-dom";

type ConfirmDeleteUserModalPropsType = {
    onHide: () => void
    show: boolean
}

export const ConfirmDeleteUserModal = (props: ConfirmDeleteUserModalPropsType) => {

    const location = useLocation()
    const id = +location.pathname.slice(8)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const deleteCurrentUserHandler = () => {
        dispatch(deleteCurrentUserAC(id))
        props.onHide()
        navigate("/")
    }

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete this User?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-wrap">
                <Button variant={'danger'} onClick={deleteCurrentUserHandler}>Delete user</Button>
            </Modal.Body>
        </Modal>
    );
};

