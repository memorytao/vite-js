import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import Home from "./Home";
import PageNav from "./PageNav";
import Pricing from "./Pricing";
import Categories from "./Categories";
import Male from "./Male";
import Female from "./Femail";

// import { Login } from "../Login/Login";
function App() {
  return (
    <BrowserRouter>
      <PageNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="categories" element={<Categories />}>
          <Route path="male" element={<Male />} />
          <Route path="female" element={<Female />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
