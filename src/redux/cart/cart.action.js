import {CartActionTypes} from "./cart.types";

export const toggleCartHidden = cart => dispatch=>{
    
    dispatch({type: CartActionTypes.TOGGLE_CART_HIDDEN,
        payload: cart} )
           
}