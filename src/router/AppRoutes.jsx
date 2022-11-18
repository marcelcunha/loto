import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Result from "../pages/Result";
import Results from "../pages/Results";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Link to="/resultados" className="bg-red-600">
        Resultados
      </Link>
      <Link to="/resultados">Test</Link>
      <Link to="/resultados">TEste 2</Link>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/resultados" exact element={<Results />} />
        {/* <Route path="/resultados/{result}" exact element={<Results />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
