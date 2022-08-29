import React from 'react';
import {useDispatch} from "react-redux";
import {Form} from "./Form";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../Store/Slices/userSlice";
import {useNavigate} from "react-router-dom";


export const SignUp = () => {
    const dispatch = useDispatch()
const navigate = useNavigate()
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user);
                dispatch(setUser({email:user.email,id:user.uid,token:user.refreshToken}));
navigate("/")
            })
            .catch(console.error)
            .finally()
    }
    return (
        <div>
            <Form title={"Register"} handleClick={handleRegister}/>
        </div>
    );
};

