'use client';
import { fadeIn, staggerContainer } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

const PaymentHeader = () => {
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
            <h2 className='gradient-text text-center text-5xl leading-tight font-medium tracking-tight text-transparent sm:text-6xl md:text-7xl'>
              Choose how your customers make and receive payments through our global banking network
            </h2>
          </div>

          {/* Search Input */}
          <motion.div variants={fadeIn('up', 'tween', 0.4, 1)} className='relative w-full max-w-2xl'>
            <p className='text-center text-lg text-gray-300'>
              SMASHPAY Banking as a Service platform connects you to cross-border payment rails giving you the
              power to create your bespoke programme
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PaymentHeader;
