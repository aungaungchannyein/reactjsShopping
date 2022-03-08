import React, { useEffect } from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import {toggleCartHidden} from "../../redux/cart/cart.action";
import {useSelector,useDispatch} from "react-redux";

function CartIcon(){
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart.hidden);
    console.log(cart);
    function Clicked(){
        console.log("cliked")
        dispatch(toggleCartHidden());
    } 

    
    return(
        <div className="cart-icon" onClick={Clicked} >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;
