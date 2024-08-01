import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";
import Test from "./pages/Example/Test";

const App = () => {
  const user = sessionStorage.getItem("user");

  // return <>{user ? <Menu /> : <Login />}</>;
  return <Test />;
};

export default App;
