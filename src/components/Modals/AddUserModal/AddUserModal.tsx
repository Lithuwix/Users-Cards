import React from 'react';

import {ChooseUserAvatarModal} from "../ChooseUserAvatarModal/ChooseUserAvatarModal";

import {addUserAC, setNewUserAvaAC} from "../../../store/reducers/action-creators";

import {useFormik} from "formik";

import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

type AddUserModalPropsType = {
    onHide: () => void
    show: boolean
}

type FormikErrorType = {
    lastName?: string
    firstName?: string
    email?: string
}

export const AddUserModal = (props: AddUserModalPropsType) => {

    const dispatch = useAppDispatch()

    const [picturesModalShow, setPicturesModalShow] = React.useState(false);

    const newUserAva = useAppSelector(state => state.userReducer.userAvatar)

    // userAva

    const formik = useFormik({
        initialValues: {
            ava: '',
            lastName: '',
            firstName: '',
            patronymic: '',
            email: '',
            about: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.lastName) {
                errors.lastName = 'lastName required'
            }
            if (!values.firstName) {
                errors.firstName = 'firstName required'
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: values => {
            const newUser = {
                id: 1221,
                avatar: newUserAva,
                createDate: '',
                ...formik.values
            }
            dispatch(addUserAC(newUser))
            dispatch(setNewUserAvaAC(''))
            props.onHide()
            formik.resetForm();
        },
    });

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new user
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={formik.handleSubmit}>
                <Modal.Body>

                    <div style={{height: '150px', width: "130px"}} onClick={() => setPicturesModalShow(true)}>
                        {newUserAva
                            ? <div style={{
                                background: `url(${newUserAva}) no-repeat`,
                                backgroundSize: 'cover!important',
                                width: "130px",
                                height: "130px",
                                cursor: "pointer"
                            }}/>
                            : <Button variant={"outline-dark"}
                                      style={{height: "130px", width: "130px"}}>
                                choose avatar for new user
                            </Button>
                        }
                    </div>

                    <div style={{height: '70px'}}>
                        <Form.Control
                            placeholder="last name"
                            {...formik.getFieldProps('lastName')}
                            type='text'
                        />
                        <div style={{color: 'red', opacity: '0.6', paddingLeft: '2px', fontSize: '13px'}}>
                            {formik.touched.lastName && formik.errors.lastName && formik.errors.lastName}
                        </div>
                    </div>

                    <div style={{height: '70px'}}>
                        <Form.Control
                            placeholder="first name"
                            {...formik.getFieldProps('firstName')}
                            type='text'
                        />
                        <div style={{color: 'red', opacity: '0.6', paddingLeft: '2px', fontSize: '13px'}}>
                            {formik.touched.firstName && formik.errors.firstName && formik.errors.firstName}
                        </div>
                    </div>

                    <div style={{height: '70px'}}>
                        <Form.Control
                            placeholder="patronymic"
                            {...formik.getFieldProps('patronymic')}
                            type='text'
                        />
                    </div>

                    <div style={{height: '70px'}}>
                        <Form.Control
                            placeholder="email"
                            {...formik.getFieldProps('email')}
                            type='email'
                        />
                        <div style={{color: 'red', opacity: '0.6', paddingLeft: '2px', fontSize: '13px'}}>
                            {formik.touched.email && formik.errors.email && formik.errors.email}
                        </div>
                    </div>

                    <ChooseUserAvatarModal
                        show={picturesModalShow}
                        onHide={() => setPicturesModalShow(false)}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={() => formik.submitForm()} variant={"success"}>Add User</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
};

