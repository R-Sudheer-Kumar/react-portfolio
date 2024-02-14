import { Stack, Typography } from "@mui/material";
import React from "react";

function EducationCard({ education }) {
  return (
    <Stack
      sx={{
        backgroundColor: "rgb(226, 223, 210)",
        color: "black",
        borderRadius: "10px",
        margin: "20px 20px",
        maxWidth: "600px",
      }}
    >
      <caption>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "blue", padding: "5px" }}
        >
          {education.degree}
        </Typography>
      </caption>
      <hr size={5} color="red" />
      <table>
        <tr>
          <td>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Year
            </Typography>
          </td>
          <td>:</td>
          <td>
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              {education.year}
            </Typography>
          </td>
        </tr>
        <tr>
          <td>
            <Typography variant="h6" sx={{ fontWeight: "bold",fontSize: "18px" }}>
              Qualification
            </Typography>
          </td>
          <td>:</td>
          <td>
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              {education.Qualification}
            </Typography>
          </td>
        </tr>
        <tr>
          <td>
            <Typography variant="h6" sx={{ fontWeight: "bold",fontSize: "18px" }}>
              College
            </Typography>
          </td>
          <td>:</td>
          <td>
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              {education.College}
            </Typography>
          </td>
        </tr>
        <tr>
          <td>
            <Typography variant="h6" sx={{ fontWeight: "bold",fontSize: "18px" }}>
              CGPA
            </Typography>
          </td>
          <td>:</td>
          <td>
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              {education.CGPA}
            </Typography>
          </td>
        </tr>
      </table>
    </Stack>
  );
}

export default EducationCard;
