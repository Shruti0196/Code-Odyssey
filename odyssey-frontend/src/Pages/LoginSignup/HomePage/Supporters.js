import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import SupportersArray from "./SupportersArray";
import "./HomePage.css";

export default function Supporters() {
  return (
    <center>
      <h1 style={{ padding: "20px" }}>Our Supporters</h1>
      <Grid
        container
        style={{ justifyContent: "center", margin: "0px", padding: "0px" }}
      >
        {SupportersArray.map((committee) => (
          <Grid item xs={6} sm={4} md={4}>
            <Card sx={{ maxWidth: 330 }} className="comCard" data-aos="fade-up">
              <CardMedia
                component="img"
                height="340"
                image={committee.image}
                alt="img"
                className="comImg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="comName"
                >
                  {committee.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="comPosition"
                >
                  {committee.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </center>
  );
}
