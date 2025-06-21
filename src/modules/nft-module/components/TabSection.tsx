'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const tabs = [
  {
    id: 'featured',
    title: 'FULL METAL RABBIT - KOSMO V2',
    image: '/crypto/kosmo.png'
  },
  {
    id: 'classic',
    title: 'TrailHeads',
    image: '/crypto/35418159_about_media_347c2cbd-6970-48ad-848c-654d1c7fdfaa.avif'
  },
  {
    id: 'trending',
    title: 'Cupang Ventures',
    image: '/crypto/35323342_about_media_027e48df-c3c2-4edc-beaa-df3349e7660d.avif'
  }
];

const TabSection = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className={`bg-gradient relative w-full overflow-hidden px-6 py-32`}>
      {/* Animated background gradient */}

      {/* Radial gradient overlay */}
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black' />

      {/* Content container */}
      <div className='mx-auto flex max-w-6xl flex-col gap-8'>
        {/* Header */}
        <div className='flex flex-col items-center'>
          <div className='mb-4 inline-block rounded-md border border-purple-300/20 bg-purple-300/10 px-4 py-1 text-sm backdrop-blur'>
            <p className='bg-gradient-to-l from-purple-300 to-teal-300 bg-clip-text font-semibold tracking-wider text-transparent'>
              Custom NFT Solution
            </p>
          </div>

          {/* Heading */}
          <h2 className='mb-2 text-center text-3xl font-semibold text-white md:text-5xl'>
            Effortless Custom NFT Integration
          </h2>
          <p className='mx-auto mb-8 text-center text-lg font-medium text-gray-300'>
            Unlock the power of a white-label NFT solution—no complex setup required. Easily launch{' '}
            <br className='hidden md:block' /> your own branded NFT collection using our fully customizable
            templates.
          </p>
        </div>
        {/* Horizontal Tabs */}
        <div className='flex justify-center gap-4 overflow-x-auto pb-2'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab)}
              className={`text-md flex-shrink-0 cursor-pointer rounded-lg px-6 py-2 font-medium whitespace-nowrap capitalize transition-all duration-300 ${
                selectedTab.id === tab.id
                  ? 'bg-gradient-to-r from-[#a4dd05] to-[#a4d5] text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gradient-4 border border-gray-700 text-gray-300 backdrop-blur-sm'
              }`}
            >
              {tab.id}
            </button>
          ))}
        </div>

        {/* Image */}
        <div className='relative h-80 w-full overflow-hidden rounded-2xl border border-gray-700/50 md:h-110'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className='absolute inset-0'
            >
              <Image
                src={selectedTab.image}
                alt={selectedTab.title}
                fill
                className='object-cover'
                sizes='100vw'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80' />
              <div className='absolute bottom-6 left-6'>
                <h3 className='gradient-text-2 text-3xl font-bold'>{selectedTab.title} Collections</h3>
                <p className='mt-2 text-gray-300'>Exclusive {selectedTab.title.toLowerCase()} themed NFTs</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
