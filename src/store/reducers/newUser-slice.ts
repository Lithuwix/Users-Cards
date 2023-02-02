import {IUser} from "../../models/IUser";

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    userInfo: IUser
    userAvatar: string
}

const initialState: UserState = {
    userInfo: {
        id: 0,
        createDate: '',
        avatar: '',
        firstName: '',
        lastName: '',
        patronymic: '',
        email: '',
        about: ''
    },
    userAvatar: ''
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setNewUserAva(state, action: PayloadAction<string>) {
            state.userAvatar = action.payload
        }
    }
})

export default userSlice.reducer