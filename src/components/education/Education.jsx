import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import educationimg from '../../assets/education-img.png';
import EducationCard from './EducationCard';

function Education() {
  const educationDetails = [
    {
      degree:'UnderGraduation',
      year:'2020-2024',
      Qualification:'B.Tech CSE-DS',
      College : 'RISE Krishna Sai Prakasam Group Of Institutions , valluru',      CGPA: '7.85'
    },
    {
      degree:'Intermediate',
      year:'2018-2020',
      Qualification:'MPC',
      College : 'MSR Junior College , chimakurthy',
      CGPA: '9.57'
    },
    {
      degree:'SSC',
      year:'2017-2018',
      Qualification:'SSC',
      College : 'SRi Vignan High School , chimakurthy',
      CGPA: '9.5'
    },
  ]
  return (
    <>
        <Box
        minHeight='1000px'
        flexDirection='column'
        sx={{padding:'30px 0',
      display:'flex' , 
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center'
  }}
        >
        <Typography variant='h4' textAlign='center' sx={{color:'white' , fontWeight:'600' , padding:"15px 0" , fontSize:"38px"}}>Education <span className='highlight'>Qualifications</span> </Typography>
            <Grid container color='white' justifyContent='space-around' maxWidth='1200px' >
                <Grid item> 
                <Stack>
              {
                educationDetails.map((education) => {
                  return(
                    <EducationCard education={education} />
                  )
                })
              }
              </Stack>
                </Grid>
                <Grid item> 
                 <Stack
                 justifyContent='center'
                 sx={{ height:{xs:'450px' , md:'900px'}}}
                 >
                 <img src={educationimg} alt='education avatar' height='400px' width='300px' />
                 </Stack>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default Education;