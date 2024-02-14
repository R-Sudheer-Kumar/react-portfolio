import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


function ContactForm() {

 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const params = {
    'from_name':name,
    'from_email':email,
    'to_name':'sudheer kumar',
    'message':message,
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_hb189uq', 'template_25wtrgz', params, 'FCwRlHz451NxDroEx')
    .then((result) => {
        alert("email sent!");
        setName('');
        setEmail('');
        setMessage('');
    }, (error) => {
        alert("error sending email, try again!")
    });
  };

  return (

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 550,
          width:'85%',
          mx: "auto",
          p: 2,
          border: "2px solid  #000000",
          borderRadius: "12px",
          boxShadow: 1,
          backgroundColor:'rgb(255, 255, 255)',
        }}
      >
        <Typography variant="h4" align="center" mb={2} sx={{fontWeight:"600"}}>
          <span className='highlight'>Communicate</span> with Me
        </Typography>
        <form onSubmit={handleSubmit} className='form'>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={6}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#111",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>

  );
}

export default ContactForm;