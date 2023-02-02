import React from 'react';

import {NavLink} from "react-router-dom";

export const Error404 = () => {
    return (
        <>
            <h1 className="d-flex justify-content-center mt-4">
                error 404
            </h1>
            <NavLink style={{color: "grey"}} to="/">
                <h4 className="d-flex justify-content-center mt-4">back to homepage</h4>
            </NavLink>
        </>
    );
};

