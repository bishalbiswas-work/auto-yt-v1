import React from "react";

import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Compoenents
import Testimonials from "../../Components/Testimonial";
import Howitworks from "./Howitworks";
import Bags from "../../Components/Bags";
import Comparision from "../../Components/Comparision";
import LiveChat from "../../Components/LiveChat";

//
import { useNavigate } from "react-router";
const LandingPage2 = () => {
  let navigate = useNavigate();
  const onClickGetStarted = () => {
    navigate("/onboarding/selectlanguage");
  };
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
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
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="body1"
            mr={2}
            sx={{ fontWeight: 700, color: "grey" }}
          >
            Home
          </Typography>
          <Typography
            variant="body1"
            mr={2}
            sx={{ fontWeight: 700, color: "grey" }}
          >
            Services
          </Typography>
          <Typography
            variant="body1"
            mr={2}
            sx={{ fontWeight: 700, color: "grey" }}
          >
            Solutions
          </Typography>
          <Typography
            variant="body1"
            mr={2}
            sx={{ fontWeight: 700, color: "grey" }}
          >
            Testimonials
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            onClick={onClickGetStarted}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "15px",
              px: 4,
              py: 1,
              backgroundColor: "#FF3333",
              "&:hover": {
                backgroundColor: "#e60000",
              },
              "&:active": {
                backgroundColor: "#ff4d4d",
              },
            }}
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>
      <LiveChat />
      {/* Second Element */}
      <Container>
        <Grid
          container
          spacing={3}
          sx={{ height: "400px", alignItems: "center" }}
        >
          <Grid item sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
              }}
            >
              Built & Used by YouTube Automation Pros.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              Work Smarter, Not Harder. Join the New 1%, Today.
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontWeight: 700,
              }}
            >
              Time to Unleash Your Financial Freedom in the New Digital Era with
              Faceless YouTube Automation.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Button
                onClick={onClickGetStarted}
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  borderRadius: "15px",
                  px: 4,
                  py: 1,
                  backgroundColor: "#FF3333",
                  "&:hover": {
                    backgroundColor: "#e60000",
                  },
                  "&:active": {
                    backgroundColor: "#ff4d4d",
                  },
                }}
              >
                Get Started
              </Button>
              <Typography
                variant="caption"
                display="block"
                sx={{
                  color: "grey",
                  mt: 1,
                  paddingLeft: 1,
                  // textAlign: "center",
                  width: "100%",
                }}
              >
                No Credit Card Required
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <img
              src="images/redplaybutton.png"
              alt="Placeholder"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Third Element */}
      {/* <Container>
        <Grid container spacing={3} justifyContent="center">
          {[...Array(5)].map((_, idx) => (
            <Grid item key={idx}>
              <img
                src={`path_to_bag_image_${idx + 1}.jpg`}
                alt={`Bag ${idx + 1}`}
              />
            </Grid>
          ))}
        </Grid>
      </Container> */}
      <Container sx={{ my: 5 }}>
        <Bags />
      </Container>
      {/* <Howitworks /> */}
      <Box height={80}></Box>

      {/* Fourth Element */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="caption"
          align="center"
          display="block"
          gutterBottom
          textTransform="uppercase"
          sx={{
            fontWeight: 700,

            // background: "-webkit-linear-gradient(#3b3bf9, #10e0f9)",
            // //  "-webkit-background-clip: text;",
          }}
        >
          How it Works
        </Typography>
        <Typography variant="h3" align="center" gutterBottom>
          You don't need a Second Job, You Need a Second Income!
        </Typography>
        <Typography
          // variant="body1"
          align="center"
          color="textSecondary"
          sx={{
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          Don't make your life harder with YT Automation, Make it Easier with
          AutoYT. Better Videos (or More Money) in Less Time.
        </Typography>
      </Container>
      <Box height={40}></Box>

      {/* Fifth to Seventh Elements */}

      <Container
        // key={section}
        sx={{
          // height: "400px",
          display: "flex",
          alignItems: "center",
          my: 5,
          // flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
        }}
      >
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Typography
              variant="h5"
              align="left"
              sx={{ fontWeight: 700, fontSize: "32px" }}
            >
              Niches to Riches. Turn Trends to Treasures.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", color: "grey", my: 2 }}
            >
              Don't gamble on unworthy niches to lose time and money. Target the
              highest RPM (Revenue Per Mile) by country, niche and competition
              to stay ahead with weekly trending topics available to choose from
              so you to dominate.
            </Typography>
            <List>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Choose Highest RPM Countries to Target Natively
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Choose Highest Niches RPM. Data update every 24 Hrs.
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Choose Topics with Low Competition, Growing search
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={6}>
            <img
              src="images/img1.png"
              alt="Placeholder"
              style={{ width: "300px", width: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        // key={section}
        sx={{
          // height: "400px",
          display: "flex",
          alignItems: "center",
          my: 5,
          // flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
        }}
      >
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <img
              src="images/img2.png"
              alt="Placeholder"
              style={{ width: "300px", width: "auto" }}
            />
          </Grid>
          <Grid item sm={6}>
            <Typography
              variant="h5"
              align="left"
              sx={{ fontWeight: 700, fontSize: "32px" }}
            >
              AI-Powered Shorts, Pro-Edited Stories!
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", color: "grey", my: 2 }}
            >
              Only using AI-generated videos risks blending in crow while
              violating YouTube's policy causing channel’s delist. At AutoYT,
              you'll harness AI-crafted shorts to maximize reach paired with
              captivating custom videos to maximize watch time aka ad money!
            </Typography>
            <List>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Dedicated YouTube Pro Editoral Team
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Undetectable Human Natural Voiceover
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  SEO Optimized Script, Title + Description
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>

      <Container
        // key={section}
        sx={{
          // height: "400px",
          display: "flex",
          alignItems: "center",
          my: 5,
          // flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
        }}
      >
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Typography
              variant="h5"
              align="left"
              sx={{ fontWeight: 700, fontSize: "32px" }}
            >
              One Creation, Limitless Connection, Data Direction.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", color: "grey", my: 2 }}
            >
              Repurpose & post to All Social Media Channels with One Click of A
              Button to maximize reach with Actionable Insights to know what's
              resonating well.
            </Typography>
            <List>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Repurpose post to Shorts, Reels, TikTok to Maximize Reach.
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Actionable insight on Your Dashboard to see what's performing
                  well.
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 0, my: 0 }}>
                <ListItemIcon>
                  <img
                    src="images/icons/tick.svg"
                    alt="Your Alt Text"
                    style={{ width: "30px", height: "30px" }}
                  />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "18px", color: "grey", my: 2 }}
                >
                  Videos Posted at Best Time for Each Platform Based on Your
                  Audience's Time zones to Maximize Views & Ranking.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={6}>
            <img
              src="images/img2and3.png"
              alt="Placeholder"
              style={{ width: "300px", width: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Eighth Element */}
      <Container
        sx={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, color: "#262626" }}
        >
          Turn From A Content Consumer to A Creator. Save 20+ Hrs/Week. Get
          Ahead.
        </Typography>
        <Typography
          variant="caption"
          align="center"
          color="textSecondary"
          sx={{ fontSize: "18px", my: 3 }}
        >
          “The best time to plant a tree was 20 years ago. The second best time
          is now.”
        </Typography>
      </Container>
      {/* <Container
        sx={{
          height: "500px",
          // display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        <Comparision />
      </Container> */}

      {/* Ninth Element */}
      <Container
        sx={{ height: "400px", display: "flex", alignItems: "center" }}
      >
        <Grid container spacing={3}>
          <Grid item sm={5}>
            {/* <Typography variant="h6" align="left">
              DIY
            </Typography> */}
            <img src="images/diy.png" alt="Placeholder" />
          </Grid>
          <Grid
            item
            sm={2}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Paper
              elevation={3}
              style={{
                borderRadius: "50%",
                fontWeight: 700,
                padding: "20px",
                color: "white",
                background: "rgba(168, 85, 247, 0.5)",
              }}
            >
              VS
            </Paper>
          </Grid>
          <Grid item sm={5}>
            {/* <Typography variant="h6" align="left">
              DIY
            </Typography> */}

            <img src="images/expert_team.png" alt="Placeholder" />
          </Grid>
        </Grid>
      </Container>

      {/* Tenth Element */}
      <Box height={140}></Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, color: "#262626" }}
        >
          Other benfits of Youtube Automation
        </Typography>
      </Container>
      <Box height={100}></Box>
      <Container
        sx={{ height: "400px", display: "flex", alignItems: "center", my: 5 }}
      >
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Typography
              variant="h5"
              align="center"
              sx={{ fontWeight: 700, color: "#262626", fontSize: "32px" }}
            >
              Add Money
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ fontWeight: 700, color: "grey", fontSize: "18px" }}
            >
              Maximize your earnings through targeted ads and monetize your
              content effectively.
            </Typography>
            <img src="images/img3.png" alt="Placeholder" />
          </Grid>
          <Grid item sm={6}>
            <Box
              sx={{
                // height: "150px",
                width: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="images/img4.png" alt="Placeholder" sx={{ ms: 4 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Eleventh Element */}
      <Box height={80}></Box>

      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Grid container spacing={3}>
          <Grid item sm={6} sx={{ my: "auto" }}>
            <Typography
              variant="h5"
              align="center"
              sx={{ fontWeight: 700, color: "#262626", fontSize: "32px" }}
            >
              Affiliate Money
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ fontWeight: 700, color: "grey", fontSize: "18px" }}
            >
              Leverage affilate marketing to earn commissions by promoting
              products that align with your content.
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <img src="images/img5.png" alt="Placeholder" />
          </Grid>
        </Grid>
      </Container>

      {/* Twelfth Element */}
      <Box height={80}></Box>
      <Container>
        <img
          src="images/img6.png"
          alt="Full width"
          style={{ width: "100%", height: "auto" }}
        />
      </Container>
      <Box height={80}></Box>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, color: "#262626" }}
        >
          You're in good company with AutoYT
        </Typography>
        {/* <Box> */}
        <Typography
          variant="caption"
          align="center"
          color="textSecondary"
          sx={{ fontSize: "18px", my: 3, maxWidth: "700px", mx: "auto" }}
        >
          Thousands of marketers, agencies, and entrepreneurs choose AutoYT to
          automate and simplify their content marketing.
        </Typography>
        {/* </Box> */}
        <Testimonials />
      </Container>
      {/* Thirteenth Element */}

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            fontSize: "42px",
            color: "#262626",
            width: "900px",
          }}
        >
          100+ satisfied clients and counting - trust us,{" "}
          <span>we’re just getting started.</span>
        </Typography>
        {/* <Typography variant="body1" align="center" color="textSecondary">
          Grey out text
        </Typography> */}
        <Box height={40}></Box>
        <Button
          onClick={onClickGetStarted}
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "15px",
            px: 4,
            py: 1,
            my: 2,
            backgroundColor: "#FF3333",
            "&:hover": {
              backgroundColor: "#e60000",
            },
            "&:active": {
              backgroundColor: "#ff4d4d",
            },
          }}
        >
          Get Started
        </Button>
      </Container>

      {/* Fourteenth Element */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 900, my: 2, color: "#262626" }}
        >
          Frequently Asked Questions
        </Typography>
        <Box>
          <BasicAccordion />
        </Box>
      </Container>
      <Box height={80}></Box>
    </div>
  );
};

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
            How much income am I expected to make & what results can you
            guarantee?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Income all depends on how much time & money you invest. We can't
            guarantee any amount or timeline as we're a tool designed to
            maximize your success in the minimum time, not an agency. What we
            can guarantee is your chances of success will significantly drop if
            you were to do it all yourself.
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
            Is there any commitment? Can I cancel any time?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely! You can cancel anytime, no strings attached, as we're
            not agency to lock you to a commitment but tool to set you up for
            success.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Is it too late to get to YouTube automation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely not! In fact, it has actually just started. Unfortunately
            numerous people don't see results to then give up with all the time
            and hours wasted as they try to figure out all themselves instead of
            following a strategic system that's working as it's built by the
            pros.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            What the hell is YouTube Automation & why is it taking over?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Simply put, YouTube automation is making money off youtube without
            ever showing your face or recording a video. It's taking over
            because if it's done well, it can pay pretty dividends.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Can I still have creative control authority over the channel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely! Our platform is built to empower you, not replace you.
            You're the brain of your business at the end of the day.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Can I sell merchants, courses, books or anything on the channel &
            even make sponsorship money?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely! With us, we setup all your partnership tools for you
            right away so brands come to you not vice versa. You can sell
            anything you want on your channel to make more cash as it's
            completely your business..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            I couldn't join your platform on July 2023 as your seats were sold
            out. Will it be happening again if I don't start right away?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            We're working around the clock to not happen again given the influx
            of demand our editorial team receive. While we can't guarantee
            anything, we highly suggest to take your spot asap before it's too
            late..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Is the platform user-friendly? Do I need technical skills?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            Absolutely! No jargons or anything. Your success is ours. No need
            for technical skils.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            How to pick topics worth making video about?
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
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Would I get rejected from YouTube monetization program if I post AI
            generated content?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            AutoYouTube AI generated content is completely original as it’s
            powered by GPT4 & Dall-E by OpenAi. Yet, We highly recommend to have
            at least half your content custom made by editorial team especially
            in the early phase to not only pass YouTube monetization program but
            also maximize your ad revenue!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 2 }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            How would I know what niche to pick & how saturated it’s?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: 700, color: "grey" }}>
            AutoYT not only shows you niches with highest RPM but also countries
            with highest RPM to target using the native language for maximum
            success
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
export default LandingPage2;
