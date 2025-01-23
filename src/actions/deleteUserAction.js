import { deleteUserApi } from "../services/userApi"
import { DELETE_USER_SUCCESS } from "../types"

export const deleteUserAction = (id) => async(dispatch) => {
    await deleteUserApi(id).then(()=>{
        dispatch({
            type: DELETE_USER_SUCCESS
        })
    })
}