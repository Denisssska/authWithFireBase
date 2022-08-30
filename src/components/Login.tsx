import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {Form} from "./Form";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../Store/Slices/userSlice";
import {useAuth} from "../Hooks/use-Auth";
import {Navigate, useNavigate} from "react-router-dom";

export const Login = () => {

    const {isAuth} = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = async (email: string, password: string) => {

        const auth = getAuth()
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            dispatch(setUser({email: user.email, id: user.uid, token: user.refreshToken}));
            navigate("/")
        } catch (error) {
            console.log(error)
        }

    }
    return isAuth ? (<Navigate to={"/"}/>) : (
        <div>
            <Form handleClick={handleClick} title={'Sign in'}/>
        </div>
    );
};

