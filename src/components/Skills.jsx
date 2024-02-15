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
    <TbLetterC size='70px' color='rgb(89,4,250)' />,
    <FaPython size="70px" color='rgb(247,201,60)' />,
    <FaJava size="70px" color='blue' />,
    <FaReact size="70px"  color='rgb(0,216,255)'/>,
    <FaAngular size="70px" color='rgb(190,0,46)' />,
    <SiFlask size="70px" color='black' />,
    <FaHtml5 size="70px" color='rgb(233,98,40)' />,
    <FaCss3 size="70px" color='rgb(51,164,212)' />,
    <FaJs size="70px" color='rgb(213,142,11)' />,
    <SiMui size='70px' color='rgb(12,133,255)' />,
    <FaBootstrap size='70px' color='rgb(121,16,242)' />,
    <SiFirebase size="70px" color='rgb(213,142,11)' />,
    <SiMysql size="70px" color='rgb(66,117,156)' />,
    
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
          padding: {xs:'25px 0 0 0' , md:'30px 40px 20px 40px'},
        
        }}
        flexDirection='column'
      > 
        <Typography variant='h3' sx={{fontWeight:'600' , paddingBottom:'30px' ,  fontSize:{xs:'35px',sm:'40px',md:'45px'} }}>Technical <span className="highlight">Skills</span></Typography>
        <Grid
          container
          sx={{ padding: "20px 10px", margin: "0px 0px" }}
          justifyContent="space-evenly"
          maxWidth='1200px'
        >
          {skills.map((skill) => {
            return (
              <Grid
                item
                sx={{
                  border: 3,
                  height: "110px",
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
