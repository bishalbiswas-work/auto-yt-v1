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

//
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import DataContext from "../../context/DataContext";
// import { styled } from "@mui/material/styles";

//
import LiveChat from "../../Components/LiveChat";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const countries = [
  { name: "Norway", flag: "/assets/icons/flags/norway.png", cpm: "43.15" },
  { name: "Germany", flag: "/assets/icons/flags/germany.png", cpm: "38.85" },
  { name: "Moldova", flag: "/assets/icons/flags/moldova.png", cpm: "29.50" },
  { name: "Algeria", flag: "/assets/icons/flags/algeria.png", cpm: "24.50" },
  {
    name: "South Korea",
    flag: "/assets/icons/flags/south-korea.png",
    cpm: "17.00",
  },
  { name: "Sweden", flag: "/assets/icons/flags/sweden.png", cpm: "43.15" },
  { name: "Finland", flag: "/assets/icons/flags/finland.png", cpm: "38.85" },
  {
    name: "United Kingdom",
    flag: "/assets/icons/flags/united-kingdom.png",
    cpm: "29.50",
  },
  { name: "Canda", flag: "/assets/icons/flags/canada.png", cpm: "24.50" },
  {
    name: "United States",
    flag: "/assets/icons/flags/united-states.png",
    cpm: "17.00",
  },
  // Add more countries and paths to their flags as needed
];

const SelectLanguage = () => {
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

  const onClickNext = () => {
    navigate("/onboarding/voiceselection");
    dataContext.setonboardingLanguage({ language: selectedCountry });
  };
  const onClickBack = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log(dataContext.onboarding);
    console.log(selectedCountry);
  }, [selectedCountry]);

  return (
    <div>
      <LiveChat />
      {/* <Button onClick={logout}>logout</Button> */}
      <Grid
        container
        direction="column"
        // spacing={2}
        style={{ height: "100vh" }}
      >
        <Grid item>
          <Box height={40}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "gray" }}>Step 1 out of 5</span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={20}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "black" }}>
                Please select from top 10 countries that you want to target
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={40}></Box>
          <Box display="flex" justifyContent="center" alignItems="center"></Box>
        </Grid>
        <Grid item>
          {/* <Box bgcolor="secondary.main" height={40}></Box> */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <Stack direction="column" spacing={3}>
              {/* Row 1 */}
              <Stack direction="row" spacing={2}>
                {countries.slice(0, 5).map((country) => (
                  <CountryButton
                    country={country}
                    key={country.name}
                    isSelected={selectedCountry === country.name}
                    onSelect={() => setSelectedCountry(country.name)}
                  />
                ))}
              </Stack>

              {/* Row 2 */}
              <Stack direction="row" spacing={2}>
                {countries.slice(5, 10).map((country) => (
                  <CountryButton
                    country={country}
                    key={country.name}
                    isSelected={selectedCountry === country.name}
                    onSelect={() => setSelectedCountry(country.name)}
                  />
                ))}
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item>
          <Box height={60}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              style={{ marginLeft: "10px", fontSize: "0.9rem" }}
            >
              <span style={{ color: "black" }}>
                "Select Your Voice Language Personalize Your Experience"
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box height={20}></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <FormControl variant="outlined" fullWidth sx={{ width: "250px" }}>
              <Select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                label="Country"
              >
                {countries.map((country) => (
                  <MenuItem key={country.name} value={country.name}>
                    <Box display="flex" flexDirection="row" sx={{ mb: 1 }}>
                      <img
                        src={country.flag}
                        alt={country.name}
                        style={{
                          width: "18px",
                          height: "18px",
                          marginRight: "10px",
                        }}
                      />
                      <Typography
                        variant="body1"
                        style={{
                          textTransform: "capitalize",
                          fontSize: "12px",
                        }}
                      >
                        {country.name}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
                    borderColor: "#9b8cf2",
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
              >
                Next
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

function CountryButton({ country, isSelected, onSelect }) {
  return (
    <Button
      onClick={onSelect}
      variant="outlined"
      size="large"
      sx={{
        px: 2,
        py: 2,
        borderRadius: "10px",
        borderColor: isSelected ? "#735fed" : "#ffe5eb",
        "&:hover": {
          borderColor: "#9b8cf2",
        },
        "&:active": {
          borderColor: "#735fed",
        },
      }}
    >
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" sx={{ mb: 1 }}>
          <img
            src={country.flag}
            alt="Flag"
            style={{
              width: "18px",
              height: "18px",
              marginRight: "8px",
            }}
          />
          <Typography
            variant="body1"
            style={{ textTransform: "capitalize", fontSize: "10px" }}
          >
            {country.name}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="gray"
          style={{
            textTransform: "capitalize",
            width: "fit-content",
          }}
        >
          CPM :- ${country.cpm}
        </Typography>
      </Box>
    </Button>
  );
}

export default SelectLanguage;
