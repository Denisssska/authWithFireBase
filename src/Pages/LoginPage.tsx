import React from 'react';
import {NavLink} from "react-router-dom";
import {Login} from "../components/Login";

export const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login/>
            <p>Or <NavLink to="/register">Sign out</NavLink></p>
        </div>
    );
};

