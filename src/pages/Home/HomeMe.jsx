import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import React from "react";
import useravatar from "../../assets/user-avatar.png";
import whoAmI from "../../assets/whoAmI.png";
import {Link} from 'react-router-dom';

function HomeMe() {
  return (
    <Box
      height="600px"
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
            sx={{ marginTop: "40px" , padding:{xs:'0 30px' ,md:'0 0 0 20px' , lg:'0'}}}
            spacing={2}
            maxWidth="600px"
          >
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "40px" },
                color: "orange",
                fontWeight: "bold",
              }}
            >
              Who Am I ?? <img src={whoAmI} alt="who am i" width="50px" />{" "}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "18px", md: "22px",lg:'25px' }, color: "white" }}
            >
              I am R. Sudheer Kumar, a final-year B.Tech student in Computer
              Science Engineering with a specialization in data science. I have a
              strong interest in applying technology to solve difficult
              problems, and I'm dedicated to always learning new things in the
              rapidly developing field of data science. I'm also a web developer always wishing to create new products useful for everyone.
            </Typography>
            <Button sx={{color:'red',fontSize:'20px', fontWeight:'600', paddingTop:'20px' , '&:hover':{color:'yellow'}}}  component={Link} to="/about"  >Know More About Me</Button>
          </Stack>
        </Grid>
        <Grid item sx={{ marginTop: { xs: "50px", md: "100px" } }}>
          <img src={useravatar} alt="user avatart" height='250px' />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeMe;
