import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signin from "../Pages/Signin";
import { useState, useEffect } from "react";

export default function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@do.it:token"));

    if (token) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      
      <Route exact path="/" component={Home} authenticated={authenticated}>
        <Home authenticated={authenticated} />
      </Route>
      
      <Route exact path="/login" component={Login}>
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route exact path="/signin">
        <Signin authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>

    </Switch>
  );
}
