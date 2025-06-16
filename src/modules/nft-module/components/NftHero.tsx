'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NftHero = () => {
  return (
    <motion.section
      className='flex w-full flex-col items-center justify-center gap-2.5 overflow-hidden px-8 py-32 md:px-20'
      initial={{ background: 'linear-gradient(to bottom, #0C1118, #1D1E2D)' }}
      animate={{
        background: [
          'linear-gradient(to bottom, #0C1118, #1D1E2D)',
          'linear-gradient(to bottom, #000000, #FFD700)',
          'linear-gradient(to bottom, #0C1118, #a4dd05)'
        ]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <div className='flex w-full max-w-[1280px] flex-col items-start justify-between gap-8 md:flex-row md:gap-16'>
        {/* Newsletter Content */}
        <motion.div
          className='flex flex-1 flex-col gap-10'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-6'>
              <h2 className='bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-4xl leading-tight font-bold tracking-[-2px] text-transparent md:text-5xl lg:text-8xl'>
                <b>
                  ONBOARD <br /> USERS
                </b>{' '}
                <br />
                <span className='text-bold gradient-text-2'>INSTANTLY</span> <br />
              </h2>
            </div>
            <p className='text-lg leading-relaxed tracking-[-0.25px] text-gray-300 md:text-xl'>
              from their bank into your NFT marketplace or mintdrop
            </p>
          </div>
        </motion.div>

        {/* Email Preview */}
        <motion.div
          className='relative hidden h-[560px] w-full shrink-0 md:block md:w-[560px]'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='bg-gradient-4 absolute right-0 -bottom-10 h-[650px] w-full overflow-hidden rounded-2xl border border-gray-800'>
            {/* Email Header */}
            <div className='relative h-[35.58px] w-full rounded-t-2xl bg-gray-800'>
              <div className='absolute top-3 right-4 flex gap-2'>
                <div className='h-2 w-2 rounded-full bg-gray-500'></div>
                <div className='h-2 w-2 rounded-full bg-gray-500'></div>
                <div className='h-2 w-2 rounded-full bg-gray-500'></div>
              </div>
            </div>

            {/* Email Content */}
            <div className='flex flex-col gap-6 p-8 pb-12'>
              {/* Logo */}
              <div className='relative h-8 w-[150px]'>
                <Image src='/blog/smashpay-logo.png' alt='SmashPay Logo' fill className='object-contain' />
              </div>

              {/* Featured Image */}
              <div className='relative h-110 w-full overflow-hidden rounded-2xl'>
                <Image src='/crypto/widget-nft.webp' alt='Featured content' fill className='object-cover' />
              </div>

              {/* Email Text */}
              <div className='flex flex-col gap-4 text-gray-300'>
                <p className='gradient-text text-base leading-relaxed font-bold'>NFT CARD</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NftHero;
