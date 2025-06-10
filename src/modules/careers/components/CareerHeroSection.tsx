'use client';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const CareerHeroSection = () => {
  return (
    <section
      className='relative flex h-[640px] w-full items-center justify-center px-8'
      style={{
        backgroundImage: 'url(/careers/header-section.png)',
        backgroundSize: 'center',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0c1118' // fallback blend
      }}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='relative z-10 flex max-w-[800px] flex-col items-center justify-center gap-10 text-center'
      >
        <div className='flex flex-col items-center gap-4'>
          {/* Title with underline */}
          <div className='relative flex flex-col items-center'>
            <h2 className='font-sans text-lg font-medium text-white'>Careers at SmashPay</h2>
            <div
              className='mt-1 h-0.5 w-40'
              style={{
                borderImage:
                  'linear-gradient(112.59deg, rgba(55, 66, 93, 1) 0%, rgba(29, 33, 41, 1) 50%, rgba(41, 40, 60, 1) 100%) 1',
                borderTopWidth: '3px',
                borderStyle: 'solid'
              }}
            />
          </div>

          {/* Main heading */}
          <h1
            className='text-4xl leading-tight font-bold md:text-5xl lg:text-6xl xl:text-7xl'
            style={{
              background: 'linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.025em'
            }}
          >
            Transform the Future of Payment
          </h1>
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex flex-col items-center'
        >
          <button
            className='flex items-center gap-2.5 rounded-full border border-gray-700 px-8 py-4'
            style={{
              background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
            }}
          >
            <span className='font-sans text-lg font-semibold text-white'>See opportunities</span>
            <FiArrowDown className='text-xl text-white' />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CareerHeroSection;
