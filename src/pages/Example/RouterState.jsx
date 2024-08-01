import { useState } from "react";
import {
    Link,
    Route,
    BrowserRouter as Router,
    useLocation
} from "react-router-dom";

function Home() {
  const [value, setValue] = useState("initial value");

  return (
    <div>
      <p>Home Value: {value}</p>
      <Link to={{ pathname: "/about", state: { value } }}>Go to About</Link>
      <button onClick={() => setValue("new value")}>Change Value</button>
    </div>
  );
}

function About() {
  const location = useLocation();
  const { value } = location.state || { value: "no value passed" };

  return (
    <div>
      <p>About Value: {value}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

function RouterState() {
  return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Router>
  );
}

export default RouterState;
