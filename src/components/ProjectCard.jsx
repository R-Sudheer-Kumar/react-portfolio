import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ProjectView from "./ProjectView";

function ProjectCard({ data }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card sx={{ width: "345px", height: "420px", margin: "20px" }}>
        <CardMedia
          component="img"
          height="200px"
          image={data.image}
          alt={data.title}
        />
        <CardContent sx={{ height: "170px", overflow: "hidden" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: "25px",
              color: "blue",
              textAlign: "center",
            }}
          >
            {data.name}
          </Typography>
          <Typography variant="body2" color="black">
            {data.small}
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{ paddingTop: "10px", paddingBottom: "5px" }}
          >
            {data.technologies.map((skill) => {
              return (
                <Grid item>
                  <Typography
                    border={2}
                    borderRadius={6}
                    sx={{
                      padding: "1px 20px",
                      backgroundColor: "orange",
                      color: "white",
                      borderColor: "white",
                      fontSize: "16px",
                    }}
                  >
                    {skill}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>

        <CardActions>
          <Button
            size="medium"
            variant="contained"
            sx={{ width: "100%", fontWeight: "600", color: "navyblue" }}
            onClick={() => {
              handleOpen();
            }}
          >
            Click to View More
          </Button>
          <ProjectView key={data.id} open={open} onClose={() => handleClose()} data={data} />
        </CardActions>
      </Card>
    </>
  );
}

export default ProjectCard;
