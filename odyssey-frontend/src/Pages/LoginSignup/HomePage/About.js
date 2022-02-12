import React from "react";
import Grid from "@mui/material/Grid";

export default function About() {
  return (
    <div style={{ backgroundColor: "#ffeee4", height: "80vh" }}>
      <Grid
        container
        mb={10}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          md={8}
          p={5}
          py={10}
          sx={{ borderRadius: "4px", textAlign: "left" }}
        >
          <div data-aos="fade-right">
            <h2 style={{ fontSize: "2rem", fontWeight: "bolder" }}>
              {" "}
              About Us{" "}
            </h2>
            <p className="aboutPara" style={{ fontSize: "1.2rem" }}>
              Neko Old Age Home, an Indian social development organization, is
              directly benefitting over 15 thousand senior citizens every year.
              We have more than 40 live welfare projects on vaccination,
              healthcare, livelihood in over 2,000 remote villages and urban
              slums across 5 states of India.
            </p>
          </div>
        </Grid>

        <Grid md={4} xs={12}>
          <Grid item sx={{ backgroundColor: "transparent" }}>
            <div
              data-aos="fade-left"
              // className="aboutImg"
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "90px",
              }}
            >
              <img
                src="https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="aboutImg"
                alt="aboutImg"
                style={{
                  margin: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
