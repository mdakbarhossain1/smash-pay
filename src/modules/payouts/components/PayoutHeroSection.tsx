'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Animation helper
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
});

const PayoutsHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='relative w-full overflow-hidden bg-gradient-to-b from-[#0c1118] to-[#1d1e2d] pt-24 pb-36 text-white'>
      <style>
        {`
          @keyframes custom-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>

      <div className='mx-auto flex max-w-7xl flex-col items-center px-4 md:flex-row md:justify-between'>
        {/* Left Content */}
        <div className='z-10 w-full md:w-1/2'>
          <motion.span
            className='mb-4 block text-sm tracking-widest text-white/70 uppercase'
            {...fadeInUp(0)}
            animate={isLoaded ? fadeInUp(0).animate : {}}
          >
            P A Y O U T S
          </motion.span>

          <motion.h1
            className='mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl'
            {...fadeInUp(0.1)}
            animate={isLoaded ? fadeInUp(0.1).animate : {}}
          >
            Instant Local and Global&nbsp;payouts
          </motion.h1>

          <motion.p
            className='mb-8 max-w-lg text-lg text-white/80 md:text-xl'
            {...fadeInUp(0.2)}
            animate={isLoaded ? fadeInUp(0.2).animate : {}}
          >
            Send funds to anyone, anywhere, in real-time with a single API integration and no operational
            burdens.
          </motion.p>

          <motion.a
            href='#apply-form'
            className='group hover:bg-opacity-90 inline-flex items-center rounded-full bg-white bg-gradient-to-b from-[#151820] to-[#010101] px-6 py-3 font-medium text-white transition'
            {...fadeInUp(0.3)}
            animate={isLoaded ? fadeInUp(0.3).animate : {}}
          >
            <span className='mr-2'>Get in touch</span>
            <div className='relative h-5 w-5'>
              <svg
                className='absolute top-0 left-0 transition-transform duration-300 group-hover:translate-x-1'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M16.2929 17.7071L6.29289 7.70712L7.70711 6.29291L17.7071 16.2929L16.2929 17.7071Z'
                  fill='currentColor'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M14.5858 16L6.29289 7.70712L7.70711 6.29291L16 14.5858V8.00002C16 7.44773 16.4477 7.00001 17 7.00001C17.5523 7.00001 18 7.44773 18 8.00002V17C18 17.5523 17.5523 18 17 18H8C7.44771 18 7 17.5523 7 17C7 16.4477 7.44771 16 8 16H14.5858Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          </motion.a>
        </div>

        {/* Right Images */}
        <div className='relative hidden h-full w-full md:block md:w-1/2'>
          {/* Main center widget */}
          <motion.div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[custom-float_5s_ease-in-out_infinite]'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src='https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-hero/widget-center.svg'
              alt='Center Widget'
              width={800}
              height={800}
              priority
            />
          </motion.div>

          {/* Reordered: widget-week moved to bottom */}
          <motion.div
            className='absolute top-5 right-7 animate-[custom-float_5s_ease-in-out_infinite]'
            initial={{ opacity: 0, x: 20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Image
              src='https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-hero/widget-card.svg'
              alt='Card Widget'
              width={180}
              height={120}
            />
          </motion.div>
          <motion.div
            className='absolute bottom-1/5 left-1/1 animate-[custom-float_5s_ease-in-out_infinite]'
            {...fadeInUp(0.5)}
            animate={isLoaded ? fadeInUp(0.5).animate : {}}
          >
            <Image
              src='https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-hero/widget-week.svg'
              alt='Week Widget'
              width={200}
              height={150}
            />
          </motion.div>

          <motion.div
            className='absolute right-5 bottom-0 animate-[custom-float_5s_ease-in-out_infinite]'
            {...fadeInUp(0.6)}
            animate={isLoaded ? fadeInUp(0.6).animate : {}}
          >
            <Image
              src='https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-hero/widget-available.svg'
              alt='Available Widget'
              width={200}
              height={150}
            />
          </motion.div>

          <motion.div
            className='absolute top-1/8 left-3 animate-[custom-float_5s_ease-in-out_infinite]'
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src='https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-hero/widget-report.svg'
              alt='Report Widget'
              width={180}
              height={120}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Shape */}
      <svg
        className='absolute bottom-0 left-0 z-10 h-24 w-full'
        preserveAspectRatio='none'
        viewBox='0 0 1400 104'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 73.751L712.648 0L1400 21.5902V104H0L0 73.751Z' fill='white' />
      </svg>
    </section>
  );
};

export default PayoutsHero;
