import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isLogin = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isLogin && <UserProfile />}
      {!isLogin && <Auth />}
      {isLogin && <Counter />}
    </Fragment>
  );
}

export default App;
