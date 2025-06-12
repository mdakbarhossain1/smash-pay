'use client';
import { fadeIn, staggerContainer } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const HelpHeader = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <motion.section
      variants={staggerContainer(0.1, 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='relative flex shrink-0 flex-col items-center justify-center gap-16 self-stretch px-4 pt-24 pb-32 sm:px-6 lg:px-8'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
    >
      <div className='relative flex w-full max-w-7xl flex-col items-center justify-center gap-16'>
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='flex w-full flex-col items-center justify-start gap-8'
        >
          <div className='flex w-full flex-col items-center justify-start gap-6'>
            <h2 className='bg-gradient-to-b from-gray-500 to-white bg-clip-text text-center text-5xl leading-tight font-medium tracking-tight text-transparent sm:text-6xl md:text-7xl'>
              How can we help?
            </h2>
          </div>

          {/* Search Input */}
          <motion.div variants={fadeIn('up', 'tween', 0.4, 1)} className='relative w-full max-w-xl'>
            <input
              type='text'
              placeholder='Search help articles'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='border-stroke-2 focus:ring-clr-14 block w-full rounded-full border bg-gray-900/50 py-3 pr-12 pl-4 text-base leading-normal tracking-tight text-white focus:border-transparent focus:ring-2 focus:outline-none'
            />
            <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <div className='bg-clr-14 flex h-8 w-8 items-center justify-center rounded-full text-white'>
                <FiSearch className='h-4 w-4' />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn('up', 'tween', 0.6, 1)} className='flex justify-center'>
            <div className='border-stroke-2 inline-flex rounded-full border bg-gray-900/50 p-1'>
              <button
                onClick={() => setActiveTab('personal')}
                className={`rounded-full px-6 py-2 text-sm leading-normal font-medium tracking-tight transition-colors ${
                  activeTab === 'personal'
                    ? 'bg-clr-14 text-white shadow-sm'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`rounded-full px-6 py-2 text-sm leading-normal font-medium tracking-tight transition-colors ${
                  activeTab === 'business'
                    ? 'bg-clr-14 text-white shadow-sm'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Business
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HelpHeader;
