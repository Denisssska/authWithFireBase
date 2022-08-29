import React from 'react';
import {Navigate} from "react-router-dom";
import {useAuth} from "../Hooks/use-Auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../Store/Slices/userSlice";

export const HomePage = () => {
    const {isAuth,email} = useAuth()
const dispatch = useDispatch()
    return isAuth?(
        <div>
            <h1>Welcome {email}</h1>
            <button onClick={()=>dispatch(removeUser())}>Log out from {email}</button>
        </div>
        ):(
        <div>
            <Navigate to="/login"/>
        </div>
    );
};

