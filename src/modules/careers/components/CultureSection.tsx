'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CultureSection = () => {
  return (
    <section
      className='relative flex w-full shrink-0 flex-col items-center justify-start overflow-hidden px-5 py-12 sm:px-10 md:px-20 lg:pb-32'
      style={{
        background: 'linear-gradient(90deg, rgba(29, 31, 45, 1) 0%, rgba(29, 31, 46, 1) 100%)'
      }}
    >
      <div className='relative w-full max-w-[1280px] shrink-0 px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex w-full flex-col items-center justify-start gap-16'
        >
          {/* Text Content */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex w-full max-w-[800px] flex-col items-start justify-start gap-6'
          >
            <div className='flex w-full flex-col items-center justify-start gap-6'>
              {/* Culture Heading with Underline */}
              <div className='flex flex-col items-center justify-center gap-0'>
                <div className='relative h-[23px] w-[60px] shrink-0'>
                  <h3 className='absolute top-0 left-[-2px] font-sans text-lg leading-tight font-medium text-white'>
                    Culture
                  </h3>
                </div>
                <div
                  className='h-0 shrink-0 self-stretch border-t-[3px] border-r-0 border-b-0 border-l-0'
                  style={{
                    marginTop: '-3px',
                    borderImage:
                      'linear-gradient(112.59deg, rgba(55, 66, 93, 1) 0%, rgba(29, 33, 41, 1) 50.059449672698975%, rgba(41, 40, 60, 1) 100%) 1'
                  }}
                />
              </div>

              {/* Main Title */}
              <h2 className='w-full text-center text-3xl leading-tight font-medium text-white sm:text-4xl md:text-5xl lg:text-6xl'>
                What it's like to work at SmashPay
              </h2>
            </div>

            {/* Description */}
            <p className='w-full text-center font-sans text-lg leading-relaxed font-normal text-gray-300'>
              Hear from our CEO Reece James, on what it's like to work here and see why this is the best
              opportunity to join the team.
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className='relative h-[280px] w-full shrink-0 overflow-hidden rounded-3xl sm:h-[350px] md:h-[450px] md:w-[800px]'
          >
            {/* Overlay */}
            <div className='absolute inset-0 z-10 bg-black/10' />
            <div
              className='absolute inset-x-0 bottom-0 z-10 h-[116px]'
              style={{
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)'
              }}
            />

            {/* Image */}
            <Image
              src='/careers/culture-video-player.png'
              alt='Play Video'
              fill
              className='object-cover'
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureSection;
