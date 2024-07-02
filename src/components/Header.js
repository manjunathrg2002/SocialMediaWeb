import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Person2Icon from "@mui/icons-material/Person2";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyIcon from "@mui/icons-material/Key";
import LogoutIcon from "@mui/icons-material/Logout";
import InputBase from "@mui/material/InputBase";
import TuneIcon from "@mui/icons-material/Tune";

const settings = [
  { name: "Profile", icon: <Person2Icon /> },
  { name: "Place Ads", icon: <AdsClickIcon /> },
  { name: "View Placed Ads", icon: <AdsClickIcon /> },
  { name: "Settings", icon: <SettingsIcon /> },
  { name: "Change Password", icon: <KeyIcon /> },
  { name: "Logout", icon: <LogoutIcon /> },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ background: "#F5F5F5",pb:2 }}>
        <Grid container spacing={2} pt={"40px"}>
          <Grid item md={3}>
            <Box
              height={"80px"}
              width={260}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                color: "black",
                ml:"50px"
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Mongolian Baiti",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "32px",
                  lineHeight: "44px",
                }}
              >
                Logo
              </Typography>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box
            height={"80px"}
            width={"620px"}
              sx={{
                flexGrow: 1,
                backgroundColor: "white",
                color: "black",
                borderRadius: "10px",
               
              }}
            >
              <Toolbar sx={{pt:1}}>
                <Search sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search here…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <TuneIcon sx={{ mr: 1 }} />
                  Filters
                </Typography>
              </Toolbar>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              height={"80px"}
              width={260}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                color: "white",
                backgroundColor: "#88C2BB",
                borderRadius: "10px",
                ml:-4
              }}
            >
              <Typography>Become a Seller</Typography>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
