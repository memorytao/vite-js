import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import Home from "./Home";
import PageNav from "./PageNav";
import Pricing from "./Pricing";
import Categories from "./Categories";
import Men from "./Male";
import Women from "./Female";

// import { Login } from "../Login/Login";
function App() {
  return (
    <BrowserRouter>
      <PageNav />
      <Routes>
        <Route path="/vite-js" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="categories" element={<Categories />}>
          <Route path="male" element={<Men />} />
          <Route path="female" element={<Women />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
