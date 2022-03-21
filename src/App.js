import SignupPageAdmin from "./Pages/LoginSignup/SignupPageAdmin";
import SignupPageRelative from "./Pages/LoginSignup/SignupForRelative";
import LoginPageAdmin from "./Pages/LoginSignup/LoginPageAdmin";
import LoginPageRelative from "./Pages/LoginSignup/LoginPageRelative";
import HomePage from "./Pages/LoginSignup/HomePage/HomePage";
import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Interfaces/Admin/Create";
import Enrolled from "./Interfaces/Admin/Enrolled";
import Relative from "./Interfaces/Relative/Relative";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PatientDetails from "./Interfaces/Admin/PatientDetails";
import View from "./Interfaces/Admin/View";
import Edit from "./Interfaces/Admin/Edit";
import ChatBot from "./Interfaces/Relative/ChatBot";
import Chat from "./Interfaces/Admin/Chat";

function App() {
  // const [data,setData]=useState({})
  // useEffect(()=>{
  //   //console.log(data)
  //   },[data] )

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/view" element={<View />} />
        <Route exact path="/edit/:name/:id" element={<Edit />} />
        <Route
          exact
          path="/view/:name/:id"
          element={<PatientDetails /*data = { data } setData = { setData }*/ />}
        />
        <Route exact path="/enrolled" element={<Enrolled />} />
        <Route exact path="/relative" element={<Relative />} />
        <Route exact path="/signupforadmin" element={<SignupPageAdmin />} />
        <Route
          exact
          path="/signupforrelative"
          element={<SignupPageRelative />}
        />
        <Route exact path="/loginforadmin" element={<LoginPageAdmin />} />
        <Route exact path="/loginforrelative" element={<LoginPageRelative />} />
        <Route exact path="/chat" element={<ChatBot />} />
        <Route exact path="/chatwithrelatives" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
