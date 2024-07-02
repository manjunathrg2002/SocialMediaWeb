import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box, Divider, Paper, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Rating from "@mui/material/Rating";

const AdsCard = () => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const maxCharacters = 140;

  const text =
    "Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, clan affiliation, patronage, parentage, adoption, and even physical characteristics like red hair. Many of the modern surnames in the dictionary can be traced back to Britain and Ireland.";

  const truncatedText = descriptionExpanded
    ? text
    : text.slice(0, maxCharacters);
  const [value, setValue] = React.useState(5);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: "620px",
            height: "600px",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ p: 1, display: "flex", flexDirection: "row" }}>
            <Box sx={{ ml: "10px" }}>
              <img
                alt="demo"
                src="Gmailimg.png"
                style={{ width: "48px", height: "48px", padding: "14px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                  Lara Leones
                </Typography>
                <Typography variant="subtitle2">
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#8D8D8D",
                      paddingRight: "20px",
                    }}
                  >
                    @thewallart
                  </span>
                </Typography>
              </Box>
              <MoreVertIcon sx={{ ml: "380px", fontSize: "30px" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pl: "30px",
              pr: "30px",
              pb: "30px",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", opacity: "1", fontWeight: "550" }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              <span style={{ color: "#FF5E8A" }}> Read More</span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              alt="demo"
              src="UploadImg.png"
              style={{ width: "560px", height: "306px" }}
            />
            <FavoriteBorderIcon
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                fontSize: "30px",
                color: "white",
                mr: "55px",
                mt: "23px",
              }}
            />
          </Box>
          <Divider sx={{ pb: "30px" }}></Divider>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 3,
              px: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                }}
              >
                <FavoriteBorderIcon sx={{ fontSize: "30px", ml: "30px" }} />
                <Typography
                  variant="body2"
                  sx={{ fontSize: "20px", fontWeight: "550", ml: 1 }}
                >
                  9.8k
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", pl: 2 }}>
                <MapsUgcOutlinedIcon />

                <Typography
                  variant="body2"
                  sx={{ fontSize: "20px", fontWeight: "550", ml: 1 }}
                >
                  8.6k
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", pl: 2 }}>
                <ReplyOutlinedIcon />

                <Typography
                  variant="body2"
                  sx={{ fontSize: "20px", fontWeight: "550", ml: 1 }}
                >
                  7.2k
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            width: "620px",
            height: "600px",
            borderRadius: "10px",
            mt: "30px",
          }}
        >
          <Box sx={{ p: 1, display: "flex", flexDirection: "row" }}>
            <Box sx={{ ml: "10px" }}>
              <img
                alt="demo"
                src="Gmailimg2.png"
                style={{ width: "48px", height: "48px", padding: "14px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                  Thomas J.
                </Typography>
                <Typography variant="subtitle2">
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#8D8D8D",
                      paddingRight: "20px",
                    }}
                  >
                    @thecustomcreater
                  </span>
                </Typography>
              </Box>
              <MoreVertIcon sx={{ ml: "320px", fontSize: "30px" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pl: "30px",
              pr: "30px",
              pb: "30px",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", opacity: "1", fontWeight: "550" }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              <span style={{ color: "#FF5E8A" }}> Read More</span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              alt="demo"
              src="UploadImg2.png"
              style={{ width: "560px", height: "306px" }}
            />
            <FavoriteBorderIcon
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                fontSize: "30px",
                color: "white",
                mr: "55px",
                mt: "23px",
              }}
            />
          </Box>
          <Divider sx={{ pb: "30px" }}></Divider>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 3,
              px: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                }}
              >
                <FavoriteBorderIcon sx={{ fontSize: "30px", ml: "30px" }} />
                <Typography
                  variant="body2"
                  sx={{ fontSize: "20px", fontWeight: "550", ml: 1 }}
                >
                  9.8k
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", pl: 2 }}>
                <MapsUgcOutlinedIcon />

                <Typography
                  variant="body2"
                  sx={{ fontSize: "20px", fontWeight: "550", ml: 1 }}
                >
                  8.6k
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", pl: 2 }}>
                <ReplyOutlinedIcon />

                <Typography
                  variant="body2"
                  sx={{ fontSize: "20px", fontWeight: "550", ml: 1 }}
                >
                  7.2k
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Box
          sx={{
            width: "620px",
            mt: "30px",
            backgroundColor: "#F5F5F5",
          }}
        >
          <Box>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  alt="demo"
                  src="SlideImg.png"
                  style={{ width: "252px", height: "180px" }}
                />
                <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                  Modern Wall Decor Framed Painting
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "24px", fontWeight: "600", mr: "30px" }}
                  >
                    $199.99
                  </Typography>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  alt="demo"
                  src="SlideImg2.png"
                  style={{ width: "252px", height: "180px" }}
                />
                <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                  Modern Wall Decor Framed Painting
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "24px", fontWeight: "600", mr: "30px" }}
                  >
                    $199.99
                  </Typography>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  alt="demo"
                  src="UploadImg.png"
                  style={{ width: "252px", height: "180px" }}
                />
                <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                  Modern Wall Decor Framed Painting
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "24px", fontWeight: "600", mr: "30px" }}
                  >
                    $199.99
                  </Typography>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  alt="demo"
                  src="UploadImg2.png"
                  style={{ width: "252px", height: "180px" }}
                />
                <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                  Modern Wall Decor Framed Painting
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "24px", fontWeight: "600", mr: "30px" }}
                  >
                    $199.99
                  </Typography>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdsCard;
