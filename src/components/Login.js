import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Divider,
  IconButton,
  Grid,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  // State variables for email, password, and password visibility
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sign in the user with email and password using Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      // Redirect the user to the "/Home" route
      window.location.href = "/Home";
      // Display a success toast notification
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      // Display an error toast notification
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: { md: `url(/media/images/bg-login.jpg)` },
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: theme.spacing(3),
          backgroundColor: "#f0f2f5",
        }}
      >
        <Box
          sx={{
            width: { md: "35%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            marginTop: { md: theme.spacing(5) },
            marginRight: { md: theme.spacing(2) },
            padding: theme.spacing(3),
            borderRadius: theme.spacing(2),
            boxShadow: theme.shadows[3],
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ marginBottom: theme.spacing(3), textAlign: "center" }}
          >
            <Grid item xs={12}>
              <Typography variant="h4">Login</Typography>
            </Grid>
          </Grid>
          <Divider />
          {/* Login form body */}
          <Box sx={{ mt: theme.spacing(3) }}>
            <TextField
              id="outlined-basic-1"
              label="Enter Your Email"
              variant="outlined"
              type="email"
              margin="normal"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id="outlined-basic-2"
              label="Enter Your Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              margin="normal"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: theme.spacing(2) }}
            />

            <Box sx={{ width: "100%" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#4CAF50", // Primary blue color
                  color: "#fff",
                  width: "100%",
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: "#3e8e41", // Darker blue for hover state
                  },
                }}
              >
                Login
              </Button>
            </Box>
            <Typography
              variant="body2"
              sx={{ py: 2, textAlign: "center", fontWeight: "600" }}
            >
              Don't have an account?{" "}
              <Button
                component={Link}
                to="/register"
                variant="text"
                color="primary"
                sx={{ paddingLeft: 0, fontWeight: "600" }}
              >
                Sign Up
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default Login;