import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";




const theme = createTheme({
  palette: {
    primary: {
      main: "#f00", // Set your primary color here
    },
    secondary: {
      main: "#10BD42",
    },
    skyblue: {
      main: "#07b6fd",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
