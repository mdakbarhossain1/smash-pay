'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, type JSX } from 'react';
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

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const images = imageOrder[activeTab];

  return (
    <section>
      <div className='mx-auto max-w-7xl rounded-2xl text-white'>
        {/* Tabs */}
        <div
          className='mx-auto mt-10 mb-8 flex max-w-[870px] flex-col justify-center gap-4 rounded-2xl py-3 md:flex-row'
          style={{
            backgroundColor: 'var(--token-0e4ec8d8-4630-423b-9664-60c09b619eeb, rgb(32, 35, 45))'
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-3 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-teal-300 font-semibold text-black'
                  : 'hover:text-bold hover:text-white'
              }`}
            >
              {tab.icon}
              <span className='text-white'>{tab.title}</span>
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
            className='bg-gradient-4 mx-auto grid w-sm grid-cols-1 place-items-center items-center justify-center gap-6 rounded-xl border px-4 pt-20 sm:grid-cols-2 md:w-7xl md:px-16 lg:grid-cols-3'
            style={{
              borderColor: 'var(--token-3ad3ba9a-ccc2-40b7-8c6f-fc587431b9c3, rgb(49, 53, 63))'
            }}
          >
            {images.map((img, index) => (
              <Image
                key={index}
                src={`/crypto/img${img}.jpg`}
                alt={`Feature Image ${img}`}
                width={450}
                height={450}
                className='w-full max-w-[450px] rounded-tl-xl rounded-tr-xl object-contain'
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeatureTabs;
