import { Grid, Box, Typography } from "@mui/material";
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
            <Box
              sx={{
                position: 'absolute',
                top: '50px',
                left: '5px',
                display: 'flex',
                flexDirection: 'row',
                padding: '14px',
              }}
            >
              <img
                alt={artist.name}
                src={artist.profileImage}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  pl: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: '600', color: 'white', fontSize: '16px' }}
                  >
                    {artist.name}
                  </Typography>
                  <Typography variant="subtitle2">
                    <span
                      style={{
                        fontWeight: '600',
                        color: 'white',
                        fontSize: '12px',
                      }}
                    >
                      {artist.username}
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
    </div>
  );
}

export default Sidebar;
