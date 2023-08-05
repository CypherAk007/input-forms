import useInput from "../hooks/use-input";
const validEmail = (email) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.trim().match(validRegex)) {
    return true;
  } else {
    return false;
  }
};
const isNotEmpty = value => value.trim()!==''

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailInput,
  } = useInput(validEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault();
    console.log(enteredFirstName,enteredLastName,enteredEmail);
    if (!formIsValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetemailInput();
  };

  const firstNameInputClassCss = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClassCss = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClassCss = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form>
      <div className="control-group">
        <div className={firstNameInputClassCss}>
          <label htmlFor="name">First Name</label>
          <input
            value={enteredFirstName}
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
          />
        </div>
        <div className={lastNameInputClassCss}>
          <label htmlFor="name">Last Name</label>
          <input
            value={enteredLastName}
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="name"
          />
        </div>
      </div>
      <div className={emailInputClassCss}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={enteredEmail}
          onChange={emailHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="name"
        />
      </div>
      {firstNameInputHasError && (
        <p className="error-text"> {firstNameIsValid.toString()}Invalid First Name</p>
      )}
      {lastNameInputHasError && (
        <p className="error-text">{lastNameIsValid.toString()}Invalid LastName</p>
      )}
      {emailInputHasError && <p className="error-text">Invalid Email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={formSubmitionHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
