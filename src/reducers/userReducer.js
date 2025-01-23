import { FETCH_USER_SUCCESS } from "../types";

const initialState = {
    userList: []
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                userList: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;