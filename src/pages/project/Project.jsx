import { Typography } from '@mui/material';
import React from 'react'
import ProjectList from './ProjectList';

function Project() {
  return (
    <>
        <Typography variant='h3' textAlign='center' sx={{color:'orange' , fontWeight:'600' , fontSize:'35px' , padding:'20px 0'}}>My Projects</Typography>
        <ProjectList status={['important' , 'normal']} /> 
    </>
  )
}

export default Project;