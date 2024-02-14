import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from "@mui/material";
import { GrShare } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:{xs:'80%',lg:'1100px'},
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  height:'600px',
  overflowY:'scroll'
};

function ProjectView({ open, onClose, data }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              textAlign="center"
              sx={{
                fontWeight: "600",
                fontSize: "30px",
                color: "blue",
                padding: "0 0 10px 0",
              }}
            >
              {data.title}
            </Typography>
            <img src={data.image} alt='title' width='100%' />
            <Stack paddingTop="10px" spacing={0.5}>
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                Description
              </Typography>
              <Typography
                id="transition-modal-description"
                variant="h6"
                sx={{ mt: 2, paddingLeft: "30px", fontSize: "18px" }}
              >
                {data.description}
              </Typography>
            </Stack>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Technologies {" "}
            </Typography>
            <Stack>
              <Grid
                container
                paddingLeft='30px'
                spacing={1}
                sx={{ paddingTop: "10px", paddingBottom: "5px" }}
              >
                {data.technologies.map((skill) => {
                  return (
                    <Grid item>
                      <Typography
                        border={2}
                        borderRadius={6}
                        variant='h2'
                        sx={{
                          padding: "5px 20px",
                          backgroundColor: "blue",
                          color: "white",
                          borderColor: "white",
                          fontSize: "18px",
                        }}
                      > 
                        {skill}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
   
            <Stack direction="row" fullWidth spacing={4} paddingTop='10px'>
              <Button fullWidth variant="contained" endIcon={<FaGithub />}
              disabled={data.github ? false : true}
              onClick={() => { window.open( data.github )} }
              >
                <Typography variant="h6">code</Typography>
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="success"
                endIcon={<GrShare size="18px" />}
                disabled={data.website ? false : true}
                onClick={() => { window.open( data.website )} }
              >
                <Typography variant="h6">Live</Typography>
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProjectView;
