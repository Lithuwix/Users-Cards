import {AppDispatch} from "../store";

import {IUser} from "../../models/IUser";

import {usersSlice} from "./users-slice";
import {userSlice} from "./newUser-slice";

//users
export const addUserAC = (user: IUser) => (dispatch: AppDispatch) => {
    dispatch(usersSlice.actions.addNewUser(user))
}

export const setSelectedUserAC = (userId: number) => (dispatch: AppDispatch) => {
    dispatch(usersSlice.actions.setSelectedUsers(userId))
}

export const deleteIdFromSelectedUsersAC = (userId: number) => (dispatch: AppDispatch) => {
    dispatch(usersSlice.actions.deleteIdFromSelectedUsers(userId))
}

export const deleteUsersAC = (users: number[]) => (dispatch: AppDispatch) => {
    dispatch(usersSlice.actions.deleteUsers(users))
}

export const deleteCurrentUserAC = (userId: number) => (dispatch: AppDispatch) => {
    dispatch(usersSlice.actions.deleteCurrentUser(userId))
}


//user
export const setNewUserAvaAC = (avatar: string) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.setNewUserAva(avatar))
}
