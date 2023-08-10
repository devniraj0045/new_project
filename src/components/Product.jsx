
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Me from '../image/shiva.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




// import required modules
import { Pagination, Navigation } from "swiper";

export default function Product() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        rewind={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide img'>
          <img src={Me} alt="me"/>
          <h5 className="text__abc"> EAT MY DICK BITCH ASS</h5>
          
        </SwiperSlide>
        <SwiperSlide><iframe width="25%" height="50" src="https://www.youtube.com/embed/EdftT8GMU1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper>

      
    </>
  );
}
