import { Button, Stack, Typography } from '@mui/material';
import React from 'react'
import PdfShow from './PdfShow';
import { FaDownload } from "react-icons/fa";


function Resume() {
    
  return (
    
    <>
        <Stack
        width='100%'
        justifyContent='center'
        sx={{
            display:'flex',
            alignItems:'center',
            padding:'30px 0'
        }}
        >
           
        
        <a
        href="SudheerResume.pdf"
        target='_blank'
        download='SudheerResume.pdf'
        >
            

        <Button endIcon={<FaDownload />} variant='contained' color='success'><Typography>Download</Typography></Button>
        </a>
            </Stack>
        <PdfShow />
    </>
  )
}

export default Resume;