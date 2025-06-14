'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const slides = [
  {
    title: 'The fast and secure way to send money.',
    description: `Join <strong>30+ million</strong> customers saving on global transfers with SmashPay. Send international transfers to <strong>150+ countries in 35+ currencies</strong> today!`,
    image: '/personal/hero-calc.svg'
  },
  {
    title: 'Send money with zero hidden fees.',
    description: `Seamlessly process payments locally and globally using cards and 1000+ alternative payment methods, leveraging a comprehensive payment infrastructure to ensure safe, fast, and hassle-free expansion worldwide.`,
    image: '/paymentProcessing/send-money.png'
  },
  {
    title: 'Trusted by millions worldwide.',
    description: `<strong>SmashPay</strong> provides safe and fast payments across the globe.`,
    image: '/paymentProcessing/trusted.svg'
  }
];

const fadeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const ProcessingHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='bg-gradient relative flex w-full flex-col items-center justify-center gap-16 pt-24 pb-32'>
      <div className='relative w-full max-w-7xl px-8'>
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect='fade'
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='flex w-full flex-col gap-10 lg:flex-row'>
                {/* Left Side Text */}
                <div className='flex flex-1 flex-col gap-10'>
                  <AnimatePresence mode='wait'>
                    {activeIndex === index && (
                      <motion.div
                        key={index + '-text'}
                        variants={fadeVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{ duration: 0.6 }}
                        className='flex flex-col gap-6'
                      >
                        <div className='flex items-center gap-4'>
                          <div className='relative h-10 w-10'>
                            <Image
                              src='/personal/hero-icon-personal.png'
                              alt='Logo'
                              layout='fill'
                              className='object-contain'
                            />
                          </div>
                          <div>
                            <p className='text-lg font-medium tracking-[-0.25px] text-white'>Personal</p>
                            <div
                              className='mt-[-3px] h-0 w-[74px] border-t-[3px] border-transparent'
                              style={{
                                borderImage:
                                  'linear-gradient(112.59deg, #37425D 0%, #1D2129 50.06%, #29283C 100%) 1'
                              }}
                            ></div>
                          </div>
                        </div>
                        <h1 className='gradient-text text-4xl font-bold tracking-[-2.5px] text-transparent sm:text-5xl md:text-6xl lg:text-7xl'>
                          {slide.title}
                        </h1>
                        <p
                          className='text-xl leading-7 text-white/80'
                          dangerouslySetInnerHTML={{ __html: slide.description }}
                        />
                        <div className='flex flex-col gap-4 sm:flex-row'>
                          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Image
                              src={`/personal/Rating.png`}
                              alt='Rating'
                              width={199}
                              height={60}
                              className='object-contain'
                            />
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Image
                              src={`/personal/Secure.png`}
                              alt='Secure'
                              width={199}
                              height={60}
                              className='object-contain'
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right Side Image */}
                <div className='flex flex-1 items-center justify-center'>
                  <AnimatePresence mode='wait'>
                    {activeIndex === index && (
                      <motion.div
                        key={index + '-image'}
                        variants={fadeVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={slide.image}
                          alt='Hero Image'
                          width={512}
                          height={540}
                          className='object-contain'
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProcessingHero;
