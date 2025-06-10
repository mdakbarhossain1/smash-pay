'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BlogHeroSection = () => {
  return (
    <div className='bg-bg bg-clr-14 relative flex w-full flex-col items-center justify-start px-4 py-16 sm:px-8 sm:py-24'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='grid w-full max-w-[1280px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-8'
      >
        {/* Left Section: 2/3 width */}
        <div className='col-span-1 flex flex-col gap-4 md:col-span-2'>
          <div className='relative h-64 w-full overflow-hidden rounded-lg sm:h-80 md:h-[500px]'>
            <Image src='/blog/news.png' alt='Left Hero Image' layout='fill' objectFit='center' priority />
          </div>

          <div className='mt-2 inline-flex w-max items-center gap-4 rounded-full border-2 border-gray-700 p-1 pr-2'>
            <span className='rounded-full bg-gray-700 px-3 py-1 text-xs text-white sm:text-sm'>News</span>
            <span className='text-xs text-gray-400 sm:text-sm'>5 min read</span>
          </div>

          <h2 className='text-xl leading-tight font-semibold text-white sm:text-3xl'>
            We both joined Smashpay to enhance global money transfers capabilities
          </h2>

          <div className='mt-4 flex items-center gap-3'>
            <div className='relative h-8 w-8 overflow-hidden rounded-full sm:h-10 sm:w-10'>
              <Image src='/blog/james.png' alt='Author' layout='fill' objectFit='cover' />
            </div>
            <div className='text-xs text-gray-300 sm:text-sm'>
              <div className='font-medium'>Reece James</div>
              <div className='text-gray-400'>Oct 5, 2023</div>
            </div>
          </div>
        </div>

        {/* Right Section: 1/3 width */}
        <div className='flex flex-col gap-4'>
          <div className='relative h-64 w-full overflow-hidden rounded-lg sm:h-80 md:h-[500px]'>
            <Image src='/blog/card.jpg' alt='Right Hero Image' layout='fill' objectFit='cover' priority />
          </div>

          <div className='mt-2 inline-flex w-max items-center gap-4 rounded-full border-2 border-gray-700 p-1 pr-2'>
            <span className='rounded-full bg-gray-700 px-3 py-1 text-xs text-white sm:text-sm'>News</span>
            <span className='text-xs text-gray-400 sm:text-sm'>5 min read</span>
          </div>

          <h2 className='text-lg leading-snug font-semibold text-white sm:text-xl'>
            We both joined Smashpay to enhance global money transfers capabilities
          </h2>

          <div className='mt-4 flex items-center gap-3'>
            <div className='relative h-6 w-6 overflow-hidden rounded-full sm:h-8 sm:w-8'>
              <Image src='/blog/samashPay.png' alt='Author' layout='fill' objectFit='cover' />
            </div>
            <div className='text-xs text-gray-300 sm:text-sm'>
              <div className='font-medium'>SmashPay</div>
              <div className='text-gray-400'>Sep 28, 2023</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogHeroSection;
