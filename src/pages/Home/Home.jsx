import { Box, Button, Grid , Stack, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import homemain from '../../assets/home-main.svg';
import Typed from "typed.js";
import Spaces from './Spaces';
import HomeMe from './HomeMe';
import ProjectList from '../project/ProjectList';
import { Link } from 'react-router-dom';

function Home() {
    const ref = useRef(null);
    
    useEffect(() => {
        const typed = new Typed(ref.current, {
          strings: ["Web Developer", "Data Scientist", "Programmer", "Problem solver" , "React Developer" , "Flask Developer"],
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          loop:true,          
        });
    
        return () => {
          typed.destroy();
        };
      }, []);
  return (
    <>
    <Box
        height='600px'
        color='white'
        justifyContent='center'
        sx={{
            display:'flex',
            alignItems:'center',
            marginBottom:'100px',
            padding:{xs:'0 0 0 10px' , md:'0 0 0 30px' , lg:'0'}
        }}
    >
        <Grid container justifyContent='space-around' width='1300px'>
            <Grid item >
                <Stack direction='column' alignItems='start' justifyContent='space-around' sx={{marginTop:'80px' }} spacing={2}>
                    <Typography sx={{ fontSize:{xs:'30px' , md:'40px'} }}>Hi there !! </Typography>
                    <Typography sx={{ fontSize:{xs:'25px' , md:'40px'} }}>I'm  <span style={{color:'orange' , fontWeight:'bold'}}>R Sudheer Kumar </span> </Typography>
                </Stack>
                <Stack direction='row' sx={{marginTop:'30px' , marginBottom:'30px'}} >
                <Typography sx={{ fontSize:{xs:'25px' , md:'30px'} , fontWeight:'bold' , minHeight:'50px' }} color='orange' ref={ref}>{"  "}</Typography>
                </Stack>
            </Grid>
            <Grid item>
                <img src={homemain} alt='home' className='home-img' />
            </Grid>
        </Grid>
    </Box>
    <Spaces />
    <HomeMe />
    <Spaces />
    <Typography variant='h4' sx={{color:'white' , fontWeight:'600' , textAlign:'center' , padding:'45px 0 20px 0'}}>Some of my <span className='highlight'>projects</span> </Typography>
    <ProjectList status={["important"]} />
    <Button variant='contained' color='success' sx={{margin:'10px' , marginLeft:'45%'}}
        component={Link} to='/projects'
    ><Typography sx={{fontSize:'16px',color:'white' , fontWeight:'600' , textAlign:'center' , padding:'5px'}}> View all projects </Typography></Button> 
    
    </>
  );
}

export default Home;