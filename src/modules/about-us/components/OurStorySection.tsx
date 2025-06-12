'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OurStorySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='bg-bg bg-clr-14 relative flex shrink-0 flex-col items-center justify-start gap-32 self-stretch overflow-hidden pt-32 pb-32'
    >
      <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-12 px-8 lg:flex-row lg:gap-24'>
        {/* Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='relative flex flex-1 flex-col items-start justify-start gap-10'
        >
          <div className='relative flex shrink-0 flex-col items-start justify-start gap-8 self-stretch'>
            <h2
              className='relative self-stretch text-left text-4xl leading-tight font-medium md:text-5xl lg:text-6xl'
              style={{
                background: 'linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-2px'
              }}
            >
              Our story
            </h2>
            <p className='relative self-stretch text-left text-lg leading-7 font-normal tracking-[-0.25px] text-white'>
              <span>
                <span>SmashPay was born in 2019 when our Founders </span>
                <span className='font-semibold text-white'>Reece James</span>
                <span> & </span>
                <span className='font-semibold text-white'>Phil Jones</span>
                <span>
                  {' '}
                  moved to Indonesia. The first thing on their to-do list was to open a bank account, so that
                  they could receive their salary, rent a place to stay and send money to their families in
                  United States. To open a bank account they needed proof of his address, utility bills and
                  countless other documents – but they couldn't get any of these without having a bank
                  account.
                  <br />
                  <br />
                  After being stuck in this frustrating loop, they always tried to fix it so that no one would
                  ever have to go through the same painful experience again. Until they came up with the idea
                  for{' '}
                </span>
                <span className='font-semibold text-white'>
                  SmashPay: an online remittance service that helps everyone send money abroad in an easier,
                  cheaper, and faster way
                </span>
                <span>.</span>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='relative flex w-full shrink-0 flex-col items-center justify-start gap-12 lg:w-auto'
        >
          <div className='relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[548px] lg:w-[640px]'>
            <Image
              src='/about-us/our-story-image.png'
              alt='Founders of SmashPay'
              fill
              className='rounded-[32px] object-cover'
              quality={90}
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurStorySection;
