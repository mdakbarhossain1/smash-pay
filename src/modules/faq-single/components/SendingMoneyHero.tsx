'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FaqSingleSection from './FaqSingleSection';

const SendingMoneyHero = () => {
  return (
    <motion.section
      className='relative flex w-full flex-col items-center justify-start gap-8 overflow-hidden px-5 py-16 sm:px-10 lg:px-20'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='relative flex w-full max-w-[1072px] flex-col items-center justify-start gap-8'>
        {/* Back button */}
        <motion.div
          className='flex w-full justify-start'
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button
            onClick={() => window.history.back()}
            className='flex cursor-pointer items-center justify-center rounded-[42px] border border-gray-700 bg-gradient-to-r from-gray-900 to-gray-900 p-3 text-white transition-all hover:from-gray-800 hover:to-gray-800'
          >
            <Image src='/arrow-left0.svg' alt='Back' width={18} height={18} className='h-[18px] w-[18px]' />
          </button>
        </motion.div>

        {/* Content */}
        <div className='relative flex w-full max-w-[1072px] flex-col items-start justify-start gap-8'>
          <motion.div
            className='flex w-full flex-col items-start justify-start gap-8'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className='flex w-full max-w-[768px] flex-col items-start justify-start gap-4'>
              {/* Title with icon */}
              <motion.div
                className='flex flex-col items-start justify-start gap-4 sm:flex-row'
                whileHover={{ scale: 1.02 }}
              >
                <div className='flex h-[48px] w-[48px] flex-shrink-0 items-center'>
                  <Image
                    src='/faq-sending-Icon.svg'
                    alt='Send money icon'
                    width={48}
                    height={48}
                    className=''
                  />
                </div>
                <h1 className='bg-gradient-to-b from-gray-400 to-white bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-4xl'>
                  Sending money
                </h1>
              </motion.div>

              {/* Supporting text */}
              <motion.p
                className='text-lg leading-relaxed tracking-tight text-gray-300'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Find information on Sending a bank transfer, Transfers between SmashPay users and Transfers in
                Other Countries and Currencies.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <FaqSingleSection />
    </motion.section>
  );
};

export default SendingMoneyHero;
