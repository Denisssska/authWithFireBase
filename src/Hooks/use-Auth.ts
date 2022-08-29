import {useSelector} from "react-redux";
import {StateAppType} from "../Store/store";
import {InitialStateType} from "../Store/Slices/userSlice";

export const useAuth = () => {
    const {email, token, id} = useSelector<StateAppType>(state => state.user) as InitialStateType;
    return {
        isAuth: !!email,
        email, token, id
    }
}