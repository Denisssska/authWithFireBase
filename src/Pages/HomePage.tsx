import React from 'react';
import {Navigate} from "react-router-dom";
import {useAuth} from "../Hooks/use-Auth";
import {removeUser} from "../Store/Slices/userSlice";
import {useAppDispatch} from "../Hooks/Hooks";

export const HomePage = () => {
    const {isAuth, email} = useAuth()
    const dispatch = useAppDispatch()
    return isAuth ? (
        <div>
            <h1>Welcome {email}</h1>
            <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
        </div>
    ) : (
        <div>
            <Navigate to="/login"/>
        </div>
    );
};

