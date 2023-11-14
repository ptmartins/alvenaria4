import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
// import required modules
import { Autoplay } from 'swiper/modules';

const Carousel = ({ images }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      navigation={true}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} alt={`Slide ${index + 1}`} fill={true}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;