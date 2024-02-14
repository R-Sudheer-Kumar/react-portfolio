import React, { useCallback, useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import db from '../../firebase.utils';
import { collection, onSnapshot,query,where } from 'firebase/firestore';
import { Grid } from '@mui/material';

function ProjectList({status}) {
  const [data , setData] = useState([]);
  const  fetchData = useCallback( () => { 
    const ref = collection(db , "projects");
    const q = query(ref , where('status', 'in' , status) );
    onSnapshot(q , (snapshot) => { 
      setData(snapshot.docs.map((doc) => ({ 
       id:doc.id,
        ...doc.data()
        
      }))
      )
    })
  },[status] )

  useEffect( () => {
    fetchData();

  },[fetchData])
  return (
    <>
    <Grid container justifyContent='space-evenly' sx={{padding:{xs:'0 10px' , md:'0 80px'}}}>
      {
        data.map((doc) => {
          return(
            <Grid item key={doc.id}>
            <ProjectCard key={doc.id} data={doc} />
            </Grid> 
                    )
        })
      }
      </Grid>
    </>
  )
}

export default ProjectList;