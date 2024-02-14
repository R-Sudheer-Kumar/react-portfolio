import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [navPosition, setNavPosition] = useState(false);
  const names = ["Home", "About", "Projects", "Contact", "Resume"];
  const icons = [
    <HomeOutlinedIcon sx={{ marginRight: "5px" }} />,
    <PersonOutlineOutlinedIcon sx={{ marginRight: "5px" }} />,
    <LaptopChromebookOutlinedIcon sx={{ marginRight: "5px" }} />,
    <ContactMailIcon sx={{ marginRight: "5px" }} />,
    <StickyNote2OutlinedIcon sx={{ marginRight: "5 px" }} />,
  ];
  const [open, setOpen] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavPosition(true);
    } else {
      setNavPosition(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (

      <AppBar
      
        sx={{
          backgroundColor: navPosition ? "rgb(31,30,51)" : "transparent",
          padding: "0 0px",
          position:(navPosition?'sticky':'block'),
          
        
        }}
        
        position="sticky"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width:'100%',
          }}
        >
          <img
            src={logo}
            width="70px"
            height="70px"
            alt='logo'
            style={{ marginRight: "30px" }}
          />

          <IconButton
            color="inherit"
            size="large"
            sx={{ display: { sm: "flex", md: "none" } }}
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Stack
            direction="row"
            spacing={{ sm: 3, md: 4, lg: 6 }}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {names.map((name, index) => {
              return (
                <IconButton
                  size="small"
                  edge="start"
                  key={index}
                  sx={{
                    "&::after": {
                      bottom: "-2px",
                      content: "''",
                      display: "block",
                      height: "4px",
                      left: "0",
                      position: "absolute",
                      background: "orange",
                      transition: "width 0.3s ease 0s, left 0.3s ease 0s",
                      width: "0",
                    },
                    "&:hover::after": {
                      width: "100%",
                      left: "0",
                    },
                  }}
                  component={NavLink}
                  to={name === "Home" ? "/" : name}
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "white",
                  })}
                >
                  {icons[index]} {name}
                </IconButton>
              );
            })}
          </Stack>
        
         
        </Box>

        <Stack
            direction="column"

            spacing={{ sm: 3, md: 4, lg: 6 }}
            sx={{
                position:'absolute',
                width:'100%',
            
                top:(!open ? '-500px' : '70px'),
              display: { xs: "flex", md: "none" },
              transition: "height 0.5s ease , top 0.5s ease",
              backgroundColor: navPosition ? 'rgb(31,30,51)' : 'transparent',
              zIndex:'-1',       
              padding:'0 0 20px 0'         
            }}
          >
            {names.map((name, index) => {
              return (
                <IconButton
                  size="small"
                  edge="start"
                  key={index}
                  sx={{
                    "&::after": {
                      bottom: "-2px",
                      content: "''",
                      display: "block",
                      height: "4px",
                      left: "40%",
                      position: "absolute",
                      background: "orange",
                      transition: "width 0.3s ease 0s, left 0.3s ease 0s",
                      width: "0",
                    },
                    "&:hover::after": {
                      width: "20%",
                    },
                  }}
                  component={NavLink}
                  to={name === "Home" ? "/" : name}
                  onClick={()=> setOpen(false)}
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "white",
                  })}
                >
                  {icons[index]} {name}
                </IconButton>
              );
            })}
    
          </Stack>
      </AppBar>

  );
}
export default Navbar;
