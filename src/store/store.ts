import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {picturesAPI} from "../services/pictures-service";
import usersReducer from "./reducers/users-slice"
import userReducer from "./reducers/newUser-slice"

const rootReducer = combineReducers({
    [picturesAPI.reducerPath]: picturesAPI.reducer,
    usersReducer,
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(picturesAPI.middleware))
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']