import { useRef, useState } from "react";
import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authenticationActions } from "../store/authenticationSlice";

const notEmail = (value) => {
  return !value.trim().includes("@") && !value.trim().includes(".");
};
const belowSixDegits = (value) => value.trim().length < 6;

const Auth = () => {
  const dispatchFn = useDispatch();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [passWordValidity, setPassWordValidity] = useState(true);
  const [emaildValidity, setEmaialValidity] = useState(true);

  const onLoginHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(password);

    const emailIsValid = !notEmail(email);
    const passwordIsValid = !belowSixDegits(password);

    setEmaialValidity(emailIsValid);
    setPassWordValidity(passwordIsValid);
    console.log(passwordIsValid);
    const overAllFormValidity = emailIsValid && passwordIsValid;
    console.log(overAllFormValidity);

    if (!overAllFormValidity) return;
    console.log("All vavlid");
    emailRef.current.value = "";
    passwordRef.current.value = "";
    dispatchFn(authenticationActions.login());
  };

  const passwordInvalidClasses = !passWordValidity
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const emailInvalidClasses = !emaildValidity
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onLoginHandler}>
          <div className={emailInvalidClasses}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="enter email"
              ref={emailRef}
            />
            {!passWordValidity && <p>Enter Valid Email</p>}
          </div>
          <div className={passwordInvalidClasses}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="enter password"
              ref={passwordRef}
            />
            {!emaildValidity && <p>Enter Valid Password</p>}
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
