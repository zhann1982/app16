import { fetchUserApi } from "../services/userApi"
import { FETCH_USER_SUCCESS } from "../types"

export const fetchUserAction = () => async(dispatch) => {
    await fetchUserApi().then((response)=>{
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: response.data
        })
    })
}