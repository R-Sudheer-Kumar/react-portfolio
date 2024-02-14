import { Box, Grid, Typography } from "@mui/material";
import { FaCss3,  FaHtml5,  FaPython } from "react-icons/fa6";
import { FaJava, FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { TbLetterC } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";

function Skills() {
  const skills = [
    <TbLetterC size='100px' color='rgb(89,4,250)' />,
    <FaPython size="100px" color='rgb(247,201,60)' />,
    <FaJava size="100px" color='blue' />,
    <FaReact size="100px"  color='rgb(0,216,255)'/>,
    <FaAngular size="100px" color='rgb(190,0,46)' />,
    <SiFlask size="100px" color='black' />,
    <FaHtml5 size="100px" color='rgb(233,98,40)' />,
    <FaCss3 size="100px" color='rgb(51,164,212)' />,
    <FaJs size="100px" color='rgb(213,142,11)' />,
    <SiMui size='100px' color='rgb(12,133,255)' />,
    <FaBootstrap size='100px' color='rgb(121,16,242)' />,
    <SiFirebase size="100px" color='rgb(213,142,11)' />,
    <SiMysql size="100px" color='rgb(66,117,156)' />,
    
  ];
  return (
    <>
      <Box
        sx={{
          color: "white",
          minHeight: "400px",
          justifyContent: "center",
          alignItems:'center',
          display: "flex",
          padding: '30px 40px 20px 40px'
        }}
        flexDirection='column'
      > 
        <Typography variant='h3' sx={{fontWeight:'600' , paddingBottom:'30px' }}>Technical <span className="highlight">Skills</span></Typography>
        <Grid
          container
          sx={{ padding: "20px 10px", margin: "0px 50px" }}
          justifyContent="space-evenly"
          maxWidth='1100px'
        >
          {skills.map((skill) => {
            return (
              <Grid
                item
                sx={{
                  border: 3,
                  height: "150px",
                  borderRadius: "20px",
                  margin: "20px 20px",
                  padding: "20px",
                  backgroundColor:'white',
                  overflow:'hidden',
                }}
              >
                {skill}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Skills;
