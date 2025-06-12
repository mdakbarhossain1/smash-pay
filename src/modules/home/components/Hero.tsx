'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div
      className='flex w-full flex-col items-center justify-start'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
    >
      <motion.div
        className='flex w-full flex-col items-center gap-8 pt-12 md:gap-16 md:pt-24'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <motion.div
          className='flex w-full max-w-7xl flex-col items-center gap-6 px-4 md:gap-8 md:px-8'
          variants={itemVariants}
        >
          <motion.div
            className='flex w-full max-w-[800px] flex-col items-center gap-6 md:gap-10'
            variants={itemVariants}
          >
            <motion.div className='flex w-full flex-col items-center gap-4 md:gap-6' variants={itemVariants}>
              <Link href={'/card'}>
                <motion.div
                  className='flex items-center gap-3 rounded-2xl border border-[#151820] px-2.5 py-1'
                  style={{
                    background: 'linear-gradient(90deg, rgba(29, 31, 45, 1) 0%, rgba(29, 31, 46, 1) 100%)'
                  }}
                  variants={itemVariants}
                >
                  <div className='rounded-2xl bg-[#0e131b] px-2.5 py-0.5'>
                    <span
                      className='text-sm font-medium'
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      New
                    </span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span
                      className='text-sm font-medium'
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Multi-currency account
                    </span>
                    <img
                      className='relative h-4 w-4 shrink-0 overflow-visible'
                      src='/home/arrow-right0.svg'
                    />
                  </div>
                </motion.div>
              </Link>

              <motion.h1
                className='text-center text-3xl font-medium md:text-5xl lg:text-6xl'
                style={{
                  background:
                    'linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                variants={itemVariants}
              >
                Cross-border payment made easy.
              </motion.h1>

              <motion.p
                className='max-w-[90%] text-center text-lg text-gray-300 md:max-w-[672px] md:text-xl'
                variants={itemVariants}
              >
                We help individuals and businesses to securely send and receive money globally, without the
                bank fees.
              </motion.p>
            </motion.div>

            <motion.div className='flex flex-col items-center gap-4 sm:flex-row' variants={itemVariants}>
              <motion.button
                className='flex items-center gap-2.5 rounded-[64px] border border-[#3c414c] px-6 py-4 md:px-8'
                style={{
                  background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className='text-lg font-semibold'
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Create account
                </span>
                <img
                  className='relative h-[22px] w-[22px] shrink-0 overflow-visible'
                  src='/home/arrow-right2.svg'
                />
              </motion.button>

              <Link href='/contact-us' passHref>
                <motion.a
                  className='flex items-center gap-2.5 rounded-[64px] border border-[#3c414c] px-6 py-4 text-lg font-semibold text-white md:px-8'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact sales
                  <img
                    className='relative h-[22px] w-[22px] shrink-0 overflow-visible'
                    src='/home/arrow-right2.svg'
                    alt='Arrow right'
                  />
                </motion.a>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Device Mockups */}
        <motion.div
          className='relative h-[300px] w-full max-w-7xl px-4 md:h-[530px] md:px-8'
          variants={itemVariants}
        >
          {isMobile ? (
            <div className='relative flex h-full w-full items-center justify-center'>
              <div className='absolute bottom-[35.44px] left-0 z-10'>
                <div className='relative h-[172.56px] w-[272px]'>
                  <Image src='/home/Card.png' alt='Mobile App Preview' layout='fill' objectFit='contain' />
                </div>
              </div>

              <div className='absolute top-0 right-0 h-full w-[30%]'>
                <div className='relative h-full w-full'>
                  <Image
                    src='/home/iPhone-14-Pro.png'
                    alt='Mobile App Preview'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className='relative h-full w-full'>
              <div className='absolute bottom-[35.44px] left-0 z-10'>
                <div className='relative h-[172.56px] w-[272px]'>
                  <Image src='/home/Card.png' alt='Mobile App Preview' layout='fill' objectFit='contain' />
                </div>
              </div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='relative h-[120.91%] w-[78.95%]'>
                  <Image
                    src='/home/MacBook-Pro-16.png'
                    alt='Desktop App Preview'
                    layout='fill'
                    objectFit='contain'
                    className='scale-110 transform'
                  />
                </div>
              </div>
              <div className='absolute top-0 right-10 h-[115.68%] w-[20.09%]'>
                <div className='relative h-full w-full'>
                  <Image
                    src='/home/iPhone-14-Pro.png'
                    alt='Mobile App Preview'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
