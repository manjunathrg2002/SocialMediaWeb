// Import necessary functions and components from Firebase and React
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  // Declare state variables for user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  // Function to handle user registration
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Create a new user with email and password using Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        // Store user data in Firestore database
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
      }
      console.log("User Registered Successfully!!");
      // Display a success message using react-toastify
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      // Display an error message using react-toastify
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    // Render the registration form
    <form onSubmit={handleRegister}>
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
              <Typography variant="h4">Sign Up</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Box sx={{ mt: theme.spacing(3) }}>
            {/* Input fields for first name, last name, email, and password */}
            <TextField
              id="outlined-basic-1"
              label="First name"
              variant="outlined"
              type="text"
              margin="normal"
              fullWidth
              onChange={(e) => setFname(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic-2"
              label="Last name"
              variant="outlined"
              type="text"
              margin="normal"
              fullWidth
              onChange={(e) => setLname(e.target.value)}
            />
            <TextField
              id="outlined-basic-3"
              label="Email address"
              variant="outlined"
              type="email"
              margin="normal"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic-4"
              label="Password"
              variant="outlined"
              type="password"
              margin="normal"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Box sx={{ width: "100%" }}>
              {/* Sign Up button */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  width: "100%",
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: "#3e8e41",
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
            {/* Link to the login page */}
            <Typography
              variant="body2"
              sx={{ py: 2, textAlign: "center", fontWeight: "600" }}
            >
              Already have an account?{" "}
              <Button
                component={Link}
                to="/"
                variant="text"
                color="primary"
                sx={{ paddingLeft: 0, fontWeight: "600" }}
              >
                Login
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default Register;