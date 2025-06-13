'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PersonalHeroSection = () => {
  return (
    <section className='bg-gradient relative -z-10 flex w-full shrink-0 flex-col items-center justify-center gap-16 self-stretch pt-24 pb-32'>
      <div className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-8 px-8 lg:flex-row'>
        <motion.div
          className='relative flex flex-1 flex-col items-start justify-start gap-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='relative flex w-full shrink-0 flex-col items-start justify-start gap-6 lg:w-[512px]'>
            <div className='relative flex shrink-0 flex-col items-start justify-start gap-6 self-stretch'>
              <div className='relative flex shrink-0 flex-row items-center justify-start gap-4'>
                <div className='relative h-10 w-10 shrink-0 overflow-hidden'>
                  {/* Replace with your actual logo component */}
                  <div className='relative h-full w-full'>
                    <Image
                      src='/personal/hero-icon-personal.png'
                      alt='Logo'
                      layout='fill'
                      className='object-contain'
                    />
                  </div>
                </div>
                <div className='relative flex shrink-0 flex-col items-start justify-center gap-0'>
                  <div className='relative h-[23px] w-[107px] shrink-0'>
                    <p className='absolute top-0 left-0 text-left text-lg leading-tight font-medium tracking-[-0.25px] text-white'>
                      Personal
                    </p>
                  </div>
                  <div
                    className='relative mt-[-3px] h-0 w-[74px] shrink-0 border-t-[3px] border-transparent'
                    style={{
                      borderImage: 'linear-gradient(112.59deg, #37425D 0%, #1D2129 50.06%, #29283C 100%) 1'
                    }}
                  ></div>
                </div>
              </div>
              <h1 className='gradient-text relative self-stretch text-left text-4xl leading-tight font-bold tracking-[-2.5px] text-transparent sm:text-5xl md:text-6xl lg:text-7xl'>
                The fast and secure way to send money.
              </h1>
            </div>
            <p className='relative self-stretch text-left text-xl leading-7 font-normal tracking-[-0.5px] text-white/80'>
              <span>
                <span>Join </span>
                <span className='font-semibold text-white'>30+ million </span>
                <span>
                  customers saving on global transfers with SmashPay. Send international transfers to{' '}
                </span>
                <span className='font-semibold text-white'>150+ countries in 35+ currencies </span>
                <span>today!</span>
              </span>
            </p>
          </div>
          <div className='relative flex w-full shrink-0 flex-col items-start justify-start gap-4 sm:flex-row'>
            <motion.div
              className='relative flex shrink-0 flex-row items-center justify-center'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className='relative h-full w-full'>
                <Image
                  src={`/personal/Rating.png`}
                  alt='Star'
                  // layout='fill'
                  width={199}
                  height={60}
                  className='object-contain'
                />
              </div>
            </motion.div>
            <motion.div
              className='relative flex shrink-0 flex-row items-center justify-center'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className='relative h-full w-full'>
                <Image
                  src={`/personal/Secure.png`}
                  alt='Star'
                  // layout='fill'
                  width={199}
                  height={60}
                  className='object-contain'
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Image
          src={`/personal/hero-calc.svg`}
          alt='Star'
          // layout='fill'
          width={512}
          height={540}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default PersonalHeroSection;
