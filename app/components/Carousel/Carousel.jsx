'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Carousel = ({ slides, options }) => {

  const spaceBetween = options.spaceBetween ?? 10,
        slidesPerView = options.slidesPerView ?? 1,
        navigation = options.navigation ?? false,
        pagination = options.pagination ?? false,
        autoplay = options.autoplay ?? false,
        loop = options.loop ?? true,
        breakpoints = options.breakpoints ?? null,
        modules = [];

  if(options.autoplay) {
    modules.push(Autoplay);
  }

  if(options.navigation) {
    modules.push(Navigation);
  }

  if(options.pagination) {
    modules.push(Pagination);
  }

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination}
      loop={loop}
      modules={modules}
      breakpoints={breakpoints}
      autoplay={autoplay}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image src={slide} alt={`Slide ${index + 1}`} fill={true}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;