import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import {Header} from "./components/Header/Header";
import {Users} from "./features/Users/Users";
import {UserPage} from "./features/UserPage/UserPage";
import {Error404} from "./components/Error404/Error404";

export const App = () => {
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={'/'} element={<Navigate to={'/users'}/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'users/:id'} element={<UserPage/>}/>

                <Route path={'/Error404'} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={'/Error404'}/>}/>
            </Routes>

        </div>
    );
}