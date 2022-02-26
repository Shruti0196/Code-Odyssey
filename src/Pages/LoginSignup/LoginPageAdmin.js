import "./LoginSignup.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import illustration1 from "../../Assets/illustration1.svg";
import blueDots from "../../Assets/blueDots.gif";
import orangeDots from "../../Assets/orangeDots.gif";
import LoginForAdmin from "../../Auth/Login/LoginForAdmin";

import HeaderLogin from "../../components/Header/HeaderLogin";
export default function LoginPageAdmin() {
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
            <img src={illustration1} alt="login" className="illustration" />
          </Grid>
          <div className="bottom-right">
            <img src={blueDots} alt="loading" className="dots" />
          </div>
        </Grid>
        <Grid item sm={6} md={6} className="left-box">
          <Grid item xs={12} sm={6} className="links">
            <HeaderLogin activePage="Login" />
          </Grid>
          <div className="bottom">
            <img src={orangeDots} alt="loading" className="dots" />
          </div>
          <div className="top-right">
            <img src={orangeDots} alt="loading" className="dots" />
          </div>
          <div className="box">
            <LoginForAdmin/>
            <div className="middle">
              <img src={orangeDots} alt="loading" className="dots" />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
