import React from 'react';

import {IUser} from "../../../models/IUser";

import {useAppDispatch} from "../../../hooks/hooks";

import {deleteIdFromSelectedUsersAC, setSelectedUserAC} from "../../../store/reducers/action-creators";

import { NavLink } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type UserCardPropsType = {
    userInfo: IUser
}

export const UserCard = (props: UserCardPropsType) => {

    const dispatch = useAppDispatch()

    const [selected, setSelected] = React.useState(false)

    const selectUserHandler = () => {
        if (selected) {
            dispatch(deleteIdFromSelectedUsersAC(props.userInfo.id))
            setSelected((prev)=>!prev)
        }
        else {
            dispatch(setSelectedUserAC(props.userInfo.id))
            setSelected((prev)=>!prev)
        }
    }

    return (
        <Card className={"mx-3 mb-5"} style={{width: '18rem'}}>
            <NavLink to={`:${props.userInfo.id}`}>
                <Card.Img className={"mt-2"} variant="top" src={props.userInfo.avatar}/>
            </NavLink>
            <Card.Body className={'d-flex flex-column justify-content-between'}>
                <div>
                    <Card.Title>
                        {props.userInfo.lastName + ' ' + props.userInfo.firstName}
                        <br/>
                        {props.userInfo.patronymic}
                    </Card.Title>
                    <Card.Text>
                        {props.userInfo.email}
                    </Card.Text>
                </div>
                <div className={'d-flex flex-row-reverse'}>
                    <Button
                        onClick={selectUserHandler}
                        variant={selected ? "dark" : "outline-dark"}
                        className={"mt-5"}
                    >
                        select user
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};