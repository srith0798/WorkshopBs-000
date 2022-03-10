import LoginForm from "./components/login";
import SignUp from "./components/signUp";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
