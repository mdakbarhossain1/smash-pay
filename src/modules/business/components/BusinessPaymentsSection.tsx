'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BusinessPaymentsSection = () => {
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
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      className='relative -z-10 flex w-full flex-col items-center justify-start gap-16 pt-24'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
    >
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-8'>
        <motion.div
          className='flex w-full max-w-[800px] flex-col items-center justify-center gap-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Header with logo and title */}
          <motion.div
            className='flex w-full flex-col items-center justify-center gap-6'
            variants={containerVariants}
          >
            <motion.div
              className='flex w-full flex-col items-center justify-center gap-4'
              variants={itemVariants}
            >
              <div className='flex flex-row items-center justify-center gap-4'>
                <div className='relative h-10 w-10'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Image
                      src='/business/hero-icon.png'
                      alt=''
                      width={40}
                      height={40}
                      className='object-contain'
                    />
                  </div>
                </div>

                {/* Business label with underline */}
                <div className='flex flex-col items-start justify-center'>
                  <div className='relative'>
                    <span className='text-lg leading-tight font-medium tracking-[-0.25px] text-white'>
                      Business
                    </span>
                  </div>
                  <div className='mt-[-3px] h-[3px] w-full bg-gradient-to-r from-[#37425d] via-[#1d2129] to-[#29283c]' />
                </div>
              </div>

              {/* Main title */}
              <motion.h2
                className='bg-gradient-to-b from-[#7b7d81] to-white bg-clip-text text-center text-4xl leading-tight font-medium tracking-[-2.5px] text-transparent md:text-5xl lg:text-6xl'
                variants={itemVariants}
              >
                Global business <br /> payments.
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className='w-full max-w-[672px] text-center text-xl leading-relaxed tracking-[-0.5px] text-gray-300'
              variants={itemVariants}
            >
              Multi-currency accounts, high speed international transfers, borderless cards, expense
              management, and online payments—all in one platform.
            </motion.p>
          </motion.div>

          {/* Buttons and contact info */}
          <motion.div
            className='flex flex-col items-center justify-center gap-6'
            variants={containerVariants}
          >
            <motion.div
              className='flex flex-row flex-wrap items-center justify-center gap-4'
              variants={itemVariants}
            >
              {/* Create Account Button */}
              <button className='flex flex-row items-center justify-center gap-2.5 rounded-full border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 transition-opacity hover:opacity-90'>
                <span className='text-lg leading-tight font-semibold tracking-[-0.25px] text-white'>
                  Create account
                </span>
                <Image
                  src='/home/arrow-right0.svg'
                  alt=''
                  width={22}
                  height={22}
                  className='object-contain'
                />
              </button>

              {/* Contact Sales Button */}
              <button className='flex flex-row items-center justify-center gap-2.5 rounded-full border border-[#3c414c] px-8 py-4 transition-colors hover:bg-gray-800'>
                <span className='text-lg leading-tight font-semibold tracking-[-0.25px] text-white'>
                  Contact sales
                </span>
                <Image
                  src='/home/arrow-right1.svg'
                  alt=''
                  width={22}
                  height={22}
                  className='object-contain'
                />
              </button>
            </motion.div>

            <motion.p
              className='max-w-[672px] text-center text-base leading-6 tracking-[-0.25px] text-gray-300'
              variants={itemVariants}
            >
              Talk to an account specialist to get started,{' '}
              <span className='font-medium text-white'>1-123-456-7890</span>.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-8'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 180 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: '-180px' }}
      >
        <div className='relative h-[400px] w-full overflow-hidden rounded-3xl sm:h-[500px] lg:h-[626px]'>
          <div className='absolute inset-0 bottom-0 left-[-7%] -z-10 h-[43.8%] w-[114%] bg-gray-900' />
          <Image src='/business/image0.png' alt='Business payments platform' fill className='object-cover' />
        </div>
      </motion.div>
    </section>
  );
};

export default BusinessPaymentsSection;
