import React from 'react'
import { useState } from 'react';
import {Grid, Typography, FilledInput, Box} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import HeaderAdmin from './HeaderAdmin'
import create from "../../Assets/create.jpg";
const useStyles = makeStyles(() => ({
  inputTitles:{
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "25px",
    lineHeight: "30px",
  },
  grid:{
    backgroundImage: "url(" + create +")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
const Create = () => {
  const [values, setValues] = useState({
    name: "",
    dob:"",
    roomNo:"",
    allergies:"",
    medicines:"",
    healthStatus:"",
    appointments:"",
    food:"",
    relatives:"",
  });
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
    //localStorage.setItem("user", JSON.stringify(values.email));
  };
  const classes = useStyles();
  return (
    <div className={classes.grid}>
        <HeaderAdmin activePage="Create" />
        <Grid container direction="column" justifyContent="space-evenly" alignItems="flex-start" style={{gap:15}}> 
        <Grid item xs={12} sm={12} md={6} lg={6} style={{marginTop:"20px", marginLeft:"36px"}}>
        <Typography style={{fontSize: "30px"}}>Create a Patient Log</Typography>
        </Grid>
        <Grid container direction="row" >
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
        <Typography className={classes.inputTitles}>Name</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <FilledInput
                id="name"
                label="name"
                autoFocus
                required
                type="name"
                name="name"
                variant="outlined"
                color="primary"
                autoComplete="name"
                value={values.name}
                fullWidth
                onChange={handleChanges}
              />
        </Grid>
        </Grid>
         
        <Grid container direction="row" >
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
        <Typography className={classes.inputTitles}>Date Of Birth</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <FilledInput
                id="dob"
                label="dob"
                autoFocus
                required
                type="date"
                name="dob"
                variant="outlined"
                color="primary"
                autoComplete="dob"
                value={values.dob}
                fullWidth
                onChange={handleChanges}
              />
        </Grid>
        </Grid>

        <Grid container direction="row" >
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
        <Typography className={classes.inputTitles}>Room Number Alloted</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <FilledInput
                id="roomNo"
                label="roomNo"
                autoFocus
                required
                type="text"
                name="roomNo"
                variant="outlined"
                color="primary"
                autoComplete="roomNo"
                value={values.roomNo}
                fullWidth
                onChange={handleChanges}
              />
        </Grid>
        </Grid>

        <Grid container direction="row" >
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
        <Typography className={classes.inputTitles}>Allergies</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <FilledInput
                id="allergies"
                label="allergies"
                autoFocus
                required
                type="text"
                name="allergies"
                variant="outlined"
                color="primary"
                autoComplete="allergies"
                value={values.allergies}
                fullWidth
                onChange={handleChanges}
              />
        </Grid>
        </Grid>

        <Grid container direction="row" >
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
        <Typography className={classes.inputTitles}>Medicines</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <FilledInput
                id="medicines"
                label="medicines"
                autoFocus
                required
                type="text"
                name="medicines"
                variant="outlined"
                color="primary"
                autoComplete="medicines"
                value={values.medicines}
                fullWidth
                onChange={handleChanges}
              />
        </Grid>
        </Grid>

        <Grid container direction="row" >
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
        <Typography className={classes.inputTitles}>Health Status</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <FilledInput
                id="healthStatus"
                label="healthStatus"
                autoFocus
                required
                type="text"
                name="healthStatus"
                variant="outlined"
                color="primary"
                autoComplete="healthStatus"
                value={values.healthStatus}
                fullWidth
                onChange={handleChanges}
              />
        </Grid>
        </Grid>

        <Grid container direction="row" >
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
        <Typography className={classes.inputTitles}>Appointments</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <FilledInput
                id="appointments"
                label="appointments"
                autoFocus
                required
                type="text"
                name="appointments"
                variant="outlined"
                color="primary"
                autoComplete="appointments"
                value={values.appointments}
                fullWidth
                onChange={handleChanges}
              />
        </Grid>
        </Grid>

        <Grid container direction="row" >
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
        <Typography className={classes.inputTitles}>Food</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <FilledInput
                id="food"
                label="food"
                autoFocus
                required
                type="text"
                name="food"
                variant="outlined"
                color="primary"
                autoComplete="food"
                value={values.food}
                fullWidth
                onChange={handleChanges}
              />
        </Grid>
        </Grid>

        <Grid container direction="row" >
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
        <Typography className={classes.inputTitles}>Relatives Known</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <FilledInput
                id="relatives"
                label="relatives"
                autoFocus
                required
                type="text"
                name="relatives"
                variant="outlined"
                color="primary"
                autoComplete="relatives"
                value={values.relatives}
                fullWidth
                onChange={handleChanges}
              />
        </Grid>
        </Grid>
        </Grid>
    </div>
  )
}

export default Create