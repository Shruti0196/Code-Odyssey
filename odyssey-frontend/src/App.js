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
import Create from "./Interfaces/Admin/Create";
import Enrolled from "./Interfaces/Admin/Enrolled";
import Relative from './Interfaces/Relative/Relative';
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import PatientDetails from "./Interfaces/Admin/PatientDetails"
import View from "./Interfaces/Admin/View";

function App() {
  const [data,setData]=useState({})
  useEffect(()=>{
    //console.log(data)
    },[data] )

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/view" element={<View data = { data } setData = { setData } />} />
        <Route exact path="/view/:name" element={<PatientDetails data = { data } setData = { setData } />} />
        <Route exact path="/enrolled" element={<Enrolled />} />
<<<<<<< HEAD
        <Route exact path="/relative" element={<Relative/>} />
        {/* <Route exact path="/patient/:id" render={(props)=>{
        return( <PatientDetails {...props} /> )}} /> */}
        <Route exact path="/view/:name" element={<PatientDetails data = { data } setData = { setData } />} />
=======
        <Route exact path="/relative" element={<Relative />} />
>>>>>>> 0bdce905d5cae8595f6edf16facde058e1b333e3
        <Route exact path="/signupforadmin" element={<SignupPageAdmin />} />
        <Route exact path="/signupforrelative" element={<SignupPageRelative />}/>
        <Route exact path="/loginforadmin" element={<LoginPageAdmin />} />
        <Route exact path="/loginforrelative" element={<LoginPageRelative />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
