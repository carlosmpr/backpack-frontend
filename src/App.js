import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import { useDispatch } from "react-redux";
import { setToken } from "./features/counter/loginSignupSlice";
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const findToken = localStorage.getItem("token");
    if (findToken) {
      dispatch(setToken(findToken));
    }
  }, []);

  
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/Myaccount" component={Dashboard} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
    </Switch>
  );
}

export default App;
