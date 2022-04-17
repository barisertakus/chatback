import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useLogoutUserMutation } from "../services/usersApi";
import Router from "next/router";
import {AppContext} from "../context/appContext"
import { RouteSharp } from "@mui/icons-material";

const pages = [
  { label: "Chat", name: "chat" },
  { label: "Login", name: "login" },
];
const settings = ["Logout"];

const Navbar = () => {
  const user = useSelector(selectUser);
  const [logoutUser] = useLogoutUserMutation();
  const {setRooms, setMembers, setMessages} = useContext(AppContext);


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await logoutUser(user);
    handleCloseUserMenu();
    setMembers([])
    setRooms([])
    setMessages([]);
    Router.push("/")
  }

  const Logo = () => {
    return (
      <Box
        component="img"
        src="/assets/chatback-logo.png"
        sx={{ height: 80, width: 80, cursor:"pointer" }}
        onClick={()=>Router.push("/")}
      />
    );
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#6E00FF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
            >
              {pages.map((page, i) => (
                <MenuItem
                  key={i}
                  onClick={handleCloseNavMenu}
                  style={{
                    display: user && page.name === "login" ? "none" : "block",
                  }}
                >
                  <Link href={"/" + page.name}>
                    <a>
                      <Typography textAlign="center">{page.label}</Typography>
                    </a>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Logo />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              mr: 2,
            }}
          >
            {pages.map((page, i) => (
              <Link href={"/" + page.name} key={i} passHref>
                <Button
                  component="a"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: user?._id && page.name === "login" ? "none" : "block",
                  }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <Avatar alt={user.name} src={user.picture} />
                ) : (
                  <Avatar alt="Remy Sharp" src="/assets/robot.png" />
                )}
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
                <MenuItem key={setting} onClick={handleLogout}>
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
export default Navbar;
