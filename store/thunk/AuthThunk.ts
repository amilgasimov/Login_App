import axios from "axios"
import { AppDispatch, RootState } from ".."
import { api } from "../../constants/Api"
import { setEmail, setLoading } from "../slices/AuthSlice"


export const Auth = (payload: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setLoading(true))
            const authPost = await axios.post(`${api}/api/user/auth`, { email: payload })
            dispatch(setEmail(authPost.data.email))
        } catch (error) {
            console.log('auth error', error);
        }
        dispatch(setLoading(false))
    }
}