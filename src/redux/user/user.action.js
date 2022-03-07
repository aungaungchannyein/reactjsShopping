import {UserActionTypes} from "./user.types";

export const setCurrentUser = user=>dispatch=>{
    
        dispatch({type: UserActionTypes.SET_CURRENT_USER,
        payload: user} )
               
}