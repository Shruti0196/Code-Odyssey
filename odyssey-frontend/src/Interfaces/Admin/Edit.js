import React from "react";
import { useState } from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  inputTitles: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "25px",
    lineHeight: "30px",
    marginRight: "50px",
  },
  // grid:{
  //   backgroundImage: "url(" + create +")",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  // },
}));

export default function Edit({ data, setData }) {
  const [values, setValues] = useState({
    name: "",
    dob: "",
    roomNo: "",
    allergies: "",
    medicines: "",
    healthStatus: "",
    appointments: "",
    food: "",
    relatives: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    //editLog();
  };
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: 
      (event.target.value===""? event.target.placeholder : event.target.value),
    });
    console.log(values);
  };
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {/* <HeaderAdmin activePage="Create" /> */}
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        style={{ gap: 15 }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ marginTop: "20px", marginLeft: "36px" }}
        >
          <Typography style={{ fontSize: "30px" }}>
            Edit {data.name}'s Log
          </Typography>
        </Grid>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container direction="row" marginBottom={5}>
            <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
              <Typography className={classes.inputTitles}>Name</Typography>
            </Grid>
            <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
              <TextField
                id="filled-helperText"
                variant="standard"
                placeholder={data.name}
                autoFocus
                required
                type="name"
                name="name"
                color="primary"
                autoComplete="name"
                value={values.name}
                fullWidth
                onChange={handleChanges}
                style={{ width: "250px" }}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" marginBottom={5}>
            <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
              <Typography className={classes.inputTitles}>
                Date Of Birth
              </Typography>
            </Grid>
            <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
              <TextField
                id="dob"
                variant="standard"
                type="text"
                name="dob"
                color="primary"
                autoComplete="dob"
                placeholder={data.dob}
                value={values.dob}
                //onChange={(e)=>{values({dob: e.target.value})}}
                fullWidth
                onChange={handleChanges}
                style={{ width: "250px" }}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" marginBottom={5}>
            <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
              <Typography className={classes.inputTitles}>
                Room Number Alloted
              </Typography>
            </Grid>
            <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
              <TextField
                id="roomNo"
                required
                type="text"
                name="roomNo"
                placeholder={data.roomno}
                variant="standard"
                color="primary"
                autoComplete="roomNo"
                value={values.roomNo}
                fullWidth
                onChange={handleChanges}
                style={{ width: "250px" }}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" marginBottom={5}>
            <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
              <Typography className={classes.inputTitles}>Allergies</Typography>
            </Grid>
            <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
              <TextField
                id="allergies"
                required
                placeholder={data.allergies}
                type="text"
                name="allergies"
                variant="standard"
                color="primary"
                autoComplete="allergies"
                value={values.allergies}
                fullWidth
                onChange={handleChanges}
                style={{ width: "250px" }}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" marginBottom={5}>
            <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
              <Typography className={classes.inputTitles}>Medicines</Typography>
            </Grid>
            <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
              <TextField
                id="medicines"
                required
                placeholder={data.medicines}
                type="text"
                name="medicines"
                variant="standard"
                color="primary"
                autoComplete="medicines"
                value={values.medicines}
                fullWidth
                onChange={handleChanges}
                style={{ width: "250px" }}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" marginBottom={5}>
            <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
              <Typography className={classes.inputTitles}>
                Health Status
              </Typography>
            </Grid>
            <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
              <TextField
                id="healthStatus"
                variant="standard"
                required
                placeholder={data.healthstatus}
                type="text"
                name="healthStatus"
                color="primary"
                autoComplete="healthStatus"
                value={values.healthStatus}
                fullWidth
                onChange={handleChanges}
                style={{ width: "250px" }}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" marginBottom={5}>
            <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
              <Typography className={classes.inputTitles}>
                Appointments
              </Typography>
            </Grid>
            <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
              <TextField
                id="appointments"
                variant="standard"
                required
                placeholder={data.appointments}
                type="text"
                name="appointments"
                color="primary"
                autoComplete="appointments"
                value={values.appointments}
                fullWidth
                onChange={handleChanges}
                style={{ width: "250px" }}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" marginBottom={5}>
            <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
              <Typography className={classes.inputTitles}>Food</Typography>
            </Grid>
            <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
              <TextField
                id="food"
                required
                placeholder={data.food}
                type="text"
                name="food"
                variant="standard"
                color="primary"
                autoComplete="food"
                value={values.food}
                fullWidth
                onChange={handleChanges}
                style={{ width: "250px" }}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" marginBottom={5}>
            <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
              <Typography className={classes.inputTitles}>
                Relatives Known
              </Typography>
            </Grid>
            <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
              <TextField
                id="relatives"
                variant="standard"
                required
                placeholder={data.relatives}
                type="text"
                name="relatives"
                color="primary"
                autoComplete="relatives"
                value={values.relatives}
                fullWidth
                onChange={handleChanges}
                style={{ width: "250px" }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ ml: 2, mt: 2, mb: 1 }}
            style={{
              backgroundColor: "#fb3b30",
              color: "#888bd2",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Update
          </Button>
        </Box>
      </Grid>
    </div>
  );
}
