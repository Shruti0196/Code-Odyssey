import './SignupForRelative.css';
import {
    Grid,
    Box,
    Typography,
    IconButton,
    Button,
    Container,
    InputAdornment,
    FilledInput,
    InputLabel,
  } from "@mui/material";
  import { MdEmail, MdVisibility, MdVisibilityOff, MdAddAPhoto } from "react-icons/md";
  import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
  import { BsPhoneFill } from "react-icons/bs";
  import { useState } from "react";
  import { motion } from "framer-motion";
  export default function SignupForRelative() {
    const [values, setValues] = useState({
      userName: "",
      relativeName:"",
      email: "",
      password: "",
      contactNumber:"",
      document:"",
    });
    const [showPassword1, setshowPassword1] = useState(false);
    const handleClickShowPassword1 = () => {
      setshowPassword1(!showPassword1);
    };
    const handleChanges = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      console.log(values);
    };
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    const imageSelectedHandler = (e) =>{
        console.log(e.target.files[0])
    }
    const addIcon = {
        width: '50px',
        height: '50px',
        display: 'block',
    };
    return (
      <>
        <Container
          component={motion.div}
          transition={{ type: "spring", stiffness: 40 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          maxWidth="xs"
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputLabel htmlFor="user-name">User Name</InputLabel>
                <FilledInput
                  required
                  fullWidth
                  id="user-name"
                  label="User Name"
                  type="text"
                  name="userName"
                  autoComplete="user-name"
                  autoFocus
                  value={values.userName}
                  onChange={handleChanges}
                  endAdornment={
                    <InputAdornment position="end">
                      <BsFillFileEarmarkPersonFill />
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="relative-name">Relative's Name</InputLabel>
                <FilledInput
                  required
                  fullWidth
                  id="relative-name"
                  label="Relative's Name"
                  type="text"
                  name="relativeName"
                  autoComplete="relative-name"
                  autoFocus
                  value={values.relativeName}
                  onChange={handleChanges}
                  endAdornment={
                    <InputAdornment position="end">
                      <BsFillFileEarmarkPersonFill />
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <FilledInput
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChanges}
                  endAdornment={
                    <InputAdornment position="end">
                      <MdEmail />
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  fullWidth
                  type={showPassword1 ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        edge="end"
                      >
                        {showPassword1 ? <MdVisibilityOff /> : <MdVisibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12}>
              <InputLabel htmlFor="input-img">Add your Adhar Card in pdf format</InputLabel>
              <label htmlFor="input-img"><MdAddAPhoto style={addIcon}/></label>
              <input type="file" name="photo" onChange={imageSelectedHandler} id="input-img"/>
              </Grid>
              <Grid item xs={12}>
              <InputLabel htmlFor="contact-number">Contact Number</InputLabel>
              <FilledInput
                required
                fullWidth
                id="contact-number"
                name="contactNumber"
                label="Contact Number"
                id="contactNumber"
                value={values.contactNumber}
                onChange={handleChanges}
                autoComplete="contact-number"
                endAdornment={
                  <InputAdornment position="end">
                    <BsPhoneFill />
                  </InputAdornment>
                }
              />
               </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              style={{
                backgroundColor: "#fb3b30",
                color: "#888bd2",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Container>
      </>
    );
  }
  