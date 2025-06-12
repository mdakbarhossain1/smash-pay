'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <div className='bg-bg bg-clr-14 relative flex shrink-0 flex-col items-center justify-start gap-0 self-stretch'>
      {/* Main Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch pt-24'
      >
        <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-8 px-8'>
          <div className='relative flex w-full max-w-[800px] flex-col items-center justify-start gap-10'>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='relative flex shrink-0 flex-col items-center justify-start gap-6 self-stretch'
            >
              <div className='relative flex shrink-0 flex-col items-center justify-start gap-4 self-stretch'>
                <div className='relative flex shrink-0 flex-row items-center justify-start gap-4'>
                  <div className='relative h-10 w-10 shrink-0'>
                    <Image
                      src='/about-us/about-us.png'
                      alt='About Page Icon'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                  <div className='relative flex shrink-0 flex-col items-start justify-center gap-0'>
                    <div className='relative h-[23px] w-[78px] shrink-0'>
                      <div className='absolute top-px left-px text-left text-lg leading-normal font-medium tracking-[-0.25px] text-white'>
                        About us
                      </div>
                    </div>
                    <div
                      className='relative mt-[-3px] h-0 shrink-0 self-stretch border-t-[3px] border-r-0 border-b-0 border-l-0 border-solid'
                      style={{
                        borderImage:
                          'linear-gradient(112.59deg, rgba(55, 66, 93, 1) 0%, rgba(29, 33, 41, 1) 50.059449672698975%, rgba(41, 40, 60, 1) 100%) 1'
                      }}
                    ></div>
                  </div>
                </div>
                <h1
                  className='relative self-stretch text-center text-5xl leading-tight font-medium md:text-7xl'
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-2.5px'
                  }}
                >
                  We've moving money globally since 2019
                </h1>
              </div>
              <p className='w-full max-w-[672px] text-center text-xl leading-normal font-normal tracking-[-0.5px] text-gray-300'>
                Since launched in 2019, SmashPay was growth from an idea that there had to be a better, fair
                way to move money around the world.
              </p>
            </motion.div>
          </div>
        </div>
        <div
          className='absolute bottom-0 left-0 h-[274px] w-full'
          style={{
            background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
          }}
        ></div>
        <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-8 px-8'>
          <div className='relative h-[300px] shrink-0 self-stretch sm:h-[400px] md:h-[500px] lg:h-[626px]'>
            <Image src='/about-us/about-header.png' alt='About Header' layout='fill' objectFit='contain' />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsSection;
