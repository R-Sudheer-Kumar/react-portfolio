import React from 'react';
import { sudheerImage } from '../../firebase.utils';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import gmail from '../../assets/gmail.png';
import phone from '../../assets/phone.png';
import location from '../../assets/location.png';

function ContactDetails() {
  return (
    <>
    <Box>
        <Avatar src={sudheerImage} sx={{width:'150px' , height:'150px' , marginLeft:'30%' , marginBottom:'30px'}} /> 
        <Stack maxWidth='380px' spacing={2} sx={{paddingLeft:'30px'}}>
            <Stack color='white' direction='row' alignItems='center' spacing={2} width='85%'>
            <img src={phone} alt='phone' className='contactImg' width='50px' style={{backgroundColor:'white' , borderRadius:'50%'}} /> 
            <Typography variant='h5'  sx={{ fontSize:{xs:'20px' , md:'25px'}}}>+91 7780664087</Typography>
            </Stack>
            <Stack color='white' direction='row' alignItems='center' spacing={2} width='85%' > 
            <img className='contactImg' src={gmail} alt='gmail'  /> 
            <Typography variant='h5' sx={{fontSize:{xs:'20px',md:'25px'}}}>rsudheerkumar40@gmail.com</Typography>
            </Stack>
            <Stack color='white' direction='row' alignItems='center' spacing={2} width='85%'> 
            <img src={location} alt='location' className='contactImglocation' width='50px' /> 
            <Typography variant='h5' sx={{ fontSize:{xs:'20px' , md:'22px' }}}>siddhavari Street , chimakurthy 523226 , AP</Typography>
            </Stack>
        </Stack>
    </Box>
    </>
  )
}

export default ContactDetails;