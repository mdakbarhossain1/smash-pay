import React from 'react';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface InfiniteSliderProps {
  images: string[];
}

const HeroSlider: React.FC<InfiniteSliderProps> = ({ images }) => {
  return (
    <div className='h-80 w-80 md:h-[518px] md:w-[518px]'>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        navigation={false}
        className='h-full'
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className='flex h-full w-full items-center justify-center rounded-3xl bg-gray-100'>
              <img src={src} alt={`slide-${idx}`} className='h-full w-full object-cover' draggable={false} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
