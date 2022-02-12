import SignupPageAdmin from "./Pages/LoginSignup/SignupPageAdmin";
import SignupPageRelative from "./Pages/LoginSignup/SignupForRelative";
import LoginPageAdmin from "./Pages/LoginSignup/LoginPageAdmin";
import LoginPageRelative from './Pages/LoginSignup/LoginPageRelative';
import HomePage from './Pages/LoginSignup/HomePage/HomePage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/signupforadmin" element={<SignupPageAdmin />} />
      <Route exact path="/signupforrelative" element={<SignupPageRelative />} />
      <Route exact path="/loginforadmin" element={<LoginPageAdmin />} />
      <Route exact path="/loginforrelative" element={<LoginPageRelative />} />
    </Routes>
  </Router>
  );
}

export default App;
