import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useState, useEffect } from "react";

const Enrolled = () => {
  // const enrolled=[
  //   {pn:"lacy green",
  //   rl:"ayan shah, sanika ardekar",
  //   code:"123456"},
  //   {pn:"kim green",
  //   rl:"ayan shah, sanika ardekar",
  //   code:"123456"},
  //   {pn:"hello green",
  //   rl:"ayan shah, sanika ardekar",
  //   code:"123456"},
  // ]
  const [card, setCard] = useState([]);

  useEffect(() => {
    (async () => {
      // console.log(props.match.params.item_id)
      let patientName;
      try {
        //let token = localStorage.getItem("itemName");
        // let idi = props.match.params.id;
        // setOrderitem(id);
        let response = await fetch(
          "http://hackathonwork.pythonanywhere.com/updates/list",
          {
            method: "GET",
            headers: {
              // Authorization: `token ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        patientName = await response.json();
        console.log(patientName);
        //  setCard(patientName);
      } catch (error) {
        console.log("Error" + error);
        patientName = [];
      }

      setCard(patientName.data);
    })();
  }, []);

  return (
    <div>
      <HeaderAdmin activePage="Enrolled" />

      <Grid
        container
        display="flex"
        flexDirection="row"
        direction="row"
        justify="center"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <div style={{ display: "inline" }}>
          <Typography variant="h5">Patient Name</Typography>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            style={{ gap: 45, marginTop: 10 }}
          >
            {card.map((card, _) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card
                    variant="outlined"
                    style={{ backgroundColor: "#ffeee4" }}
                  >
                    <CardContent>{card.name}</CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
        <div style={{ display: "inline" }}>
          <Typography variant="h5">Relatives Enrolled</Typography>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            style={{ gap: 45, marginTop: 10 }}
          >
            {card.map((card, _) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card
                    variant="outlined"
                    style={{ backgroundColor: "#888bd2" }}
                  >
                    <CardContent>{card.relatives}</CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
        <div style={{ display: "inline" }}>
          <Typography variant="h5">Code</Typography>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            style={{ gap: 45, marginTop: 10 }}
          >
            {card.map((card, _) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card
                    variant="outlined"
                    style={{ backgroundColor: "#fb3b30" }}
                  >
                    <CardContent>{card.name}</CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Enrolled;
