import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authenticationActions } from "../store/authenticationSlice";

const Header = () => {
  const dispatchFn = useDispatch();
  const logoutHandler = () => {
    dispatchFn(authenticationActions.logout());
  };

  const isLogin = useSelector((state) => state.authentication.isAuthenticated);
  console.log(isLogin);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>{isLogin && <a href="/">My Products</a>}</li>
          <li>{isLogin && <a href="/">My Sales</a>}</li>
          <li>{isLogin && <button onClick={logoutHandler}>Logout</button>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
