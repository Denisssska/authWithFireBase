import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {Form} from "./Form";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../Store/Slices/userSlice";
import {useNavigate} from "react-router-dom";


export const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegister = async (email: string, password: string) => {
        const auth = getAuth()
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            dispatch(setUser({email: user.email, id: user.uid, token: user.refreshToken}));
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Form title={"Register"} handleClick={handleRegister}/>
        </div>
    );
};

