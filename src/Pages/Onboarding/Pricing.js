import React, { Component } from "react";
import { useState } from "react";
// import ReactDOM from "react-dom/client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
// import { styled } from "@mui/material/styles";
import AspectRatio from "@mui/joy/AspectRatio";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

//
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import DataContext from "../../context/DataContext";

//
import LiveChat from "../../Components/LiveChat";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function mapIndexToValue(index) {
  const values = [10, 15, 30, 45, 60];
  return values[index];
}
function getPriceFromValue(sliderValue) {
  switch (sliderValue) {
    case 10:
      return 99;
    case 15:
      return 149;
    case 30:
      return 199;
    case 45:
      return 249;
    case 60:
      return 299;
    default:
      return 0;
  }
}
function getPaymentUrlFromPrice(price) {
  const urls = {
    99: "https://buy.stripe.com/3csaH3aJjenh21q5kq",
    149: "https://buy.stripe.com/9AQ9CZ2cN92X35uaEL",
    199: "https://buy.stripe.com/14kdTf18Ja7149y3ck",
    249: "https://buy.stripe.com/6oEcPb4kV4MH5dCdQZ",
    299: "https://buy.stripe.com/bIY5mJcRrfrleOc5kp",
  };
  return urls[price] || "";
}
const voices = [
  { name: "Male", path: "/assets/icons/person/male.png" },
  { name: "Female", path: "/assets/icons/person/female.png" },

  // Add more countries and paths to their flags as needed
];
const Pricing = () => {
  const dataContext = useContext(DataContext);
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const defaultCountry = "United States";
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  //
  const [index, setIndex] = useState(2);
  const value = mapIndexToValue(index);
  const selectedPrice = getPriceFromValue(value);
  const payment_url = getPaymentUrlFromPrice(selectedPrice);

  const handleChange = (event, newIndex) => {
    setIndex(newIndex);
  };

  const marks = [0, 1, 2, 3, 4].map((i) => ({
    value: i,
    label: mapIndexToValue(i).toString(),
  }));

  // const onClickNext = () => {
  //   navigate("/onboarding/pricing");
  // };
  //
  const onClickBack = () => {
    navigate("/onboarding/voiceselection");
  };
  const onClickNext = () => {
    dataContext.setonboardingPrice({ price: selectedPrice });
    console.log(dataContext.onboarding);
    dataContext.saveonboardingData();
  };
  // useEffect(() => {
  //   console.log(dataContext.onboarding);
  // }, [selectedPrice]);

  return (
    <div>
      <LiveChat />
      <Grid
        container
        direction="column"
        // spacing={2}
        // style={{ height: "100vh" }}
      >
        <Grid item>
          <Box height={40}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "gray" }}>Step 5 out of 5</span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={20}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{
                marginLeft: "10px",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              <span style={{ color: "black" }}>
                How Fast DO You Want to Grow?
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={40}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box sx={{ width: 600 }}>
              <Slider
                aria-label="Temperature"
                value={index}
                onChange={handleChange}
                valueLabelDisplay="off"
                step={1}
                // marks={marks}
                min={0}
                max={4}
              />
            </Box>
          </Box>
          <Box height={60}></Box>
        </Grid>
        <Grid item>
          {/* <Box bgcolor="secondary.main" height={40}></Box> */}
          <Box display="flex" justifyContent="center" alignItems="center">
            {/* <Stack direction="row" spacing={12}>
              {voices.slice(0, 2).map((voice) => (
                <VoiceButton voice={voice} key={voice.name} />
              ))}
            </Stack> */}
            <PriceCard
              price={selectedPrice}
              paymentLink={payment_url}
              onClickNext={onClickNext}
            />
          </Box>
          <Box height={60}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <BasicAccordion />
          </Box>
        </Grid>

        <Grid item>
          <Box height={80}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={2}>
              <Button
                onClick={onClickBack}
                variant="outlined"
                size="sm"
                sx={{
                  px: 4,
                  color: "#ff4d70",
                  fontSize: "12px",
                  borderRadius: "10px",
                  borderColor: "#ff4d70",
                  "&:hover": {
                    borderColor: "#ff4d70",
                  },
                  "&:active": {
                    borderColor: "#735fed",
                  },
                }}
              >
                Back
              </Button>
              <Button
                onClick={onClickNext}
                variant="contained"
                size="sm"
                sx={{
                  px: 4,

                  fontSize: "12px",
                  borderRadius: "10px",
                  backgroundColor: "#ff4d70",
                  "&:hover": {
                    backgroundColor: "#ff4d70",
                  },
                  "&:active": {
                    backgroundColor: "#ff4d70",
                  },
                }}
                href={payment_url}
              >
                Next
              </Button>
            </Stack>
          </Box>
          <Box height={80}></Box>
        </Grid>
      </Grid>
    </div>
  );
};

function PriceCard({ price, paymentLink, onClickNext }) {
  return (
    //  backgroundColor: "FF335B"
    <Card
      variant="outlined"
      sx={{
        width: 300,
        background: "linear-gradient(60deg,#ff1a47 5%, #ffb3c2 90%)",
        color: "white",
      }}
    >
      <div>
        <Typography level="title-lg" sx={{ fontSize: "18px" }}>
          Hands Off (Pro Youtube Team)
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "32px", fontWeight: 700, p: 1 }}
        >
          ${price}
          <Box
            component="span"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              // verticalAlign: "top",
              marginLeft: 1,
            }}
          >
            / Month
          </Box>
        </Typography>
      </div>

      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs" sx={{ mb: 1 }}>
            What's included
          </Typography>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              <Box component="span" sx={{ color: "green" }}>
                30 Min
              </Box>
              Credit for Custom Videos
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Custom Thumbnail - Pro Designers
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Unlimited AI Generated Shorts
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Human Quality Voice Over
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Support 100+ Languages
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              SEO Optimized Title + Description
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              YouTube topic Research Analytics
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <CheckCircleIcon />
            <Typography
              sx={{ fontSize: "16px" }}
              fontWeight="700"
              marginLeft={1}
            >
              Live Chat 27x7 Support
            </Typography>
          </Box>
          <Box height={60}></Box>

          <Box display="flex" textAlign="center" sx={{ mb: 1, mx: 1 }}>
            <Button
              onClick={onClickNext}
              size="lg"
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#ff4d70",
                fontWeight: "700",
                px: 5,
                py: 1,
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#ffe5eb",
                },
                "&:active": {
                  backgroundColor: "white",
                },
              }}
              href={paymentLink}
            >
              Get Started
            </Button>
          </Box>
        </div>
      </CardContent>
    </Card>
  );
}

function BasicAccordion() {
  return (
    <Box sx={{ maxWidth: "700px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            How to pick topics work making video about?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            AutoYT shows you the top trending topics with the search &
            competition volume. So you make the best video in the least time!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Will just using AI Made Content Ban my YouTube Channel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Only using AI-generated videos bans your channel as it violates
            YouTube Original content policy but also blends you in the crowd. At
            AutoYT, you'll harness AI-crafted shorts to maximize reach paired
            with captivating custom videos by your pro editorial team to
            maximize watch time aka minimum time spent, maximize revenue made.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Pricing;
