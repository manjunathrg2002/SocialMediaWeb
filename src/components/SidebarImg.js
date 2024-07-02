import { Grid, Box } from "@mui/material";
import React from "react";

const artists = [
    {
      name: 'Thomas Edward',
      username: '@thewildwithyou',
      profileImage: 'SidebarSubImg.png',
      artworkImage: 'SlideImg.png',
    },
    {
      name: 'Chris Doe',
      username: '@thewildwithyou',
      profileImage: 'SidebarSubImg2.png',
      artworkImage: 'UploadImg2.png',
    },
    {
      name: 'Emilie Jones',
      username: '@thewildwithyou',
      profileImage: 'SidebarSubImg3.png',
      artworkImage: 'UploadImg.png',
    },
    {
      name: 'Jessica Williams',
      username: '@thewildwithyou',
      profileImage: 'SidebarSubImg4.png',
      artworkImage: 'SlideImg2.png',
    },
  ];

function Sidebar() {
  return (
    <div>
      <Grid container spacing={2}>
      {artists.map((artist, index) => (
        <Grid item key={index}>
          <Box sx={{ position: 'relative' }}>
            <img
              alt={artist.name}
              src={artist.artworkImage}
              style={{ width: '244px', height: '126px' }}
            />
            
          </Box>
        </Grid>
      ))}
    </Grid>
    </div>
  );
}

export default Sidebar;

