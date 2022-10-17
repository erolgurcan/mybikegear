import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Login from "./Login/Login";
import Register from "./Register/Register";
import UserPage from "./UserPage/UserPage";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path = "/register" element = { <Register/> }></Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path = "/user-page"  element= {<UserPage></UserPage>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
