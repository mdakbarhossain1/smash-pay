'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type CustomerStory = {
  id: number;
  company: string;
  title: string;
  description: string;
  image: string;
  personImage?: string;
  isFeatured?: boolean;
};

const CustomerStories = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const stories: CustomerStory[] = [
    {
      id: 1,
      company: 'Asana',
      title: 'choose SmashPay to power paid subscriptions globally.',
      description: '',
      image: '/blog/asana.png',
      isFeatured: true
    },
    {
      id: 2,
      company: 'Electrolux',
      title: 'select SmashPay to create a single platform for global billing and payments.',
      description: '',
      image: '/blog/electrolux.png'
    },
    {
      id: 3,
      company: 'Uber',
      title: 'optimizes the driver experience using SmashPay as their main payment.',
      description: '',
      image: '/blog/uber.png'
    },
    {
      id: 4,
      company: 'WeBoth',
      title: 'sees an 8% increase in authorization rates with SmashPay.',
      description: '',
      image: '/blog/weboth.png'
    },
    {
      id: 5,
      company: 'Ebay',
      title: 'improves authorization and preventing fraud with SmashPay.',
      description: '',
      image: '/blog/ebay.png'
    }
  ];

  // const featuredStory = stories.find((story) => story.isFeatured);
  // const regularStories = stories.filter((story) => !story.isFeatured);

  return (
    <section className='w-full overflow-hidden bg-gradient-to-b from-[#0C1118] to-[#1D1E2D] py-32'>
      <div className='mx-auto flex w-full max-w-[1280px] flex-col items-start gap-16 px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='w-full'
        >
          <h2 className='bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-left text-4xl leading-tight font-medium tracking-[-2px] text-transparent md:text-5xl lg:text-6xl'>
            Customer stories
          </h2>
        </motion.div>

        <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {stories.map((story, index) => {
            const isFeatured = story.isFeatured;

            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-bg bg-clr-14 border-stroke-2 flex flex-col rounded-3xl border ${isFeatured ? 'flex-row items-center justify-between p-10 md:col-span-2 lg:col-span-2' : 'pb-10'} `}
              >
                {/* Featured Story Layout */}
                {isFeatured ? (
                  <>
                    {/* Left Side: Text + Button */}
                    <div className='flex flex-col justify-center gap-8 lg:w-[360px]'>
                      <h3 className='text-3xl leading-[50px] font-normal tracking-[-1.5px] text-white md:text-4xl'>
                        <span className='font-semibold'>{story.company}</span> {story.title}
                      </h3>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='border-stroke-2 flex w-fit items-center justify-center gap-1.5 rounded-[48px] border px-[25px] py-3'
                      >
                        <span className='text-base font-semibold tracking-[-0.25px] text-white'>
                          Read story
                        </span>
                        <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
                          <path
                            d='M7.5 13.5L12 9L7.5 4.5'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </motion.button>
                    </div>

                    {/* Right Side: Image */}
                    <div className='relative h-[424px] w-[360px]'>
                      <Image
                        src={story.image}
                        alt={story.company}
                        width={360}
                        height={424}
                        className='object-cover'
                      />
                    </div>
                  </>
                ) : (
                  // Regular Story Layout
                  <>
                    <div className={'relative h-64 w-full overflow-hidden'}>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='relative h-full w-full'>
                          <Image
                            src={story.image}
                            alt={`${story.company} representative`}
                            fill
                            className='h-full w-full object-cover'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col gap-8 px-10 pt-8'>
                      <h3 className='text-2xl leading-8 font-normal tracking-[-1px] text-gray-300'>
                        <span className='font-semibold text-white'>{story.company}</span> {story.title}
                      </h3>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='border-stroke-2 flex w-fit items-center justify-center gap-1.5 rounded-[48px] border px-[25px] py-3'
                      >
                        <span className='text-base font-semibold tracking-[-0.25px] text-white'>
                          Read story
                        </span>
                        <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
                          <path
                            d='M7.5 13.5L12 9L7.5 4.5'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='flex w-full flex-col items-center justify-between gap-4 pt-5 md:flex-row'
        >
          <button className='flex items-center gap-1.5 text-base font-semibold tracking-[-0.25px] text-gray-300 transition-colors hover:text-white'>
            <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.5 13.5L6 9L10.5 4.5'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Previous
          </button>

          <div className='flex items-center gap-1'>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-12 w-12 items-center justify-center rounded-full text-lg transition-colors ${
                  page === currentPage ? 'bg-bg text-white' : 'text-white hover:bg-gray-800'
                }`}
              >
                {page}
              </button>
            ))}
            <button className='flex h-12 w-12 items-center justify-center rounded-full text-lg text-white hover:bg-gray-800'>
              ...
            </button>
            <button className='flex h-12 w-12 items-center justify-center rounded-full text-lg text-white hover:bg-gray-800'>
              10
            </button>
          </div>

          <button className='border-stroke-2 flex items-center justify-center gap-1.5 rounded-[44px] border bg-gradient-to-b from-[#151820] to-[#010101] px-5 py-2.5 text-base font-semibold tracking-[-0.25px] text-white transition-opacity hover:opacity-90'>
            Next
            <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M7.5 13.5L12 9L7.5 4.5'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerStories;
