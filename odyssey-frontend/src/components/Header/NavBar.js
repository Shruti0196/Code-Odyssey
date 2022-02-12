import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import "./Header.css";

const NavBar = (activePage) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ["Logout"];
  let value = {
    home: false,
    events: false,
    Committee: false,
    contactUS: false,
  };
  let page = activePage.activePage.activePage;
  if (page === "Home") value.home = true;
  else if (page === "Events") value.events = true;
  else if (page === "Committee") value.Committee = true;
  else if (page === "contactUS") value.contactUS = true;

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const anchor = "left";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "white", height: "100%" }}
    >
      <List>
        <Link className="headerLinks" to={`/`}>
          <ListItem button key="home">
            <ListItemIcon>
              <HiOutlineArrowNarrowRight className="headerLinks" />
            </ListItemIcon>
            <ListItemText>
              <span className="headerLinks">Home</span>
            </ListItemText>
          </ListItem>
        </Link>
        {["Events", "Committee", "Contact Us"].map((text) => (
          <Link
            className="headerLinks"
            to={`/${text.toLowerCase().replace(" ", "-")}`}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                <HiOutlineArrowNarrowRight className="headerLinks" />
              </ListItemIcon>
              <ListItemText>
                <span className="headerLinks">{text}</span>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      style={{ background: "transparent", boxShadow: "none" }}
      position="sticky"
    >
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              {" "}
              <img
                width="50px"
                src="https://www.freeiconspng.com/uploads/sign-check-flat-icon-png-29.png"
                alt="acmIcon"
              />{" "}
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <React.Fragment key={anchor}>
              <Button
                style={{ fontSize: "2rem" }}
                size="large"
                color="inherit"
                onClick={toggleDrawer(anchor, true)}
              >
                <GiHamburgerMenu style={{ color: "green" }} />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              width="89"
              src="https://www.freeiconspng.com/uploads/sign-check-flat-icon-png-29.png"
              alt="acmIcon"
            />
          </Typography>
          <Box
            sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}
            style={{ justifyContent: "center" }}
          >
            <span className="navLinks">
              <Link disabled={value.home} className="headerLinks" to="/">
                <button disabled={value.home} className="btn">
                  Home
                </button>
              </Link>
              <Link
                disabled={value.events}
                className="headerLinks"
                to="/events"
              >
                <button disabled={value.events} className="btn">
                  Events
                </button>
              </Link>
              <Link
                disabled={value.Committee}
                className="headerLinks"
                to="/committee"
              >
                <button disabled={value.Committee} className="btn">
                  Committee
                </button>
              </Link>
              <Link
                disabled={value.contactUS}
                className="headerLinks"
                to="/contact-us"
              >
                <button disabled={value.contactUS} className="btn">
                  Contact Us
                </button>
              </Link>
            </span>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
