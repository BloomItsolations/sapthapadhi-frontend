import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { v4 as uuidv } from "uuid";
import { Box } from "@mui/material";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Banners({ swiperData }) {
  return (
    <Box
      sx={{
        height: { xs: "200px", md: "500px" },
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <Box sx={{ display: "flex", width: "100%", overflow: "hidden" }}>
          {swiperData &&
            swiperData?.map((el) => (
              <SwiperSlide key={uuidv()}>
                <Box
                  component="img"
                  draggable="false"
                  src={`${el}`}
                  alt="banner"
                />
              </SwiperSlide>
            ))}
        </Box>
      </Swiper>
    </Box>
  );
}

export default Banners;
