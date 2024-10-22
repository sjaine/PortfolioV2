import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

import photo1 from '../../../assets/img/instagram/lowfi.svg';
import photo2 from '../../../assets/img/instagram/userfeedback.svg';
import photo3 from '../../../assets/img/instagram/midfi.svg';

const images = [
  photo1,
  photo2,
  photo3
];

const SwiperJS = () => {
    return (
      <div className="swiper-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }} 
          modules={[Navigation, Pagination, Autoplay]} 
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index}`} style={{ width: "100%" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

export default SwiperJS;
