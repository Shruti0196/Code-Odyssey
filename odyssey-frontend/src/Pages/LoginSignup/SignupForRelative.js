import "./LoginSignup.css";
import { Grid } from "@mui/material";
import illustration2 from "../../Assets/illustration2.svg";
import blueDots from "../../Assets/blueDots.gif";
import orangeDots from "../../Assets/orangeDots.gif";

import SignupForRelative from "../../Auth/Signup/SignupForRelative";
import HeaderLogin from "../../components/Header/HeaderLogin";
export default function SignupPageRelative() {
  return (
    <>
      <Grid container direction="row">
        <Grid item sm={6} md={3} className="right-box">
          <div className="top-left">
            <img src={blueDots} alt="loading" className="dots" />
          </div>
          <Grid
            item
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <img src={illustration2} alt="signup" className="illustration" />
          </Grid>
          <div className="bottom-right">
            <img src={blueDots} alt="loading" className="dots" />
          </div>
        </Grid>
        <Grid item sm={6} md={6} className="left-box">
          <Grid xs={12} sm={6} className="links">
            <HeaderLogin activePage="Signup" />
          </Grid>
          <div className="bottom">
            <img src={orangeDots} alt="loading" className="dots" />
          </div>
          <div className="top-right">
            <img src={orangeDots} alt="loading" className="dots" />
          </div>
          <div className="box">
            <SignupForRelative />
            <div className="middle">
              <img src={orangeDots} alt="loading" className="dots" />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
