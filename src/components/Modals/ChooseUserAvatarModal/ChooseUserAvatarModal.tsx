import React, {useCallback} from 'react';

import Modal from 'react-bootstrap/Modal';

import {setNewUserAvaAC} from "../../../store/reducers/action-creators";

import {picturesAPI} from "../../../services/pictures-service";

import {Card} from "react-bootstrap";

import {useAppDispatch} from "../../../hooks/hooks";

type ChooseUserAvatarModalPropsType = {
    onHide: () => void
    show: boolean
}

export const ChooseUserAvatarModal = (props: ChooseUserAvatarModalPropsType) => {

    const dispatch = useAppDispatch()

    const {data: picturesData} = picturesAPI.useFetchAllPicturesQuery(15)

    const setUserAvaHandler = useCallback((avatar: string) => {
        dispatch(setNewUserAvaAC(avatar))
        props.onHide()
    }, [dispatch, props])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Choose user avatar
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-wrap">
                {picturesData && picturesData.message.map((el, index)=> {
                    return (
                        <Card key={index} onClick={()=>setUserAvaHandler(el)}>
                            <Card.Body>
                                <div style={{
                                    background:`url(${el}) no-repeat`,
                                    backgroundSize: 'cover!important',
                                    width: "130px",
                                    height: "130px",
                                    cursor: "pointer"
                                }}/>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Modal.Body>
        </Modal>
    );
};

