import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Login from "./Login/Login";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
