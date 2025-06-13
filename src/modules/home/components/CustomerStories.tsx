'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const CustomerStories = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const stories = [
    {
      id: 1,
      company: 'Uber',
      description: 'optimizes the driver experience using SmashPay as their main payment.',
      bgColor: 'bg-lime-900',
      image: '/home/cus-1.png',
      logo: '/group13.svg'
    },
    {
      id: 2,
      company: 'WeBoth',
      description: 'sees an 8% increase in authorization rates with SmashPay.',
      bgColor: 'bg-green-900',
      image: '/home/cus-2.png',
      logo: '/logo-20.svg'
    },
    {
      id: 3,
      company: 'Asana',
      description: 'choose SmashPay to power paid subscriptions globally.',
      bgColor: 'bg-lime-200',
      image: '/home/cus-1.png',
      logo: '/asana-logo-10.svg'
    },
    {
      id: 4,
      company: 'Asana',
      description: 'choose SmashPay to power paid subscriptions globally.',
      bgColor: 'bg-lime-200',
      image: '/home/cus-2.png',
      logo: '/asana-logo-10.svg'
    }
  ];

  return (
    <section className='bg-clr-14 relative flex w-full flex-col items-center justify-start gap-16 overflow-hidden px-4 pt-32 pb-16 md:px-8'>
      <div className='flex w-full max-w-7xl flex-col'>
        {/* Header with navigation */}
        <div className='mb-12 flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-center'>
          <div className='flex max-w-2xl flex-col gap-6'>
            <div className='flex w-[145px] flex-col items-center gap-0 md:items-start'>
              <h3 className='w-[145px] text-lg font-medium tracking-tight text-white'>Customer stories</h3>
              <div className='border-gradient mt-[-3px] h-0 w-full border-t-[3px] border-r-0 border-b-0 border-l-0 border-solid' />
            </div>

            <motion.h2
              className='gradient-text text-4xl leading-tight font-medium tracking-tighter text-transparent md:text-5xl lg:text-6xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Customer success is <br /> our success
            </motion.h2>
          </div>

          {/* Slider controls */}
          <div className='flex flex-row items-center gap-3'>
            <div className='text-lg font-normal tracking-tight text-white'>
              {activeIndex + 1}/{stories.length}
            </div>
            <div className='custom-prev flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-[#3c414c] p-4 transition-colors hover:bg-gray-800'>
              <Image
                src='/home/arrow-left0.svg'
                className='relative h-8 w-8 shrink-0 overflow-visible'
                alt='Previous'
                width={32}
                height={32}
              />
            </div>
            <div className='custom-next flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] p-4 transition-opacity hover:opacity-90'>
              <Image src='/home/arrow-right8.svg' alt='Next' width={32} height={32} />
            </div>
          </div>
        </div>

        {/* Swiper slider */}
        <div className='relative w-full'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next'
            }}
            // pagination={{
            //   clickable: true,
            //   el: '.custom-pagination',
            //   type: 'bullets'
            // }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              setActiveIndex(swiper.activeIndex);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            className='!pb-12'
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <motion.div
                  className='flex h-full flex-col gap-8 overflow-hidden rounded-3xl pb-10'
                  style={{
                    background: 'linear-gradient(90deg, rgba(29, 31, 45, 1) 0%, rgba(29, 31, 46, 1) 100%)'
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Image container with decorative elements */}
                  <div className={`${story.bgColor} relative h-80 w-full overflow-hidden`}>
                    {/* Main image */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='relative h-[80%] w-[60%]'>
                        <Image
                          src={story.image}
                          alt={`${story.company} customer`}
                          fill
                          className='object-contain'
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='flex flex-col gap-8 px-10'>
                    <p className='text-2xl leading-8 font-normal tracking-tight text-white'>
                      <span className='font-semibold'>{story.company}</span> {story.description}
                    </p>
                    <motion.button
                      className='flex w-fit flex-row items-center justify-center gap-2.5 rounded-[48px] border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-6 py-2.5 transition-opacity hover:opacity-90'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className='text-md font-semibold tracking-tight text-white'>Read story</span>
                      <img
                        className='relative h-[18px] w-[18px] shrink-0 overflow-visible'
                        src='/home/arrow-right2.svg'
                      />
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className='custom-pagination !relative mt-6 flex justify-center gap-2' />
        </div>
      </div>

      <style jsx>{`
        .border-gradient {
          border-image: linear-gradient(
            112.59deg,
            rgba(55, 66, 93, 1) 0%,
            rgba(29, 33, 41, 1) 50.06%,
            rgba(41, 40, 60, 1) 100%
          );
          border-image-slice: 1;
        }

        :global(.swiper-pagination-bullet) {
          background: #3c414c;
          opacity: 1;
          width: 12px;
          height: 12px;
        }

        :global(.swiper-pagination-bullet-active) {
          background: white;
        }
      `}</style>
    </section>
  );
};

export default CustomerStories;
