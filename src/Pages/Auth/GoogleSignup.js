import React, { Component, useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import { styled } from "@mui/material/styles";

// Auth
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";

//
import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import LandingPage from "../Landing/LandingPage";

//
import SelectLanguage from "../Onboarding/SelectLanguage";

//
import { useContext } from "react";
import DataContext from "../../context/DataContext";

//
import { useNavigate } from "react-router-dom";

function GoogleSignup() {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  // const { isLoggedIn, login } = dataContext.;

  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "end",
    gridGap: "0", // Added this line to remove the gap
  };

  const imageStyle = {
    width: "100%",
    height: "100vh", // set to viewport height
    objectFit: "contain",
    display: "block", // this ensures that the image doesn't have any margin or spacing around it
  };

  const buttonContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const [value, setvalue] = useState("");
  const handelClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setvalue(data.user.email);
      localStorage.setItem("email", data.user.email);
      dataContext.login();
      navigate("/onboarding/selectlanguage");
    });
  };
  useEffect(() => {
    setvalue(localStorage.getItem("email"));

    if (dataContext.isLoggedIn) {
      console.log(dataContext.isLoggedIn);
      // navigate("/onboarding/selectlanguage");

      // return <Redirect to="/onboarding/selectlanguage" />;
    }
  });

  return (
    <div style={containerStyle}>
      {/* <h1>{dataContext.authState.auth}</h1> */}
      <Box sx={{ gridColumn: "1/2", width: "100%" }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          my={3}
          mx={2}
          width="100%"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: "28px", color: "" }}
          >
            AutoYT
            <Typography
              sx={{
                display: "inline",
                color: "red",
                fontSize: "42px",
                fontWeight: 700,
              }}
            >
              .
            </Typography>
          </Typography>{" "}
          <Box sx={{ flexGrow: 1 }}></Box>
          <Typography
            variant="h6"
            style={{ marginLeft: "10px", fontSize: "0.9rem" }}
          >
            <span style={{ color: "gray" }}>Already have an account?</span>
            <Link href="/login" color="inherit" underline="none">
              Login
            </Link>
          </Typography>
        </Box>

        <Box sx={{ height: "30vh" }}></Box>
        <Typography
          variant="h4"
          textAlign="center"
          mb={2}
          sx={{ fontWeight: 700, fontSize: "32px" }}
        >
          Sign up To Get Your Post
        </Typography>
        {/* <Typography variant="h5" textAlign="center">
          Text below
        </Typography> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* {value ? (
            <SelectLanguage />
          ) : (
            )} */}
          <GoogleButton
            onClick={handelClick}
            variant="contained"
            color="primary"
          >
            Google SignUp
          </GoogleButton>
        </div>
      </Box>

      <div>
        <img
          src="/assets/googleLoginPage/1.png"
          alt="Description"
          style={imageStyle}
        />
      </div>
    </div>
    // <Container>
    //   <div>
    //     <Button variant="contained" color="primary">
    //       My Button
    //     </Button>
    //   </div>
    //   <div>
    //     <Image src="/assets/googleLoginPage/1.png" alt="Description" />
    //   </div>
    // </Container>
  );
}

export default GoogleSignup;
