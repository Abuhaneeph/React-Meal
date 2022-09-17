import React,{useRef,useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm = (props) => {
  const[amountIsValid,setAmountisValid]=useState(true);
  const amountInputRef=useRef();
  const submitHandler=(event)=>{
  event.preventDefault();
  const enteredValue=amountInputRef.current.value;
 const enteredAmountNumber=+enteredValue;
 if(enteredValue.trim().length===0||enteredAmountNumber<1||enteredAmountNumber>5){
 setAmountisValid(false);
  return;
 }
 props.onAddToCart(enteredAmountNumber);
  };
  return (
   <form className={classes.form} onSubmit={submitHandler}>
    <Input  ref={amountInputRef} label="Amount" input={{
     
      id: 'amount',
      type: 'number',
      min: '1',
      max: '5',
      step: '1',
      defaultValue: '1'
    }} />
    <button>+ Add</button>
    {!amountIsValid && <p>Please enter a valid amount</p>}
   </form>
  )
}

export default MealItemForm