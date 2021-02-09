import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Header from "./components/Header";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route path="/" exact component={Dashboard} /> */}
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
