import MyForm from "./pages/Example/LoadingModal";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";


const MainPage = () => {
  const user = sessionStorage.getItem("user");
  return user ? <Menu /> : <Login />;
};

const App = () => {
  return <MyForm />;
};

export default App;
