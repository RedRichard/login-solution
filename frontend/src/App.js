import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Header from "./components/Header";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import useToken from "./components/useToken";

function App() {
  const { token, setToken, removeToken } = useToken();

  if (!token) {
    return (
      <>
        <Header />
        <Login setToken={setToken} />
      </>
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          component={() => <Dashboard removeToken={removeToken} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
