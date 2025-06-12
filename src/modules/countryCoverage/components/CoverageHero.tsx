'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CountrySearch from './CountrySearch';

const CoverageHero = () => {
  return (
    <section
      className='flex w-full shrink-0 flex-col items-center justify-center gap-16 self-stretch pt-24 pb-32'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
    >
      <div className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-8 px-8 lg:flex-row'>
        <motion.div
          className='relative flex flex-1 flex-col items-start justify-start gap-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='relative flex w-full shrink-0 flex-col items-start justify-start gap-6'>
            <div className='relative flex shrink-0 flex-col items-start justify-start gap-6 self-stretch'>
              <div className='relative flex shrink-0 flex-row items-center justify-start gap-4'>
                <div className='relative h-10 w-10 shrink-0'>
                  <div className='relative h-full w-full'>
                    <Image
                      src='/personal/hero-icon.png'
                      alt='Logo'
                      layout='fill'
                      className='object-contain'
                    />
                  </div>
                </div>
                <div className='relative flex shrink-0 flex-col items-start justify-center gap-0'>
                  <div className='relative h-[23px] w-[150px] shrink-0'>
                    <p className='absolute top-0 left-0 text-left text-lg leading-tight font-medium tracking-[-0.25px] text-white'>
                      Country coverage
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
              <h1 className='relative self-stretch bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-left text-4xl leading-tight font-bold tracking-[-2.5px] text-transparent sm:text-5xl md:text-6xl lg:text-7xl'>
                Check out all the <br /> countries we cover.
              </h1>
            </div>
            <p className='relative self-stretch text-left text-xl leading-7 font-normal tracking-[-0.5px] text-white/80'>
              Send and receives money from 150+ countries worldwide.
            </p>
          </div>
          <CountrySearch />
        </motion.div>

        <Image
          src={`/map.svg`}
          alt='Star'
          width={612}
          height={540}
          className='absolute top-0 right-0 hidden h-full w-[512px] object-contain lg:block'
        />
      </div>
    </section>
  );
};

export default CoverageHero;
