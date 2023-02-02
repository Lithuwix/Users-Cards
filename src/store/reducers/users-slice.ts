import {IUser} from "../../models/IUser";

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UsersState {
    users: IUser[]
    isLoading: boolean
    error: string
    selectedUsers: number[]
}

const initialState: UsersState = {
    users: [
        {
            id: 1,
            createDate: '12.01.23',
            avatar: 'https://randomfox.ca/images/78.jpg',
            firstName: 'Егор',
            lastName: 'Васильев',
            patronymic: 'Анатолиевич',
            email: 'egor@mail.com',
            about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        },
        {
            id: 2,
            createDate: '12.01.23',
            avatar: 'https://cdn2.thecatapi.com/images/3l8.jpg',
            firstName: 'Максим',
            lastName: 'Иванов',
            email: 'max@gmail.com',
            about: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.'
        },
        {
            id: 3,
            createDate: '12.01.23',
            avatar: 'https://cdn2.thecatapi.com/images/bo5.jpg',
            firstName: 'Никита',
            lastName: 'Ульянов',
            email: 'nic@mail.com',
            about: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.'
        },
        {
            id: 4,
            createDate: '12.01.23',
            avatar: 'https://cdn2.thecatapi.com/images/4G_bcp35K.jpg',
            firstName: 'Марина',
            lastName: 'Чехова',
            patronymic: 'Дмитриевна',
            email: 'marina@yandex.ru',
            about: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.'
        },
        {
            id: 5,
            createDate: '12.01.23',
            avatar: 'https://cdn2.thecatapi.com/images/bo5.jpg',
            firstName: 'Анна',
            lastName: 'Твен',
            email: 'ann@mail.com',
            about: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.'
        },
        {
            id: 6,
            createDate: '13.12.23',
            avatar: 'https://cdn2.thecatapi.com/images/eie.jpg',
            firstName: 'Наталья',
            lastName: 'Алексеева',
            patronymic: 'Евгеньевна',
            email: 'nataly@gmail.com',
            about: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.'
        },
        {
            id: 7,
            createDate: '13.12.23',
            avatar: 'https://randomfox.ca/images/46.jpg',
            firstName: 'Ольга',
            lastName: 'Носова',
            patronymic: 'Викторовна',
            email: 'nataly@gmail.com',
            about: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.'
        },
        {
            id: 8,
            createDate: '13.12.23',
            avatar: 'https://random.dog/1f3a23fe-27b3-413c-b1bd-3cd18e2ef970.jpg',
            firstName: 'Яна',
            lastName: 'Устигчева',
            patronymic: 'Олеговна',
            email: 'yana@yandex.ru',
            about: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.'
        },
        {
            id: 9,
            createDate: '13.12.23',
            avatar: 'https://random.dog/c88c5e58-c122-426b-a98d-3c97341e13d8.jpg',
            firstName: 'Анна',
            lastName: 'Франк',
            email: 'anna@gmail.com',
            about: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.'
        },
    ],
    isLoading: false,
    error: '',
    selectedUsers: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser(state, action: PayloadAction<IUser>) {
            state.users.unshift(action.payload)
        },
        setSelectedUsers(state, action: PayloadAction<number>) {
            state.selectedUsers.push(action.payload)
        },
        deleteIdFromSelectedUsers(state, action: PayloadAction<number>) {
            let myIndex = state.selectedUsers.indexOf(action.payload);
            if (myIndex !== -1) {
                state.selectedUsers.splice(myIndex, 1);
            }
        },
        deleteUsers(state, action: PayloadAction<number[]>) {
            // state.selectedUsers.forEach((t) => {
            //     console.log('t', t)
            //     state.users.forEach((el) => {
            //         console.log('el',el)
            //         if (el.id === t) {
            //             state.users.splice(state.users.indexOf(el), 1);
            //             state.selectedUsers.splice(state.selectedUsers.indexOf(t), 1)
            //         }
            //     })
            // })
        },
        deleteCurrentUser(state, action: PayloadAction<number>) {
            let temp: any = state.users.find((el) => el.id === action.payload)
            state.users.splice(state.users.indexOf(temp), 1)
        }
    }
})

export default usersSlice.reducer