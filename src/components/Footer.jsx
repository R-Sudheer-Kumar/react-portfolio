import { IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Footer() {
    let date = new Date();
  let year = date.getFullYear();
  return (
    <Stack sx={{color:'white',backgroundColor:'rgba(31,30,51,0.9)', paddingTop:'15px'}} textAlign='center' spacing={1} > 
        <Typography variant='b1' width='90%' textAlign='center' style={{margin:'auto'}}>Developed by R.Sudheer Kumar and Copyright ©{year} RSK </Typography>
        <Stack sx={{color:'white' , paddingBottom:'6px'}} direction='row' justifyContent='center' spacing={3} >
            <IconButton color='inherit' size='small' component={Link} to='https://github.com/R-Sudheer-Kumar/'> <GitHubIcon /></IconButton>
            <IconButton color='inherit' size='small' component={Link} to='https://www.linkedin.com/in/rachamadugu-sudheer-kumar/'><LinkedInIcon /> </IconButton>
        </Stack>
    </Stack>
  )
}

export default Footer;