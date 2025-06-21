'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState, type JSX } from 'react';
import { FiFileText, FiLayers, FiShield, FiZap } from 'react-icons/fi';

type TabKey = 'storage' | 'contracts' | 'transactions' | 'tokenization';

const tabs: { id: TabKey; title: string; icon: JSX.Element }[] = [
  { id: 'storage', title: 'Secure Data Storage', icon: <FiShield size={24} /> },
  { id: 'contracts', title: 'Smart Contracts', icon: <FiFileText size={24} /> },
  { id: 'transactions', title: 'Fast Transactions', icon: <FiZap size={24} /> },
  { id: 'tokenization', title: 'Asset Tokenization', icon: <FiLayers size={24} /> }
];

const imageOrder: Record<TabKey, number[]> = {
  storage: [1, 2, 3],
  contracts: [2, 1, 3],
  transactions: [3, 2, 1],
  tokenization: [2, 3, 1]
};

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('storage');
  const images = imageOrder[activeTab];

  return (
    <section className=''>
      <div className='mx-auto max-w-6xl rounded-2xl p-6 text-white md:p-10'>
        {/* Tabs */}
        <div className='mb-8 flex flex-wrap justify-center gap-4'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-teal-300 font-semibold text-black'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab.icon}
              <span className='hidden sm:inline'>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className='grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'
          >
            {images.map((img, index) => (
              <Image
                key={index}
                src={`/crypto/img${img}.jpg`}
                alt={`Feature Image ${img}`}
                width={450}
                height={450}
                className='w-full max-w-[450px] rounded-xl object-contain'
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeatureTabs;
