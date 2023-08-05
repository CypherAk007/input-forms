import { useState} from "react";

const SimpleInput = (props) => {
  const [enteredName,setEnteredName]=useState('')
  const [enteredNameTouched,setEnteredNameTouched]=useState(false)

  const enteredNameIsValid = enteredName.trim() !==''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const [enteredEmail,setEnteredEmail]=useState('')
  const [enteredEmailTouched,setEnteredEmailTouched]=useState(false)
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const enteredEmailIsValid = enteredEmail.trim().match(validRegex)
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid=false
  if (enteredNameIsValid && enteredEmailIsValid){
    formIsValid=true
  }

  const nameInputBlurHandler=(event)=>{
    setEnteredNameTouched(true)
  }

  const emailInputBlurHandler=(event)=>{
    setEnteredEmailTouched(true)
  }

  const nameInputChangeHandler = (event)=>{
    setEnteredName(event.target.value)
  
  }

  const emailInputChangeHandler = (event)=>{
    setEnteredEmail(event.target.value)
  }

  const formSubmissionHandler=(event)=>{
    event.preventDefault()
    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)

    if (!enteredNameIsValid || !enteredEmailIsValid){
      return
    }
    
    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName('')
    setEnteredNameTouched(false)
    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }
  
  const nameInputClasses = nameInputIsInvalid?'form-control invalid':'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameInputBlurHandler}  type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
        {nameInputIsInvalid&& <p className="error-text">Name Field Cant be empty</p>}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input onBlur={emailInputBlurHandler}  type='email' id='name' onChange={emailInputChangeHandler} value={enteredEmail}/>
        {emailInputIsInvalid&& <p className="error-text">Email Field Cant be empty/invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

