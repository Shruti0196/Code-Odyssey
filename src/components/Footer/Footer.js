import { Grid } from "@mui/material";
import React from "react";
import { IconContext } from "react-icons";
import { BiDonateHeart } from "react-icons/bi";
import { GiShakingHands } from "react-icons/gi";
import { SiFigshare } from "react-icons/si";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <center>
        <h1 className="footerI">Help us to Connect</h1>
        <Grid
          className="footerI"
          container
          spacing={0}
          style={{ width: "97%" }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Grid container spacing={0}>
              <Grid item md={3} sm={6} xs={6}>
                <img
                  className="footerImgs"
                  src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="##"
                ></img>
              </Grid>
              <Grid item md={3} sm={6} xs={6}>
                <img
                  className="footerImgs"
                  src="https://images.pexels.com/photos/6646863/pexels-photo-6646863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="##"
                ></img>
              </Grid>
              <Grid item md={3} sm={6} xs={6}>
                <img
                  className="footerImgs"
                  src="https://images.pexels.com/photos/8078358/pexels-photo-8078358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="##"
                ></img>
              </Grid>
              <Grid item md={3} sm={6} xs={6}>
                <img
                  className="footerImgs"
                  src="https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="##"
                ></img>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Grid container spacing={0}>
              <Grid container spacing={0}>
                <Grid item md={3} sm={6} xs={6}>
                  <img
                    className="footerImgs"
                    src="https://images.pexels.com/photos/6591162/pexels-photo-6591162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="##"
                  ></img>
                </Grid>
                <Grid item md={3} sm={6} xs={6}>
                  <img
                    className="footerImgs"
                    src="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="##"
                  ></img>
                </Grid>
                <Grid item md={3} sm={6} xs={6}>
                  <img
                    className="footerImgs"
                    src="https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="##"
                  ></img>
                </Grid>
                <Grid item md={3} sm={6} xs={6}>
                  <img
                    className="footerImgs"
                    src="https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="##"
                  ></img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </center>

      <center>
        <Grid container spacing={3} className="assurance">
          <Grid item sm={4} xs={12}>
            <BiDonateHeart style={{ fontSize: "5rem" }} />
            <h3 className="assurance_head">DONATE</h3>
          </Grid>
          <Grid item sm={4} xs={12}>
            <GiShakingHands style={{ fontSize: "5rem" }} />

            <h3 className="assurance_head">CARE</h3>
          </Grid>
          <Grid item sm={4} xs={12}>
            <SiFigshare style={{ fontSize: "5rem" }} />

            <h3 className="assurance_head">SHARE</h3>
          </Grid>
        </Grid>
        <div className="footerSection">
          <Grid container spacing={1}>
            <Grid style={{ backgroundColor: "#003F7D" }} item sm={4} xs={12}>
              <MdConnectWithoutContact style={{ fontSize: "9rem", color: "white", paddingTop:"10px" }} />
            </Grid>
            <Grid style={{ backgroundColor: "#003F7D" }} item sm={4} xs={12}>
              <p>Get involved</p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/homePage"
              >
                <li>Home</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/category"
              >
                <li>Category</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/feedback"
              >
                <li>Feedback</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/cart"
              >
                <li>Cart</li>
              </Link>
            </Grid>
            <Grid style={{ backgroundColor: "#003F7D" }} item sm={4} xs={12}>
              <p>Get in touch</p>
              <IconContext.Provider
                value={{ size: "1.7rem", className: "iconsFooter" }}
              >
                <li className="footerSocial">
                  <a href="##">
                    <BsInstagram />
                  </a>

                  <a href="##">
                    <BsFacebook />
                  </a>
                  <a href="##">
                    <BsLinkedin />
                  </a>
                </li>
              </IconContext.Provider>
            </Grid>
          </Grid>
        </div>
        <h6 style={{ padding: "5px", fontSize: ".8rem" }}>
          &copy;
          {new Date().getFullYear()} OLD Care -- All Rights Reserved
        </h6>
      </center>
    </div>
  );
};

export default Footer;
