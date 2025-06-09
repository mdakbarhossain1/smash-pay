'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AppRatingsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 100
      }
    },
    hover: { scale: 1.03 },
    tap: { scale: 0.98 }
  };

  return (
    <section
      className='relative flex w-full flex-col items-center justify-start gap-16 overflow-hidden pt-5 pb-4'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)',
        transform: 'scale(1, 1)',
        transformOrigin: '0 0'
      }}
    >
      <div
        className='relative mx-auto flex w-full max-w-[1280px] flex-col items-start justify-start gap-24 rounded-[20px] px-8'
        style={{
          // transform: 'rotate(180deg) scale(1, 1)',
          transform: 'scale(1, 1)',
          transformOrigin: '0 0'
        }}
      >
        <motion.div
          className='flex w-full flex-col items-center justify-start gap-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            className='flex w-full max-w-[760px] flex-col items-start justify-start gap-6'
            variants={itemVariants}
          >
            <h2 className='w-full bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-center text-3xl leading-tight font-medium tracking-[-1.5px] text-transparent md:text-4xl'>
              Loved by more than 5 millions users
            </h2>
            <p className='w-full text-center text-xl leading-relaxed font-normal tracking-[-0.5px] text-gray-300'>
              5 millions+ reviews across all platforms
            </p>
          </motion.div>

          <motion.div
            className='flex w-full flex-col items-center justify-center gap-8 md:flex-row'
            variants={containerVariants}
          >
            {/* App Store Button */}
            <motion.div
              className='border-stroke-2 border-opacity-20 relative w-full max-w-[280px] overflow-hidden rounded-[60px] border p-3.5'
              style={{
                background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
              }}
              variants={buttonVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <div className='flex w-full flex-row items-center justify-between'>
                <div className='flex flex-row items-center justify-start gap-2'>
                  <Image
                    src='/multicurrency/app-store-10.svg'
                    alt='App Store logo'
                    width={30}
                    height={30}
                    className='h-[30px] w-[30px] shrink-0'
                  />
                  <span className='text-left text-xl font-medium tracking-[-0.5px] text-white'>
                    App Store
                  </span>
                </div>
                <div className='bg-opacity-10 bg-gradient-2 flex flex-row items-center justify-start gap-1 rounded-[40px] px-3 py-1'>
                  <Image
                    src='/multicurrency/star0.svg'
                    alt='Star icon'
                    width={16}
                    height={16}
                    className='h-4 w-4 shrink-0'
                  />
                  <span className='text-left text-base font-medium tracking-[-0.25px] text-white'>4.8</span>
                </div>
              </div>
            </motion.div>

            {/* Google Play Button */}
            <motion.div
              className='border-stroke-2 border-opacity-20 relative w-full max-w-[280px] overflow-hidden rounded-[60px] border p-3.5'
              style={{
                background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
              }}
              variants={buttonVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <div className='flex w-full flex-row items-center justify-between'>
                <div className='flex flex-row items-center justify-start gap-2'>
                  <Image
                    src='/multicurrency/google-play0.svg'
                    alt='Google Play logo'
                    width={30}
                    height={30}
                    className='h-[30px] w-[30px] shrink-0'
                  />
                  <span className='text-left text-xl font-medium tracking-[-0.5px] text-white'>
                    Google Play
                  </span>
                </div>
                <div className='bg-opacity-10 bg-gradient-2 flex flex-row items-center justify-start gap-1 rounded-[40px] px-3 py-1'>
                  <Image
                    src='/multicurrency/star1.svg'
                    alt='Star icon'
                    width={16}
                    height={16}
                    className='h-4 w-4 shrink-0'
                  />
                  <span className='text-left text-base font-medium tracking-[-0.25px] text-white'>4.7</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppRatingsSection;
