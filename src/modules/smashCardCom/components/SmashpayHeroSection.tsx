'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SmashpayHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section
      className='relative flex h-screen w-full flex-col items-center justify-start pt-24 pb-32'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
    >
      {/* Background video */}
      <div className='absolute inset-0 z-10 overflow-hidden'>
        <video
          className='absolute inset-0 h-full w-full object-cover'
          autoPlay
          loop
          muted
          playsInline
          poster='/home/videos/Promo-transcode.jpg'
        >
          <source src='/home/videos/Promo-transcode.mp4' type='video/mp4' />
          <source src='/home/videos/Promo-transcode.webm' type='video/webm' />
        </video>
        <div className='absolute inset-0 bg-black/20' />
      </div>

      {/* Main content */}
      <div className='relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-6 md:px-8'>
        <motion.div
          className='flex w-full max-w-[800px] flex-col items-center justify-center gap-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className='flex w-full flex-col items-center gap-6' variants={containerVariants}>
            <motion.div className='flex flex-col items-center gap-4' variants={itemVariants}>
              <div className='flex flex-row items-center gap-4'>
                <Image src='/business/hero-icon.png' alt='' width={40} height={40} />

                <div className='flex flex-col items-start'>
                  <span className='text-lg font-medium tracking-[-0.25px] text-white'>Smashpay Card</span>
                  <div className='mt-[-3px] h-[3px] w-full bg-gradient-to-r from-[#37425d] via-[#1d2129] to-[#29283c]' />
                </div>
              </div>

              <motion.h2
                className='gradient-text text-center text-4xl leading-tight font-medium tracking-[-2.5px] text-transparent md:text-5xl lg:text-6xl'
                variants={itemVariants}
              >
                The most modern <br /> multi-currency card.
              </motion.h2>
            </motion.div>

            <motion.p
              className='w-full max-w-[672px] text-center text-xl leading-relaxed tracking-[-0.5px] text-gray-300'
              variants={itemVariants}
            >
              Get physical & virtual card. Virtual card lives on your account as digital debit card. Simply
              order online now.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div className='flex flex-col items-center gap-6' variants={containerVariants}>
            <motion.div className='flex flex-wrap items-center justify-center gap-4' variants={itemVariants}>
              <Link href='/contact-us'>
                <button className='flex items-center gap-2.5 rounded-full border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 text-white hover:opacity-90'>
                  <span className='text-lg font-semibold tracking-[-0.25px]'>Order your card</span>
                  <Image src='/home/arrow-right0.svg' alt='' width={22} height={22} />
                </button>
              </Link>

              <Link href='/contact-us'>
                <button className='flex items-center gap-2.5 rounded-full border border-[#3c414c] px-8 py-4 text-white hover:bg-gray-800'>
                  <span className='text-lg font-semibold tracking-[-0.25px]'>Contact sales</span>
                  <Image src='/home/arrow-right1.svg' alt='' width={22} height={22} />
                </button>
              </Link>
            </motion.div>

            {/* <motion.p
              className='max-w-[672px] text-center text-base leading-6 tracking-[-0.25px] text-gray-300'
              variants={itemVariants}
            >
              Talk to an account specialist to get started:
              <span className='font-medium text-white'> 1-123-456-7890</span>.
            </motion.p> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmashpayHeroSection;
