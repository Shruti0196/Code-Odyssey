import SignupPageAdmin from "./Pages/LoginSignup/SignupPageAdmin";
import SignupPageRelative from "./Pages/LoginSignup/SignupForRelative";
import LoginPageAdmin from "./Pages/LoginSignup/LoginPageAdmin";
import LoginPageRelative from './Pages/LoginSignup/LoginPageRelative';
import HomePage from './Pages/LoginSignup/HomePage/HomePage';
import NotFound from  './Pages/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Create from "./Pages/Admin/Create";
import View from "./Pages/Admin/View";
import Enrolled from "./Pages/Admin/Enrolled";
import Verify from "./Pages/Admin/Verify";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/view" element={<View />} />
        <Route exact path="/enrolled" element={<Enrolled />} />
        <Route exact path="/Verify" element={<Verify />} />
        <Route exact path="/signupforadmin" element={<SignupPageAdmin />} />
        <Route exact path="/signupforrelative" element={<SignupPageRelative />} />
        <Route exact path="/loginforadmin" element={<LoginPageAdmin />} />
        <Route exact path="/loginforrelative" element={<LoginPageRelative />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
