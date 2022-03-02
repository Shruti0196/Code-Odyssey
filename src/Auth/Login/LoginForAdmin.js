import { useState } from "react";
import {
  FilledInput,
  Grid,
  InputAdornment,
  InputLabel,
  Container,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import welcome from "../../Assets/welcome.svg";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LoginForAdmin() {
  const [setLoading] = useState(true);

  const useStyles = makeStyles(() => ({
    img: {
      width: "200px",
      height: "200px",
    },
    imgDiv: {
      // padding: '0'
    },
  }));
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    createacc();
  };

  const history = useNavigate();

  async function createacc() {
    console.log("hello");
    try {
      let result = await fetch(
        "http://hackathonwork.pythonanywhere.com/auth/login/",
        {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      result = await result.json();
      console.log(result);
      // saveToken(result.token);
      // saveUsername(result.email);
      // saveUserId(result.user_id);
      if (result.tokens) {
        // console.log("hello");
        history('/create');
      }
    } catch (error) {
      console.log("Error" + error);
      alert("Please enter valid credentials");
      setLoading(false);
    }
  }

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
    localStorage.setItem("user", JSON.stringify(values.email));
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleShowPassword = () => {
    console.log(setValues);
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes = useStyles();
  return (
    <>
      <Container
        disableGutters
        component={motion.div}
        transition={{ type: "spring", stiffness: 40 }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        maxWidth="xs"
      >
        <div className={classes.imgDiv}>
          <img src={welcome} className={classes.img} alt="" />
        </div>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <FilledInput
                id="email"
                label="Email"
                autoFocus
                required
                type="email"
                name="email"
                variant="outlined"
                color="primary"
                autoComplete="email"
                value={values.email}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <MdEmail />
                  </InputAdornment>
                }
                onChange={handleChanges}
              />
            </Grid>
            <Grid spacing={3} item xs={12}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <FilledInput
                id="password"
                label="password"
                color="primary"
                required
                type={values.showPassword ? "text" : "password"}
                name="password"
                variant="outlined"
                value={values.password}
                fullWidth
                autoComplete="current-password"
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdVisibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ ml: 2, mt: 2, mb: 1 }}
              style={{
                backgroundColor: "#fb3b30",
                color: "#888bd2",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Login
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
