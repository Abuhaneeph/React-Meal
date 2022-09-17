import React, { useContext,useEffect,useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/CartContext';
const HeaderCartButton = (props) => {
 const CartCtx= useContext(CartContext);
 const{items}=CartCtx; 
 const[btnIsHighlighted,setbtnIsHighlighted]=useState(false);
 const noOfCartItems=items.reduce((currentNo,item)=>{
   return currentNo+item.amount;
 },0);

 const btnClasses=`${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
 useEffect(()=>{
  if(items.length===0){
    return;
  }
 setbtnIsHighlighted(true);
 const timer=setTimeout(() => {
  setbtnIsHighlighted(false);
 }, 300);
 return ()=>{
  clearTimeout(timer)
 }
 },[items])
  return (
    <button className={btnClasses} onClick={props.onPassedCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
     
    </button>
  );
};

export default HeaderCartButton;
