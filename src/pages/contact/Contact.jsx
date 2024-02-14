import React from 'react'
import ContactDetails from '../../components/contactComp/ContactDetails';
import ContactForm from '../../components/contactComp/ContactForm';
import { Grid } from '@mui/material';

function Contact() {
  return (
    <>
        <Grid container justifyContent='space-evenly' sx={{margin:'50px 0px'}} >
          <Grid item sx={{ marginTop:{xs:'0' , md:'30px'}  , marginBottom:{xs:'60px' , md:'10px'}}}> 
            <ContactDetails />
          </Grid>
          <Grid item>
            <ContactForm />
          </Grid>
        </Grid>
    </>
  )
}

export default Contact;