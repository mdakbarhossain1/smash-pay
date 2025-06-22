'use client';
import { gradientTextStyle } from '@/lib/utils';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const WeOffer = () => {
  // Animation controls for each section
  const [headingRef, headingInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [personalRef, personalInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [businessRef, businessInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const headingControls = useAnimation();
  const personalControls = useAnimation();
  const businessControls = useAnimation();

  // Animate when in view
  useEffect(() => {
    if (headingInView) {
      headingControls.start('visible');
    }
    if (personalInView) {
      personalControls.start('visible');
    }
    if (businessInView) {
      businessControls.start('visible');
    }
  }, [headingControls, personalControls, businessControls, headingInView, personalInView, businessInView]);

  // Animation variants
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
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className='bg-clr-14 relative flex w-full flex-col items-center justify-start gap-12 pt-16 pb-16 md:gap-16 md:pt-24 md:pb-32'>
      {/* Heading Section */}
      <motion.div
        ref={headingRef}
        initial='hidden'
        animate={headingControls}
        variants={containerVariants}
        className='flex w-full max-w-7xl flex-col items-center justify-start gap-8 px-4 md:gap-12 md:px-8'
      >
        <motion.div
          variants={itemVariants}
          className='flex w-full max-w-[900px] flex-col items-center justify-start gap-4 md:gap-5'
        >
          <motion.h2
            className='gradient-text text-center text-3xl font-medium text-transparent md:text-5xl lg:text-6xl'
            variants={itemVariants}
            style={gradientTextStyle}
          >
            We offer fast and secure money transfers
          </motion.h2>
        </motion.div>
      </motion.div>

      {/* Cards Section */}
      <div className='flex w-full max-w-7xl flex-col items-center justify-start gap-12 px-4 md:gap-24 md:px-8'>
        <motion.div
          className='flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Personal Card */}
          <motion.div
            ref={personalRef}
            initial='hidden'
            animate={personalControls}
            variants={cardVariants}
            className='bg-gradient-4 relative z-50 flex flex-col items-center justify-start gap-8 overflow-hidden rounded-[32px] p-6 md:gap-12 md:p-12 lg:h-[628px] lg:w-[588px]'
          >
            <div className='flex w-full flex-col items-center justify-start gap-6 md:gap-8'>
              <div className='flex w-full flex-col items-center justify-start gap-4'>
                <motion.h3
                  className='gradient-text-2 text-center text-xl font-medium text-transparent md:text-2xl'
                  variants={itemVariants}
                >
                  For Personal
                </motion.h3>
                <motion.p
                  className='max-w-[470px] text-center text-base text-gray-300 md:text-lg'
                  variants={itemVariants}
                >
                  Moving overseas? Paying tax, a mortgage or bills in another country? You can send money to
                  150+ countries worldwide.
                </motion.p>
              </div>
              <Link href={'/personal'} passHref>
                <motion.div variants={itemVariants}>
                  <button
                    className='flex cursor-pointer items-center gap-1.5 rounded-[52px] border border-[#3c414c] px-6 py-3'
                    style={{
                      background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
                    }}
                  >
                    <span className='bg-gradient-to-b from-gray-400 to-white bg-clip-text text-sm font-semibold text-transparent md:text-base'>
                      Personal
                    </span>
                    <img
                      className='relative h-4 w-4 shrink-0 overflow-visible'
                      src='/home/arrow-right0.svg'
                    />
                  </button>
                </motion.div>
              </Link>
            </div>

            {/* Images for Personal Card */}
            <motion.div className='relative mt-4 h-[210px] w-full md:h-[250px]' variants={imageVariants}>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='absolute -top-[50px] h-[410px] w-[280px] md:w-[360px]'>
                  {/* Main phone image */}
                  <div className='absolute inset-0 z-50'>
                    <Image
                      src='/home/offerPhone.png'
                      alt='Mobile App Preview'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>

                  {/* Floating avatars */}
                  <motion.div
                    className='absolute top-[40%] left-[-58px]'
                    initial={{ x: -20, y: -20 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Image src='/home/Group-317.png' alt='User Avatar' width={74} height={74} />
                  </motion.div>

                  <motion.div
                    className='absolute top-[20%] -right-[10%]'
                    initial={{ x: 20, y: -20 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <Image src='/home/Group-318.png' alt='User Avatar' width={74} height={74} />
                  </motion.div>

                  <motion.div
                    className='absolute top-[60%] -right-[12%]'
                    initial={{ x: 20, y: 20 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <Image src='/home/Group-319.png' alt='User Avatar' width={58} height={58} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Business Card */}
          <motion.div
            ref={businessRef}
            initial='hidden'
            animate={businessControls}
            variants={cardVariants}
            className='bg-gradient-4 relative z-50 flex flex-col items-center justify-start gap-8 overflow-hidden rounded-[32px] p-6 md:gap-12 md:p-12 lg:h-[628px] lg:w-[588px]'
          >
            <div className='flex w-full flex-col items-center justify-start gap-6 md:gap-8'>
              <div className='flex w-full flex-col items-center justify-start gap-4'>
                <motion.h3
                  className='gradient-text-2 text-center text-xl font-medium text-transparent md:text-2xl'
                  variants={itemVariants}
                >
                  For Businesses
                </motion.h3>
                <motion.p
                  className='max-w-[470px] text-center text-base text-gray-300 md:text-lg'
                  variants={itemVariants}
                >
                  Receive payments, pay staff, invoices or suppliers. We can seamlessly integrate a solution
                  for your business wherever you want to use it.
                </motion.p>
              </div>
              <Link href={'/business'} passHref>
                <motion.div variants={itemVariants}>
                  <button
                    className='flex cursor-pointer items-center gap-1.5 rounded-[52px] border border-[#3c414c] px-6 py-3'
                    style={{
                      background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
                    }}
                  >
                    <span className='bg-gradient-to-b from-gray-400 to-white bg-clip-text text-sm font-semibold text-transparent md:text-base'>
                      Business
                    </span>
                    <img
                      className='relative h-4 w-4 shrink-0 overflow-visible'
                      src='/home/arrow-right0.svg'
                    />
                  </button>
                </motion.div>
              </Link>
            </div>

            {/* Images for Business Card */}
            <motion.div className='relative mt-4 h-[306px] w-full' variants={imageVariants}>
              {/* Dashboard graphic */}
              <motion.div
                className='absolute -bottom-[10%] left-[10%]'
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 15, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className='relative h-[135px] w-[200px] md:w-[213px]'>
                  <Image
                    // style={globeCardRotate}
                    src='/home/Card.png'
                    alt='Business Dashboard'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </motion.div>

              {/* Payment cards */}
              <motion.div
                className='absolute top-[55%] right-[-10%] md:top-[10%]'
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className='relative h-[173px] w-[200px] md:h-[280px] md:w-[380px]'>
                  <Image src='/home/Globe.png' alt='Payment Cards' layout='fill' objectFit='contain' />
                </div>
              </motion.div>

              {/* Payment notifications */}
              <motion.div
                className='absolute top-0 right-[10%] rounded-xl bg-white p-3 shadow-lg'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className='flex flex-col gap-1'>
                  <span className='text-xs text-gray-600'>London office</span>
                  <span className='text-md font-medium text-green-900'>250,000 GBP</span>
                </div>
              </motion.div>

              <motion.div
                className='absolute top-[5%] left-[10%] rounded-xl bg-white p-3 shadow-lg'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className='flex flex-col gap-1'>
                  <span className='text-xs text-gray-600'>San Francisco office</span>
                  <span className='text-md font-medium text-green-900'>186,000 USD</span>
                </div>
              </motion.div>

              <motion.div
                className='absolute top-[60%] left-[50%] rounded-xl bg-white p-3 shadow-lg'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className='flex flex-col gap-1'>
                  <span className='text-xs text-gray-600'>Jakarta office</span>
                  <span className='text-md font-medium text-green-900'>472,256,500.00 IDR</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WeOffer;
