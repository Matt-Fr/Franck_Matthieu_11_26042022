import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="*" element={<Error />}></Route>
          <Route path="About" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
