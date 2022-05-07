import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";
import About from "./pages/About";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route
            path="/rent/:accommodationId"
            element={<Accommodation />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
