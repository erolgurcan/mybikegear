import LandingPage from "./LandingPage/LandingPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import Login from "./Login/Login";
import Register from "./Register/Register";
import UserPage from "./UserPage/UserPage";

import "./assets/css/style.css";
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/signup" element={<Register />} />
          <Route path = "/user-profile" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
