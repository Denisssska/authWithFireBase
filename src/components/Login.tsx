import React from 'react';
import {useDispatch} from "react-redux";
import {Form} from "./Form";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../Store/Slices/userSlice";
import {useAuth} from "../Hooks/use-Auth";
import {Navigate, useNavigate} from "react-router-dom";

export const Login = () => {
    const {isAuth,email} = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = (email:string,password:string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth,email,password)
            .then(({user})=>{
                console.log(user);
                dispatch(setUser({email:user.email,id:user.uid,token:user.refreshToken}));
                navigate("/")
            })
            .catch(console.error)
            .finally()
    }
    return isAuth?(<Navigate to={"/"}/>):(
        <div>
            <Form handleClick={handleClick} title={'Sign in'}/>
        </div>
    );
};

