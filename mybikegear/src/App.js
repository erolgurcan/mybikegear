import LandingPage from "./LandingPage/LandingPage";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar";

import "./assets/css/style.css";
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";



function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
       </BrowserRouter> 

    </div>
  );
}

export default App;
