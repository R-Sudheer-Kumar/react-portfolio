import { Grid, Typography , Box, Stack } from "@mui/material";
import React from "react";
import Skills from "../../components/Skills";
import Spaces from "../Home/Spaces";
import Education from "../../components/education/Education";
import { sudheerImage } from "../../firebase.utils";

function About() {
  return (
    <>
      <Box
        minHeight="600px"
        color="white"
        justifyContent="center"
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <Grid container justifyContent="space-around" width="1300px">
          <Grid item>
            <Stack
              direction="column"
              alignItems="start"
              justifyContent="space-around"
              sx={{
                marginTop: "40px",
                padding: { xs: "0 30px", md: "0 0 0 20px", lg: "0" },
              }}
              spacing={1}
              maxWidth="700px"
            >
              <Typography
                sx={{
                  fontSize: { xs: "30px", md: "40px" },
                  color: "orange",
                  fontWeight: "bold",
                  width:'100%',
                  textAlign:'center',
                  paddingBottom:'30px'
                }}
              >
                About Me
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "20px", lg: "22px" },
                  color: "white",
                }}
              >
                I am{" "}
                <span className="highlight"> Rachamadugu Sudheer Kumar </span> ,
                a final-year B.Tech student in Computer Science Engineering with
                a specialization in data science at{" "}
                <span className="highlight">
                  {" "}
                  RISE Krishna Sai Prakasam Group Of Institutions.{" "}
                </span>
                I am an enthusiastic, self-motivated and hard working person. I
                want to be part of a progressive organization which gives me
                scope to enhance both my personal and professional skills.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "20px", lg: "22px" },
                  color: "white",
                  paddingTop:'50px',
                  
                }}
              >
                Apart from technical skills , I enjoy myself by 
                <Stack sx={{paddingLeft:'50px',marginTop:'10px' }} spacing={1}>
                <Typography variant='h6'>👉Watching Movies</Typography>
                <Typography variant='h6'>👉Listening Songs</Typography>
                <Typography variant='h6'>👉Spending Time with Family and Friends</Typography>
             
                    </Stack>
                </Typography>
            </Stack>
   
          </Grid>
          <Grid item sx={{ marginTop: { xs: "50px", md: "100px" } }}>
            <Stack height="100%" justifyContent="center">
              <img
                src={ sudheerImage }
                alt="user"
                height="300px"
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Spaces />
      <Education />
      <Spaces />
      <Skills />
    </>
  );
}

export default About;
