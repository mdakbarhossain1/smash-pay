'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const tabs = [
  {
    id: 'classic',
    title: 'Classic',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop',
    bgGradient: 'from-purple-900/30 via-black to-blue-900/30'
  },
  {
    id: 'space',
    title: 'Space',
    image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=2080&auto=format&fit=crop',
    bgGradient: 'from-indigo-900/30 via-black to-violet-900/30'
  },
  {
    id: 'sky',
    title: 'Sky',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
    bgGradient: 'from-cyan-900/30 via-black to-blue-900/30'
  }
];

const TabSection = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className={`relative w-full overflow-hidden px-6 py-32`}>
      {/* Animated background gradient */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={selectedTab.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-b ${selectedTab.bgGradient} -z-10`}
        />
      </AnimatePresence>

      {/* Radial gradient overlay */}
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black' />

      {/* Content container */}
      <div className='mx-auto flex max-w-6xl flex-col gap-8'>
        {/* Header */}
        <div className='mb-6 text-center'>
          <h2 className='gradient-text-2 mb-4 text-4xl font-bold text-transparent md:text-6xl'>
            CUSTOMIZABLE NFT EXPERIENCE
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-gray-300'>
            All the benefits of a white label integration without the hassle of building it! Create your
            unique NFT collection with our customizable templates.
          </p>
        </div>

        {/* Horizontal Tabs */}
        <div className='flex justify-center gap-4 overflow-x-auto pb-2'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab)}
              className={`text-md flex-shrink-0 cursor-pointer rounded-lg px-6 py-2 font-medium whitespace-nowrap transition-all duration-300 ${
                selectedTab.id === tab.id
                  ? 'bg-gradient-to-r from-[#a4dd05] to-[#a4d5] text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gradient-4 border border-gray-700 text-gray-300 backdrop-blur-sm'
              }`}
            >
              {tab.title}
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
                <h3 className='gradient-text-2 text-3xl font-bold'>{selectedTab.title} Collection</h3>
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
