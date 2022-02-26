import React from "react";
import Grid from "@mui/material/Grid";

export default function Reach() {
  return (
    <div style={{ backgroundColor: "#2d2f84", padding: "20px" }}>
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
            <h2
              style={{
                color: "#ffeee4",
                fontSize: "2rem",
                fontWeight: "bolder",
              }}
            >
              {" "}
              Our Reach{" "}
            </h2>
            <p
              className="aboutPara"
              style={{ color: "#ffeee4", fontSize: "1.2rem" }}
            >
              In keeping with its philosophy of 'Real Work Real Change', Neko
              Old Age Home , an NGO in Mumbai, India to support the underserved,
              has taken its intervention into the interiors of India, reaching
              the unreached in the remotest of rural areas and urban slums with
              our services and making this helping foundation in India, the best
              NGO in India.
            </p>
          </div>
        </Grid>

        <Grid md={4} xs={12}>
          <Grid item sx={{ backgroundColor: "transparent" }}>
            <div
              data-aos="fade-up"
              className="reachImg"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="aboutImg"
                style={{
                  borderRadius: "50px",
                  height: "450px",
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
